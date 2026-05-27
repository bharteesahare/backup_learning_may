Here’s a clear and easy-to-understand system design note on **Load Balancing**:

---

## ⚖️ Load Balancing – System Design Notes

### 🔍 What is Load Balancing?

**Load Balancing** is the process of distributing incoming network traffic or requests **across multiple servers** to ensure no single server is overwhelmed.
It helps in **achieving high availability, reliability, and scalability**.

---

### 🛠️ Why is Load Balancing Important?

* ✅ Handles **high traffic smoothly**
* ✅ Avoids **server overload or failure**
* ✅ Improves **response time & user experience**
* ✅ Ensures **redundancy** (if one server fails, others take over)

---

### 🧠 How Load Balancer Works

1. Client sends a request.
2. Load balancer receives it.
3. It chooses a backend server based on a strategy.
4. Server processes the request and sends response via load balancer.

---

### ⚙️ Common Load Balancing Algorithms

| Algorithm                | Description                                                                     |
| ------------------------ | ------------------------------------------------------------------------------- |
| **Round Robin**          | Sends each request to the next server in a cycle. Simple and fair.              |
| **Least Connections**    | Sends traffic to the server with the fewest active connections.                 |
| **IP Hash**              | Sends requests from the same IP to the same server. Useful for sticky sessions. |
| **Weighted Round Robin** | Distributes based on server capacity (e.g., strong server gets more load).      |

---

### 🧱 Types of Load Balancers

| Type            | Example Technologies                  | Layer  |
| --------------- | ------------------------------------- | ------ |
| **Hardware**    | F5, Cisco                             | 4 or 7 |
| **Software**    | Nginx, HAProxy, Apache                | 4 or 7 |
| **Cloud-based** | AWS ELB, Azure LB, GCP Load Balancing | 4 or 7 |

---

### 🌐 Layer 4 vs Layer 7 Load Balancing

| Layer                     | Based On               | Example Use                        |
| ------------------------- | ---------------------- | ---------------------------------- |
| **Layer 4 (Transport)**   | IP + Port (TCP/UDP)    | Fast & efficient, less flexible    |
| **Layer 7 (Application)** | HTTP, cookies, headers | Routing based on URL path, headers |

---

### 🧪 Example Scenario

You have 3 web servers:
User requests → Load Balancer → Sends it to the least busy server.

If one server goes down:

* Load balancer detects it (via health checks)
* Stops routing traffic to the failed server
* Keeps serving traffic using other healthy servers

---

### 📦 Tools & Services

* **Nginx** / **HAProxy** – open source software load balancers
* **AWS ELB** – Elastic Load Balancer
* **Cloudflare / Fastly** – also offer global load balancing with CDN

---

Let me know if you’d like this exported as a **PDF** or need a diagram to visualize the flow.
