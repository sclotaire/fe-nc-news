import { useState } from 'react'
import { useContext } from 'react'
import UserContext from './Components/Contexts/UserContext'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import ArticleList from './Components/Articles/ArticleList'
import ArticleById from './Components/Articles/ArticleById'
import Comments from './Components/Comments/Comments'
import Users from './Components/User/Users'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: 'Guest',
    name: 'N/A',
    avatar_url: "https://ohsobserver.com/wp-content/uploads/2022/12/Guest-user.png"
  })
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <UserContext.Provider value={{loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home username={username} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setUsername={setUsername} username={username}/>}/>
        <Route path='/articles' element={<ArticleList/>}/>
        <Route path='/articles/:article_id' element={<ArticleById isLoading={isLoading} setIsLoading={setIsLoading}/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/articles/:article_id/comments' element={<Comments />}/>
      </Routes>
    </UserContext.Provider>
  )
}

export default App
