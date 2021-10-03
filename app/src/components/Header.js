import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil </Link>
            <Link to="/list">Liste </Link>
            <Link to="/fav">Favoris </Link>
            <Link to="/top">Top cryptos</Link>

        </nav>
    )
}

export default Header