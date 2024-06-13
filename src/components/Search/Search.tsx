import { FaSearch } from 'react-icons/fa'
import './Search.scss'

const Search = () => {
	return (
		<div className='Search'>
				<input type='text' />
				<button className='SearchBtn'>
					<FaSearch />
				</button>
		</div>
	)
}

export default Search
