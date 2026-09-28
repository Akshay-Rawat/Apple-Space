# 🍎 Apple Store Clone

A modern and responsive Apple-inspired e-commerce website built using **React.js, Redux Toolkit, React Router, and Tailwind CSS**.

This project demonstrates frontend development concepts such as component-based architecture, state management, routing, reusable components, lazy loading, and shopping cart functionality.

## 📌 Features

* 🏠 Modern Apple-inspired homepage
* 🛍️ Store and product pages
* 💻 Mac products
* 📱 iPhone products
* 📟 iPad products
* 🎧 Accessories
* 🛒 Add products to cart
* ➕ Increase product quantity
* ➖ Decrease product quantity
* 🗑️ Remove products from cart
* 💰 Automatic cart total calculation
* 🔄 Redux Toolkit for cart state management
* 🧭 React Router for navigation
* ⚡ Lazy loading for pages
* 📱 Responsive design for desktop, tablet, and mobile
* 🎨 Tailwind CSS styling
* 📧 Contact/Support section with email integration
* 📖 Learn More pages for product information

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **Redux Toolkit**
* **React Redux**
* **React Router DOM**
* **Tailwind CSS**
* **Vite**
* **HTML5**
* **CSS3**
* **QRCode React**

## 📂 Project Structure

```text
APPLE/
│
├── public/
│
├── src/
│   ├── Asset/
│   │
│   ├── Components/
│   │   ├── Navbar/
│   │   ├── ProductCard/
│   │   ├── Cart/
│   │   └── ...
│   │
│   ├── Pages/
│   │   ├── StorePage.jsx
│   │   ├── MacPage.jsx
│   │   ├── IphonePage.jsx
│   │   ├── IpadPage.jsx
│   │   ├── AccessoryPage.jsx
│   │   ├── SupportPage.jsx
│   │   └── ...
│   │
│   ├── Redux/
│   │   ├── store.js
│   │   └── cartSlice.js
│   │
│   ├── Data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Akshay-Rawat/Apple-Space.git
```

### 2. Navigate to the project

```bash
cd APPLE
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

## 🛒 Shopping Cart

The shopping cart is implemented using **Redux Toolkit**.

Users can:

* Add products to the cart
* Increase quantity
* Decrease quantity
* Remove products
* View total items
* View total price
* Clear the cart

## ⚡ Performance

The project uses **React Lazy Loading** to load pages only when they are required. This helps reduce the initial JavaScript bundle and improves application loading performance.

Example:

```jsx
const MacPage = lazy(() => import("./Pages/MacPage"));
```

## 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Tailwind CSS responsive utilities are used to create the responsive layouts.

## 🎯 Learning Objectives

This project was built to practice and demonstrate:

* React component architecture
* React Hooks
* Props
* React Router
* Redux Toolkit
* Global state management
* Reusable components
* Lazy loading
* Responsive UI development
* Tailwind CSS
* Git & GitHub

## 🔮 Future Improvements

* User authentication
* Backend API integration
* Product search
* Product filtering and sorting
* Product reviews
* Order history
* Real payment gateway integration
* Database integration
* Admin dashboard

## ⚠️ Disclaimer

This project is created for **educational and portfolio purposes**. It is an independent Apple-inspired frontend project and is not affiliated with or endorsed by Apple Inc.

## 👨‍💻 Author

**Akshay Rawat**

Frontend Developer | React.js | JavaScript | Redux | Tailwind CSS

---

⭐ If you like this project, consider giving the repository a star!
