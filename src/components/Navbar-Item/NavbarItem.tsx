import React from 'react'
import './NavbarItem.scss'
import { Link } from 'react-router-dom'

interface NavbarItemProps {
	label: string
	links: Array<{ label: string; href: string }>
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, links }) => {
	return (
		<li className='navbar-item dropdown'>
			{label}
			<div className='dropdown-content'>
				{links.map((link, index) => (
					<Link to={link.href} key={index}>
						<div className='Navlinks'>{link.label}</div>
					</Link>
				))}
			</div>
		</li>
	)
}

export default NavbarItem
