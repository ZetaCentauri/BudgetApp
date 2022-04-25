import { Link } from "react-router-dom";

const Navigation = () => {
return (

        <nav className="nav">
            <ul className="nav__list">
                <Link className="nav__item" to="/accounts">Konta</Link>
                <Link className="nav__item" to="/finances/*">Finanse</Link>
                <Link className="nav__item" to="/operations">Operacje</Link>
            </ul>
        </nav> 
)
}

export default Navigation;