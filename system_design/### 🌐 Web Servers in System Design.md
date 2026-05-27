### 🌐 Web Servers in System Design

A **web server** is a core component in system design that **handles HTTP requests** from clients (usually browsers) and **serves back responses**, typically HTML, JSON, or other web content.

---

### 🔹 What Is a Web Server?

* A **software application** (like Apache, Nginx, Puma, Unicorn, etc.).
* Or a **physical/virtual machine** that runs the web server software.
* It **listens on ports** (usually 80 for HTTP, 443 for HTTPS) and **responds to requests** from users.

---

### 🔹 Role in System Design

1. **Receives Requests**:

   * From browsers, apps, or APIs via DNS and Load Balancer.

2. **Processes or Forwards**:

   * Static files: Serves HTML, CSS, JS directly.
   * Dynamic content: Forwards request to app server (like Rails, Node.js, Django).

3. **Returns Response**:

   * Sends HTTP response to client.

---

### 🔹 Example Web Server Flow:

```
Client → DNS → Load Balancer → Web Server → App Server → DB
```

---

### 🔹 Popular Web Servers:

| Web Server        | Key Features                                          |
| ----------------- | ----------------------------------------------------- |
| **Nginx**         | High performance, reverse proxy, static file handling |
| **Apache**        | Flexible, module-based, widely used                   |
| **Caddy**         | Automatic HTTPS, simple config                        |
| **LiteSpeed**     | Fast with PHP, good for WordPress                     |
| **IIS (Windows)** | Microsoft ecosystem                                   |

---

### 🔹 Responsibilities in a Scalable System:

* **SSL termination** (handle HTTPS).
* **Serve static content** efficiently.
* **Reverse proxy** to application servers.
* **Rate limiting**, **caching**, and **load balancing** (in some cases).

---

### 🧩 In System Design Layers:

1. **DNS**
2. **Load Balancer**
3. ✅ **Web Server**
4. App Server
5. Database

---

Would you like a diagram of how web servers interact in a large-scale architecture?
