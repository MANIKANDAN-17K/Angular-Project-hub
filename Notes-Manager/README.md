# 📝 Angular Notes Manager

A simple **Angular learning project** that demonstrates the core concepts of Angular such as components, services, data binding, directives, and dependency injection.

This project is designed as a **skeletal project for concept understanding**, where each file is kept small and focused.

---

# 📌 Project Objective

The goal of this project is to understand the **fundamental architecture of Angular** by building a small Notes Manager application.

Users can:

* Add notes
* View notes
* Delete notes

---

# ⚙️ Technologies Used

* Angular
* TypeScript
* HTML
* CSS
* Angular CLI

---

# 🏗️ Angular Concepts Covered

This project focuses on the following Angular concepts:

| Concept              | Description                       |
| -------------------- | --------------------------------- |
| Component            | Controls UI and logic             |
| Service              | Handles shared business logic     |
| Interface            | Defines the structure of data     |
| Dependency Injection | Inject services into components   |
| Lifecycle Hook       | Uses `ngOnInit()`                 |
| Data Binding         | Interpolation and Two-way binding |
| Directives           | `*ngFor` and `*ngIf`              |

---

# 📂 Project Structure

```
notes-app
│
├── src
│   │
│   └── app
│       │
│       ├── models
│       │   └── note.ts
│       │
│       ├── services
│       │   └── note.service.ts
│       │
│       ├── components
│       │   └── note
│       │       ├── note.component.ts
│       │       ├── note.component.html
│       │       └── note.component.css
│       │
│       ├── app.component.ts
│       ├── app.component.html
│       └── app.module.ts
│
└── README.md
```

---

# 🚀 How to Run the Project

### 1️⃣ Install Angular CLI

```
npm install -g @angular/cli
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the application

```
ng serve
```

### 4️⃣ Open in browser

```
http://localhost:4200
```

---

# 🧠 Application Architecture

The project follows a **simple Angular architecture**:

```
User Interface (HTML)
        ↓
Component (TypeScript)
        ↓
Service (Business Logic)
        ↓
Data Model (Interface)
```

This separation improves **maintainability and scalability**.

---

# ✨ Features

* Add new notes
* Delete notes
* Display notes dynamically
* Conditional rendering when no notes exist
* Modern UI styling

---

# 📚 Learning Outcome

By completing this project, you will understand:

* How Angular components work
* How services manage shared data
* How Angular templates update automatically
* How dependency injection connects services and components
* How directives manipulate the DOM

---

# 🔮 Future Improvements

Possible enhancements:

* Edit notes
* Store notes using LocalStorage
* Add Angular animations
* Implement routing
* Connect to a backend API

---

# 👨‍💻 Author

Manikandan K
Computer Science Student
Passionate about Full Stack Development, AI, and System Design.

---
