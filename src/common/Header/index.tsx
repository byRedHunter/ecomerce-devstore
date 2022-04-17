import { NavLink } from 'react-router-dom'
import Logo from '../../icons/Logo'
import { routes } from '../../routers/router'
import Style from './style.module.css'

const Header = () => {
	return (
		<nav className={Style.nav}>
			<NavLink to={routes[0].to} className={Style.navLogo}>
				<Logo />
			</NavLink>

			<ul className={Style.navList}>
				{routes.map(
					(route) =>
						route.icon && (
							<li className={Style.navItem} key={route.to}>
								<NavLink to={route.to}>{route.icon}</NavLink>
							</li>
						)
				)}
			</ul>
		</nav>
	)
}

export default Header
