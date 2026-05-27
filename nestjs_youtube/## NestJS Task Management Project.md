## NestJS Task Management Project

### 📌 In-Memory API with Interfaces & DTOs (No DB)

---

## 🧠 Project Overview

You will build a **Task Management REST API** using **NestJS best practices**, where:

* Data is stored in memory (arrays)
* Relationships are handled using IDs
* Interfaces define data shape
* DTOs handle validation
* Dependency Injection connects modules

---

## 🧱 Modules (3)

### 1️⃣ Users Module

Manages users.

### 2️⃣ Projects Module

Each project belongs to a user.

### 3️⃣ Tasks Module

Each task belongs to a project and a user.

---

## 🔗 Relationships

```
User (1) → (Many) Projects
Project (1) → (Many) Tasks
User (1) → (Many) Tasks
```

IDs act like foreign keys.

---

## 🏗️ Folder Structure

```
src/
 ├── users/
 │    ├── users.module.ts
 │    ├── users.controller.ts
 │    ├── users.service.ts
 │    ├── dto/
 │    └── interfaces/
 │
 ├── projects/
 │    ├── projects.module.ts
 │    ├── projects.controller.ts
 │    ├── projects.service.ts
 │    ├── dto/
 │    └── interfaces/
 │
 ├── tasks/
 │    ├── tasks.module.ts
 │    ├── tasks.controller.ts
 │    ├── tasks.service.ts
 │    ├── dto/
 │    └── interfaces/
 │
 └── app.module.ts
```

---

## 👤 Users Module

### User Interface

```ts
export interface User {
  id: string;
  name: string;
}
```

### Stored In Memory

```ts
private users: User[] = [];
```

### Endpoints

```http
POST /users
GET  /users
```

---

## 📁 Projects Module

### Project Interface

```ts
export interface Project {
  id: string;
  name: string;
  userId: string;
}
```

### Stored In Memory

```ts
private projects: Project[] = [];
```

### Endpoints

```http
POST /projects
GET  /projects/user/:userId
```

---

## ✅ Tasks Module

### Task Interface

```ts
export interface Task {
  id: string;
  title: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE';
  userId: string;
  projectId: string;
}
```

### Stored In Memory

```ts
private tasks: Task[] = [];
```

---

## 🔌 Dependency Injection (Important Part)

`TasksService` injects:

* `UsersService`
* `ProjectsService`

Used to:

* Validate user exists
* Validate project exists
* Ensure project belongs to user

---

## 🌐 REST API Endpoints

### 👤 Users

```http
POST /users
GET  /users
```

---

### 📁 Projects

```http
POST /projects
GET  /projects/user/:userId
```

---

### ✅ Tasks

```http
POST   /tasks
GET    /tasks/project/:projectId
PATCH  /tasks/:id
DELETE /tasks/:id
```

---

## 🧾 DTOs (Validation Layer)

### CreateTaskDto

```ts
@IsString()
@IsNotEmpty()
title: string;

@IsIn(['OPEN', 'IN_PROGRESS', 'DONE'])
status: string;

@IsString()
userId: string;

@IsString()
projectId: string;
```

### UpdateTaskDto

```ts
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
```

---

## ⚠️ Error Handling (Professional Style)

| Case                      | Exception             |
| ------------------------- | --------------------- |
| User not found            | `NotFoundException`   |
| Project not found         | `NotFoundException`   |
| Project not owned by user | `BadRequestException` |
| Task not found            | `NotFoundException`   |

---

## 🧪 Suggested Testing Flow

1. Create user
2. Create project for that user
3. Create task for that project
4. Fetch tasks by project
5. Update task status
6. Delete task

---

## 🧠 Concepts You Practice

✅ Interfaces
✅ DTOs & Validation Pipes
✅ Dependency Injection
✅ Module communication
✅ REST APIs
✅ Error handling
✅ PATCH vs PUT
✅ Real-world relationships (no DB)

---

## 🎯 Practice Extensions

1. Add task filtering by status
2. Prevent deleting completed tasks
3. Add pagination with query params
4. Add request logging interceptor
5. Convert in-memory storage to DB later

---

## 🏁 Why This Is the Right Level

* Clean & professional
* No ORM confusion
* Matches real NestJS apps
* Easy DB migration later

---

If you want next, I can:

* Write **full service & controller code**
* Break this into **lesson-wise steps**
* Create **assignments + solutions**
* Add **auth simulation (no DB)**

Just tell me 🚀
