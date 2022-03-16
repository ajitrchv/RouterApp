import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import Classes from './MainNavigation.module.css'
const MainNavigation = () =>
{
    return <header className={Classes.header}>
        <div className={Classes.logo}>
            Great quotes
        </div>
        <nav className={Classes.nav}>
            <ul>
                <li>
                    <NavLink to='/quotes' activeClassName={Classes.active}>Quotes</NavLink>
                </li>
                <li>
                    <NavLink to='/new-quote' activeClassName={Classes.active}>Add new quote</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;