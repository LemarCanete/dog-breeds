import React from 'react'
import Carousels from './Components/Carousels'
import Navbar from './Components/Navbar'
import data from './Data/data'
import Card from './Components/Card'
import Tips from './Components/Tips'
import Reasons from './Components/Reasons'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import About from './Components/About'
import blogData from './Data/blogData'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import {ImSwitch} from 'react-icons/im'

function App() {
  const dataElements = data.map(item=>{
    return <Card {...item}/>
  })
  const [darkMode, setDarkMode] = React.useState(false)

  function handleClick(){
    setDarkMode(darkMode => !darkMode)
  }
  const color = {
    color: darkMode ?  "#fff" : "#000"
  }
  const backgroundColor = {
      backgroundColor: darkMode ? "#000" : "#fff",
  }
  const blogDataElements = blogData.map(blog=>{
    return <Blog color={color} babckground={backgroundColor} handleClick={handleClick} {...blog}/>
  })
  return (
    <Router>
    <div className="App">
        <Carousels/>
        <Navbar  />
        <Routes>
        
          <Route path={process.env.PUBLIC_URL + '/blog'} element={
            <div className="blog-section pb-5" style={backgroundColor}>
              <h1 className="display-1 my-5 fw-bolder" style={color}>Blogs 
                  <ImSwitch className="switch-icon" onClick={handleClick}/>
              </h1>
              <div className="blog-search">
                <input 
                    type="search" 
                    className="rounded border-1 search-blog mb-5 p-1"
                    placeholder="search"
                    />
              </div>
                {blogDataElements}
              </div>
          } />
          <Route path="/about" element={<About />}/>
        </Routes> 
              <h1 className="text-center mt-5 display-5">Cute Dogs you can adopt!!</h1>
              <div className="card-section pb-5">
                {dataElements}
              </div>
              <Tips />
              <Reasons />
              <Contact />
        
            
    </div>
    </Router>

  );
}

export default App;
