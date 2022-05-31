import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import SinglePost from "./components/SinglePost"
import Post from "./components/Post"
import Project from "./components/Project"
import NavBar from './components/NavBar'
function App() {
  return (
    <Router>
      <NavBar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/post/:slug' element={<SinglePost/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
    </Router>
  );
}

export default App;
