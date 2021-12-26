import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Layout from './hocs/Layout'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import Blog from './components/Blog/Blog'
import BlogDetail from './components/BlogDetail/BlogDetail'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/category/:id" element={<Category/>}/>
          <Route path="/blog/:id" element={<BlogDetail/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
