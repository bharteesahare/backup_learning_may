from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key="AIzaSyAGAJuwAgMBRRwChivlQXo4w0sW9Koa1SI",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai"
)

response = client.chat.completions.create(
    model="gemini-2.5-flash",
    messages=[
        # { "role": "system", "content": "You are an expert in Maths and only and only ans maths realted questions. That if the query is not related to maths. Just say sorry and do not ans that." },
        # { "role": "user", "content": "Hey, can you help me solve the a + b whole square"}
        { "role": "system", "content": "You are an expert in ruby on rails and only and only ans ruby realted questions. That if the query is not related to ruby. Just say sorry and do not ans that." },
        {"role": "user", "content": "Hey , what is ruby on rails explain me in detail with architecture"} #"role": "user", "content": 
    ]
)

print(response.choices[0].message.content)