import streamlit as st
import faiss
import numpy as np
from PyPDF2 import PdfReader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from google import genai



# OPENAI_API_KEY = "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"
# streamlit --version
# streamlit: command not found
# pip install streamlit
# streamlit run chatbot.py
#uplod pdf file
# in the backedn intialize the streamlite, enevaling interface, that is available to 
# ModuleNotFoundError: No module named 'langchain_text_splitters'
    # solution: pip install langchain_text_splitters
st.header('My first chatbot')

with st.sidebar:
    st.title("your documents")
    file = st.file_uploader(
    "Upload a pdf file and start asking questions",
    type=["pdf"])

# second break the into chunks
# extract the text

if file is not None:
    pdf_reader = PdfReader(file) #readr the file
    text = "" # intitalize the blank
    for page in pdf_reader.pages:  #go tp page 1, 2, 
        text+=page.extract_text()  #extract the page by page puting into text. 
        # st.write(text)

# break it into chunks
# small section -> small token -> better undersstand.
# used the lanchain
    # rule this is rule
    text_splitter = RecursiveCharacterTextSplitter(
    separators=["\n"],  # break it on the new line
    chunk_size=1000,    # chunk after 1000 characters
    chunk_overlap=150,
    length_function=len
    )

    chunks = text_splitter.split_text(text)

    st.write(chunks)

# error:
# ValueError: numpy.dtype size changed, may indicate binary incompatibility. Expected 96 from C header, got 88 from PyObject
# Traceback:
# File "/home/bharti/Documents/learning_target/python_ai_repo/chatbot.py", line 41, in <module>
#     st.write(chunks)
# solution:
# python -m venv venv
# source venv/bin/activate      # Linux/macOS
# venv\Scripts\activate         # Windows
# pip install --upgrade pip
# pip install streamlit pypdf langchain langchain-text-splitters numpy


# embeding # which is crucial part.
# feeding into the embedding and store to vector.
# gugginginterface.
#  open ai for text understanding and text generation.
# vectore store, vector db -> we need to store the embedding.
# it is a database store embedding.


# generating embedding.
    # this code used for the gpt embeding
    # embedding = OpenAIEmbeddings(open_api_key = OPENAI_API_KEY)
    # embeddings = OpenAIEmbeddings(openai_api_key="AIzaSyBjA34ENgeGNplvIqCP-qcH2fuMkqxdO7o")

    # this code used for the gemini embeding\
    # Initialize Google GenAI client

    # Get embeddings for all chunks
    result = client.models.embed_content(
        model="gemini-embedding-001",
        contents=chunks  # list of strings
    )
    embeddings_list = [e.values for e in result.embeddings]

    # 2️⃣ Convert to NumPy array
    embedding_matrix = np.array(embeddings_list).astype("float32")
    
    # 3️⃣ Dimension of embeddings
    d = embedding_matrix.shape[1]

    # 4️⃣ Create FAISS index
    index = faiss.IndexFlatL2(d)

    # 5️⃣ Add embeddings to FAISS
    index.add(embedding_matrix)

    # 4. Search
    query_embedding = client.models.embed_content(
        model="gemini-embedding-001",
        contents=[user_question]
    )
    query_vector = np.array([e.values for e in query_embedding.embeddings]).astype("float32")

    # similarity search
    k = 5  # top 5 results
    D, I = index.search(query_vector, k)  # distances and indices
    results = [chunks[i] for i in I[0]]
    st.write(results)



    # Extract embeddings as a list of lists
    # embeddings_list = [emb.values for emb in result.embeddings]


# creating vector store. # we used here FAISS
    vectore_store = FAISS.from_texts(chunks, embedding_matrix)
    # embeding (open ai)
    # intializing faiss
    # store chunk and embedding 
# a and b are nothing but my chunks
# A 123 
# B 1234


# write the two line of code -> neural of network just two line of code, this is the future of code. open ai lama, everything is store into the two steps.
# two line of coding -> embeding, vector store.




# user part ask question, give the answer.
# sematic search
# vectore store
# llm



# get user question
    user_question = st.text_input("Type your question here")


# do similarity search
    if user_question:
        match = vectore_store.similarity_search(user_question)
        st.write(match)
        # A = question 
        # B = vector db -? vectore_store
        # now we can companre and result the result
        # that result is the chunk of the result.


#output result