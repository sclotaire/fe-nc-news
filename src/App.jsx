import { useState } from 'react'
import { useContext } from 'react'
import UserContext from './User'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import ArticleList from './Components/Articles/ArticleList'

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
        <Route path='/articles' element={<ArticleList/>}/>
      </Routes>
    </UserContext.Provider>
  )
}

export default App
