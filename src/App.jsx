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
import Login from './Components/Login/Login'

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: 'Guest',
    name: 'N/A',
    avatar_url: "https://ohsobserver.com/wp-content/uploads/2022/12/Guest-user.png"
  })

  return (
    <UserContext.Provider value={{loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/articles' element={<ArticleList/>}/>
        <Route path='/articles/:article_id' element={<ArticleById/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/articles/:article_id/comments' element={<Comments/>}/>
      </Routes>
    </UserContext.Provider>
  )
}

export default App
