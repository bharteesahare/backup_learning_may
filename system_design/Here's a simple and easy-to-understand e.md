Here's a simple and easy-to-understand explanation of **Latency vs Throughput** for your **System Design** notes:

---

## 📘 **System Design: Latency vs Throughput**

---

### 🚀 **1. Latency**

* **Definition**: The time it takes to complete **one request**.
* Think of it as **response time**.
* ⏱️ **Measured in**: milliseconds (ms), microseconds (μs), or seconds.

#### ✅ Example:

* You send a message on WhatsApp.
* Latency = Time it takes for the message to get delivered and show **"Delivered"**.

#### 🔁 Analogy:

* Like how long it takes to get your **burger after ordering** at a fast-food counter.

---

### 📦 **2. Throughput**

* **Definition**: The number of requests the system can handle **per unit of time**.
* It's about **capacity or volume**.
* 📊 **Measured in**: requests/second, transactions/second, Mbps (for networks), etc.

#### ✅ Example:

* Your server handles 1,000 API requests per second.
* Throughput = 1000 requests/sec

#### 🔁 Analogy:

* Like **how many burgers** a McDonald's kitchen can serve in **one minute**.

---

### ⚖️ **Latency vs Throughput**

| Feature | Latency                | Throughput                |
| ------- | ---------------------- | ------------------------- |
| Meaning | Time per request       | Requests per second       |
| Goal    | Make it **faster**     | Handle **more**           |
| Units   | ms, s                  | req/sec, MB/sec           |
| Focus   | **Speed of 1 task**    | **Volume of tasks**       |
| Analogy | Wait time for 1 burger | Burgers served per minute |

---

### 🧠 Tips for Interviews

* Low **latency** = faster response time.
* High **throughput** = better scalability.
* **Trade-off**: Sometimes improving one can worsen the other.

---

### 🔧 Optimization

* Use **caching** to reduce latency.
* Use **load balancing, sharding, queues** to increase throughput.
* Use **asynchronous processing** to improve perceived latency.

---

Let me know if you'd like a **PDF or image version** of these notes.
