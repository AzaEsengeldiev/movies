import Header from '../components/Header/Header.tsx'
import Footer from '../components/Footer/Footer.tsx'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
