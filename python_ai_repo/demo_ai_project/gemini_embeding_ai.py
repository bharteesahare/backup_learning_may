from google import genai

# client = OpenAI(
#     api_key="AIzaSyAGAJuwAgMBRRwChivlQXo4w0sW9Koa1SI",
#     base_url="https://generativelanguage.googleapis.com/v1beta/openai"
# )
client = genai.Client(
    api_key="AIzaSyAGAJuwAgMBRRwChivlQXo4w0sW9Koa1SI"
    # base_url="https://generativelanguage.googleapis.com/v1beta/openai"
)

result = client.models.embed_content(
        model="gemini-embedding-001",
        contents="What is the meaning of life?")

print(result.embeddings)
