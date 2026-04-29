# 📜 Student Report Card

A React-based Student Report Card application built as **Web Development 2 — Assignment 3**. The app allows users to view, add, and update student scores with a live pass/fail status. Styled with a **Dark Academia** aesthetic theme.

---

## 📋 Features

- **View Student Records** — Displays a table of students with their name, score, and pass/fail status.
- **Add New Students** — Add students dynamically using the input form.
- **Edit Scores Inline** — Update any student's score directly from the table; status updates in real-time.
- **Class Summary Stats** — Automatically calculates total students, pass/fail count, and average marks.
- **Dark Academia Theme** — Styled with a scholarly aesthetic using Cinzel Decorative & Lora fonts, rich dark tones, and gold accents.
- **Responsive Design** — Works on desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

| Technology | Purpose            |
| ---------- | ------------------ |
| React 19   | UI Framework       |
| Vite 8     | Build Tool         |
| CSS3       | Styling & Theming  |
| JavaScript | Application Logic  |

---

## 📁 Project Structure

```
WEB DEV ASS 3/
├── index.html                  # Entry HTML with Google Fonts
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Main App component
    ├── App.css                 # Dark Academia theme styles
    ├── index.css               # Global reset & CSS variables
    ├── data.js                 # Sample student data (14 students)
    └── components/
        ├── Header.jsx          # Page title
        ├── AddStudentForm.jsx  # Form to add new students
        ├── StudentStats.jsx    # Class summary statistics
        ├── StudentTable.jsx    # Student data table
        └── StudentRow.jsx      # Individual table row
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/prithvee07-gitlur/WEB-DEV-2-Assignment-3.git

# Navigate to the project directory
cd WEB-DEV-2-Assignment-3

# Install dependencies
npm install

# Start the development server
npm start
```

The app will be running at **http://localhost:5173/**

---

## 📌 Available Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm start`     | Start the development server   |
| `npm run dev`   | Start the development server   |
| `npm run build` | Build for production           |
| `npm run lint`  | Run ESLint for code linting    |

---

## 👥 Sample Data

The app comes preloaded with 14 students:

| #  | Name           | Score |
| -- | -------------- | ----- |
| 1  | Navnit         | 80    |
| 2  | Prithvee       | 70    |
| 3  | Bala           | 30    |
| 4  | Keshav         | 20    |
| 5  | Aarav Sharma   | 92    |
| 6  | Priya Patel    | 85    |
| 7  | Rohan Mehta    | 78    |
| 8  | Ananya Iyer    | 64    |
| 9  | Vikram Singh   | 55    |
| 10 | Sneha Reddy    | 47    |
| 11 | Arjun Nair     | 88    |
| 12 | Kavya Joshi    | 33    |
| 13 | Devansh Gupta  | 71    |
| 14 | Ishita Verma   | 19    |

> Pass mark is **40**. Students scoring 40 or above are marked as **Pass**, otherwise **Fail**.

---

## 🎨 Theme

The application uses a **Dark Academia** aesthetic featuring:

- **Fonts** — Cinzel Decorative (headings) & Lora (body) from Google Fonts
- **Colors** — Deep walnut backgrounds, ivory text, and gold accents
- **Design** — Ornamental dividers, hover animations, pill-shaped badges, and subtle gradient overlays

---

## 📝 Assignment Info

- **Course:** Web Development 2
- **Assignment:** Assignment 3
- **Topic:** React State Management & Component Architecture

---
