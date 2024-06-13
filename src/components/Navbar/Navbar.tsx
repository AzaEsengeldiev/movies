import React from 'react'
import NavbarItem from '../Navbar-Item/NavbarItem'
import { movieLinks, seriesLinks, peopleLinks, moreLinks } from '../../Helper'
import './Navbar.scss'

const Navbar: React.FC = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar-menu'>
				<NavbarItem label='Фильмы' links={movieLinks} />
				<NavbarItem label='Сериалы' links={seriesLinks} />
				<NavbarItem label='Люди' links={peopleLinks} />
				<NavbarItem label='Ещё' links={moreLinks} />
			</ul>
		</nav>
	)
}

export default Navbar
