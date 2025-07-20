# 🛍️ Dummy Product API

A simple Express-based REST API that serves a list of products with search and filter capabilities.

> 🌐 **Live API URL:**  
> [https://peopleproducts.onrender.com/api/v1/products](https://peopleproducts.onrender.com/api/v1/products)

---

## 📁 Project Structure


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

```
### 2. Install dependecies
```
npm install
```
### 3. Run
```
npm start
```

## 📦 API Endpoints
### 🏠 /
Returns a simple HTML homepage with a link to the products endpoint.

#### 📦 /api/v1/products
Returns a list of all products. Supports search and limit query parameters.

### 🔍 Query Parameters:
search: Filter products that start with the search text.

### limit: Limit the number of returned products.

🧪 Example:
bash
Copy
Edit
GET /api/v1/products?search=a&limit=2
📥 Sample Response:
json
Copy
Edit
[
  {
    "id": 1,
    "name": "albany sofa",
    "price": 39.95,
    "image": "https://..."
  },
  ...
]
📦 /api/v1/products/:id
Returns a single product by ID.

🧪 Example:
bash
Copy
Edit
GET /api/v1/products/2
📥 Sample Response:
json
Copy
Edit
{
  "id": 2,
  "name": "entertainment center",
  "price": 29.95,
  "image": "https://..."
}
❌ Not Found Response:
json
Copy
Edit
[
  {
    "status": 404,
    "msg": "product not found"
  }
]
⚙️ Tech Stack
1. Express.js

2. Node.js

3. Render (for hosting)

4. CORS

## 🌐 Hosted Version
You can access the deployed API here:
👉 https://peopleproducts.onrender.com/api/v1/products