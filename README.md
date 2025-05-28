
# 📰 NewsMonkey - React News App

**NewsMonkey** is a responsive news application built using **React** and powered by the [NewsAPI](https://newsapi.org/). It displays top headlines from India with category-wise navigation and infinite scrolling.

---

## 🚀 Features

- 📡 Fetches real-time news using NewsAPI
- 🌐 Category-based news (business, sports, etc.)
- ♾️ Infinite scroll to load more news
- 🚥 Loading bar to show progress
- 🧭 Client-side routing with React Router
- 🧩 Modular components for clean structure

---

## 🛠️ Tech Stack

- React.js
- React Router DOM
- React Infinite Scroll Component
- React Top Loading Bar
- NewsAPI

---

## ⚙️ How to Run This Project

Follow these steps to set up the project from scratch:


### 1. Create a React App

```bash
npx create-react-app newsmonkey
cd newsmonkey
```

 ### 1.1 Clone the repository
```bash
git clone https://github.com/your-username/newsmonkey.git
cd newsmonkey
```

### 2. Install Required Dependencies

```bash
npm install react-router-dom react-infinite-scroll-component react-top-loading-bar
```

### 3. Clean Up

Remove unneeded files from `src/`:
- `App.test.js`, `logo.svg`, `setupTests.js`, etc.

### 4. Recommended Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── News.js
│   ├── NewsItem.js
│   ├── Spinner.js
├── App.js
├── index.js
```


## 🔑 Environment Variable

Create a `.env` file in your project root and add your NewsAPI key:

```env
REACT_APP_NEWS_API_KEY=your_api_key_here
```

Then update API calls to use:

```js
const apiKey = process.env.REACT_APP_NEWS_API_KEY;
```

---

## 📦 Run the App

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

- **SriVarshini Komirishetty**
- [https://github.com/Srivarshini04]

---

## ⭐️ Support

If you found this project useful, consider starring ⭐ it on GitHub!
