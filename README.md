# 📘 Marwadtech Front-End Internship Assessment

## 📌 Project Overview

This project is a front-end management application developed as part of the **Marwadtech Front-End Developer Internship Assessment**.
The application demonstrates authentication flow, session persistence, product management with pagination, analytics dashboard, and media upload handling using **React.js**.

The focus of this project is:

* Clean component architecture
* Proper state management
* Real-time validation
* UI functionality aligned with real-world use cases

---

## 🛠️ Tech Stack

* **React.js**
* **React Router DOM**
* **JavaScript (ES6)**
* **CSS**
* **LocalStorage** (for session persistence)
* **Mock Data** (no external APIs)

---

## 🚀 Features Implemented

### 🔐 1. Authentication & Session Management

* Login and Registration screens
* Real-time mobile number validation (10-digit check)
* Mock login logic
* Session persistence using `localStorage`
* Protected routes (user stays logged in after refresh)

---

### 📦 2. Product Catalog with Pagination

* Product list displaying:

  * Name
  * Price
  * Category
  * Stock
  * Status (Active / Inactive)
* Numbered pagination (10 products per page)
* Search products by name
* Filter products by status
* Reusable `ProductCard` component
* Mock data of 30 products

---

### 📊 3. Analytics Dashboard

* Statistic cards showing:

  * Total Users
  * Total Products
  * Total Orders
  * Total Revenue
* Date filter simulation:

  * Today
  * Yesterday
  * Weekly
  * Monthly
* Dashboard updates dynamically based on selection

---

### 🖼️ 4. Media Upload & Preview

* Image upload screen
* File size validation (Max 5MB)
* Instant image preview before upload
* Success state after upload

---

## 📂 Project Structure

```
src/
├─ components/
│  ├─ Auth/
│  │  ├─ Login.js
│  │  └─ Register.js
│  ├─ Dashboard/
│  │  └─ Dashboard.js
│  ├─ Products/
│  │  ├─ ProductList.js
│  │  └─ ProductCard.js
│  └─ Media/
│     └─ Upload.js
├─ App.js
├─ App.css
├─ index.js
├─ index.css
```

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start the application

```bash
npm start
```

### 3️⃣ Login credentials (Mock)

```
Mobile Number: 1234567890
```

---

## 🧠 Key Highlights

* No external APIs used (mocked internal data)
* Clean and reusable component structure
* Real-world login/session behavior
* Pagination logic strictly follows requirements
* Assessment-focused implementation

---

## 📎 Submission Details

* GitHub Repository: **(Add your GitHub repo link here)**
* Hosted locally using React development server

---

## 🙌 Author

**Sanskriti**


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
