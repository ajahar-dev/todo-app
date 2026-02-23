# 📝 Todo List App (With Local Storage)

A modern and responsive Todo List web application built using **HTML, CSS, and JavaScript**.

This app allows users to add, complete, and delete tasks — and now stores data using **Local Storage**, so tasks remain even after refreshing the page.

---

## 🚀 Features

- ➕ Add new tasks
- ⌨ Add tasks using the **Enter** key
- ✅ Mark tasks as completed
- ❌ Delete tasks
- 💾 Persistent storage using Local Storage
- 🎨 Clean and responsive UI
- ⚡ Real-time DOM updates

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox)
- JavaScript (DOM Manipulation)
- Web Storage API (Local Storage)

---

## 📂 Project Structure

```
Todo-App/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧠 How It Works

1. User enters a task in the input field.
2. Clicking **Add** or pressing **Enter** creates a new todo item.
3. Each task is stored as an object with:
   - `id`
   - `text`
   - `completed` status
4. Todos are saved in Local Storage using:
   - `localStorage.setItem()`
   - `JSON.stringify()`
5. On page load:
   - Data is retrieved using `localStorage.getItem()`
   - Converted back using `JSON.parse()`
   - Rendered on the screen

---

## 💡 Future Improvements

- ✏️ Edit existing tasks
- 📊 Add task counter
- 🗑 Clear all tasks button
- 🌙 Dark mode
- 🎞 Smooth animations
- 🔄 Drag and drop reordering

---

## 📸 Preview
<img width="300" height="400" alt="Screenshot 2026-02-23 155626" src="https://github.com/user-attachments/assets/09102335-2e2a-4974-a4ea-9d461dcf2d04" />
---

## 📌 Live Demo


---



