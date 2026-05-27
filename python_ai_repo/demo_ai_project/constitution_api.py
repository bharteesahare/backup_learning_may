
from pypdf import PdfReader
import numpy as np
from google import genai

# =====================
# CONFIG
# =====================
PDF_PATH = "/home/bharti/Downloads/borkar_ashwin_resume.pdf"

EMBED_MODEL = "gemini-embedding-001"
CHAT_MODEL = "gemini-2.5-flash"

client = genai.Client(api_key=GEMINI_API_KEY)

# =====================
# PDF LOADING
# =====================
def load_pdf(path):
    reader = PdfReader(path)
    text = ""
    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text + "\n"
    return text

# =====================
# TEXT CHUNKING
# =====================
def chunk_text(text, chunk_size=500, overlap=100):
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start = end - overlap
    return chunks

# =====================
# EMBEDDINGS (GEMINI)
# =====================
def get_embedding(text):
    result = client.models.embed_content(
        model=EMBED_MODEL,
        contents=text
    )
    return result.embeddings[0].values

# =====================
# SIMILARITY
# =====================
def cosine_similarity(a, b):
    a = np.array(a)
    b = np.array(b)
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# =====================
# LOAD & INDEX PDF
# =====================
print("Loading PDF...")
pdf_text = load_pdf(PDF_PATH)

print("Chunking text...")
chunks = chunk_text(pdf_text)

print("Generating embeddings...")
chunk_embeddings = [get_embedding(chunk) for chunk in chunks]

print(f"Indexed {len(chunks)} chunks")

# =====================
# SEARCH
# =====================
def retrieve_chunks(question, top_k=3):
    q_embedding = get_embedding(question)

    scores = []
    for i, emb in enumerate(chunk_embeddings):
        score = cosine_similarity(q_embedding, emb)
        scores.append((chunks[i], score))

    scores.sort(key=lambda x: x[1], reverse=True)
    return [text for text, _ in scores[:top_k]]

# =====================
# ASK QUESTION (RAG)
# =====================
def ask_pdf(question):
    relevant_chunks = retrieve_chunks(question)
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
# CHAT LOOP
# =====================
print("\n📘 PDF Q&A (Gemini) Ready! Type 'exit' to quit.\n")

while True:
    question = input("Ask a question: ")
    if question.lower() == "exit":
        break

    answer = ask_pdf(question)
    print("\nAnswer:\n", answer, "\n")
iqr-ymkg-yvp