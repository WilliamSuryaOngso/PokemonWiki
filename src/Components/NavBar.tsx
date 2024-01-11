import { Link, useNavigate } from 'react-router-dom'

const NavBar: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <header className=''>
            <div className=''>
                <div>
                    <div
                        onClick={() => {
                            navigate("/")
                        }}
                        className=''>
                            <h4>Main Page</h4>
                    </div>
                </div>
            </div>
            <ul>
                <li>
                    <Link to="/pokemon">
                        Pokemon
                    </Link>
                </li>
                <li>
                    <Link to="/todoApp">
                        TodoApp
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default NavBar