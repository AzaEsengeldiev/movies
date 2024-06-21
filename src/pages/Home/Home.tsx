import SearchMedia from '../../components/SearchMedia/SearchMedia'
import './Home.scss'

const Home = () => {
	return (
		<div id='home'>
			<div className='container'>
				<div className='home'>
					<SearchMedia />
					<div className='home__trends'></div>
					<div className='home__popular'></div>
				</div>
			</div>
		</div>
	)
}

export default Home
