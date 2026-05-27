# app.py
import streamlit as st
from pypdf import PdfReader
import numpy as np
from google import genai

# =====================
# CONFIG
# =====================
EMBED_MODEL = "gemini-embedding-001"
CHAT_MODEL = "gemini-2.5-flash"

# Make sure you set your API key in your environment
# e.g., export GEMINI_API_KEY="your_key"
import os
GEMINI_API_KEY = os.environ.get("AIzaSyAGAJuwAgMBRRwChivlQXo4w0sW9Koa1SI")

client = genai.Client(api_key="AIzaSyAGAJuwAgMBRRwChivlQXo4w0sW9Koa1SI")

# =====================
# FUNCTIONS
# =====================
def load_pdf(file):
    reader = PdfReader(file)
    text = ""
    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text + "\n"
    return text

def chunk_text(text, chunk_size=500, overlap=100):
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start = end - overlap
    return chunks

def get_embedding(text):
    result = client.models.embed_content(
        model=EMBED_MODEL,
        contents=text
    )
    return result.embeddings[0].values

def cosine_similarity(a, b):
    a = np.array(a)
    b = np.array(b)
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

def retrieve_chunks(question, chunks, chunk_embeddings, top_k=3):
    q_embedding = get_embedding(question)
    scores = [(chunks[i], cosine_similarity(q_embedding, emb)) for i, emb in enumerate(chunk_embeddings)]
    scores.sort(key=lambda x: x[1], reverse=True)
    return [text for text, _ in scores[:top_k]]

def ask_pdf(question, chunks, chunk_embeddings):
    relevant_chunks = retrieve_chunks(question, chunks, chunk_embeddings)
    context = "\n\n".join(relevant_chunks)

    prompt = f"""
Answer the question ONLY using the context below.
If the answer is not in the context, say "I don't know".

Context:
{context}

Question:
{question}
"""
    response = client.models.generate_content(
        model=CHAT_MODEL,
        contents=prompt
    )
    return response.text

# =====================
# STREAMLIT UI
# =====================
st.set_page_config(page_title="PDF Q&A", page_icon="📘")

st.title("📘 PDF Q&A with Gemini")
st.write("Upload a PDF and ask questions about its content!")

uploaded_file = st.file_uploader("Upload PDF", type="pdf")

if uploaded_file:
    st.info("Loading PDF...")
    pdf_text = load_pdf(uploaded_file)

    st.info("Chunking text...")
    chunks = chunk_text(pdf_text)

    st.info("Generating embeddings...")
    chunk_embeddings = [get_embedding(chunk) for chunk in chunks]
    st.success(f"Indexed {len(chunks)} chunks!")

    question = st.text_input("Ask a question about the PDF:")
    if question:
        st.info("Fetching answer...")
        answer = ask_pdf(question, chunks, chunk_embeddings)
        st.markdown(f"**Answer:** {answer}")
