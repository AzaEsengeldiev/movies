import { bgUrl } from '../../constants'
import './SearchMedia.scss'

const SearchMedia = () => {
	const img = 'u7OpeS4eckBSR1wFxFTuyy3FjHE.jpg'
	return (
		<div
			className='searchMedia'
			style={{
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: `url('${bgUrl}${img}')`
			}}
		>
			<div className='title'>
				<h1>Добро пожаловать.</h1>
				<p>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</p>
			</div>
			<div className='search'>
				<input type='text' placeholder='Найти фильм, сериал, персону....' />
				<button>search</button>
			</div>
		</div>
	)
}

export default SearchMedia
