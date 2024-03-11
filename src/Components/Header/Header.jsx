import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <main>
            <header>Northcoders News</header>
            <Link to='/topics'>
              <p>Topics</p>
            </Link>
            <Link to='/articles'>
            <p>Articles</p>
            </Link>
            <Link to='/users'>
            <p>Users</p>
            </Link>
            
        </main>
    )
}

export default Header