import { FC } from 'react'
import './Header.scss'
import Navbar from '../Navbar/Navbar'
import HeaderLogo from '../../assets/HeaderLogo.png'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'
import Auth from '../../pages/Authorization/Auth'
import Search from '../Search/Search'

const Header: FC = () => {
	return (
		<header id='header'>
			<div className='container'>
				<div className='header'>
					<div className='header-left'>
						<div className='logo'>
							<Link to={Paths.HOME}>
								<img src={HeaderLogo} alt='logo' />
							</Link>
						</div>
						<div className='nav'>
							<Navbar />
						</div>
					</div>
					<div className='header-right'>
						<div className='authorization'>
							<Auth />
						</div>
						<div className='search'>
						<Search/>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
