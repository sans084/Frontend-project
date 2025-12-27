# 📘 Marwadtech Front-End Internship Assessment

## 📌 Project Overview

This project is a **front-end management application** developed as part of the **Marwadtech Front-End Developer Internship Assessment**.
It demonstrates core front-end concepts such as authentication, session persistence, routing, pagination, filtering, dashboard analytics, and media handling using **React.js**.

The application simulates a real-world environment using **mock data and internal logic**, without relying on external APIs.

---

## 🛠️ Tech Stack

* **React.js**
* **React Router DOM**
* **JavaScript (ES6)**
* **CSS (Modular styling per feature)**
* **LocalStorage** (for session persistence)

---

## 🚀 Features Implemented

### 🔐 1. Authentication & Session Management

* Login and Registration screens
* Real-time mobile number validation (10-digit validation)
* Mock login logic
* Session persistence using `localStorage`
* Protected routes (user remains logged in after refresh)
* Dedicated authentication styling using `Auth.css`

---

### 🧭 2. Navigation Bar

* Reusable `Navbar` component
* Navigation between Dashboard, Products, and Upload pages
* Visible only after successful login
* Styled using `Navbar.css`

---

### 📦 3. Product Catalog with Pagination

* Product list displaying:

  * Name
  * Price
  * Category
  * Stock
  * Status (Active / Inactive)
* Numbered pagination (10 products per page)
* Search products by name
* Filter products by status
* Products managed within a single component (no separate ProductCard)
* Styled using `Product.css`
* Mock data of 30 products

---

### 📊 4. Analytics Dashboard

* Dashboard displaying statistic cards:

  * Total Users
  * Total Products
  * Total Orders
  * Total Revenue
* Date-based filter simulation:

  * Today
  * Yesterday
  * Weekly
  * Monthly
* Dynamic data update based on selected filter
* Styled using `Dashboard.css`

---

### 🖼️ 5. Media Upload & Preview

* Dedicated image upload page
* File size validation (Maximum 5MB)
* Instant image preview before upload
* Success state after upload
* Styled using `Upload.css`

---

## 📂 Updated Project Structure

```
src/
├─ components/
│  ├─ Auth/
│  │  ├─ Login.js
│  │  ├─ Register.js
│  │  └─ Auth.css
│  ├─ Navbar/
│  │  ├─ Navbar.js
│  │  └─ Navbar.css
│  ├─ Dashboard/
│  │  ├─ Dashboard.js
│  │  └─ Dashboard.css
│  ├─ Products/
│  │  ├─ ProductList.js
│  │  └─ Product.css
│  └─ Media/
│     ├─ Upload.js
│     └─ Upload.css
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

### 3️⃣ Mock Login Credentials

```
Mobile Number: 1234567890
```

---

## 🧠 Key Highlights

* Clean and modular folder structure
* Feature-based CSS separation
* Proper session handling and protected routing
* Pagination implemented exactly as required (10 items per page)
* No external APIs — mock data used for simulation
* UI designed with clarity and usability in mind

---

## 📎 Submission Details

* **GitHub Repository:** *(https://github.com/sans084/Frontend-project)*
* **Framework Used:** React.js
* **Assessment Type:** Front-End Internship Technical Assessment

---

## Author

**Sanskriti**

---

