import axios from 'axios'
import Header from './components/Header/Header'
import { useEffect, useState } from 'react'
import { baseUrl } from './constants'

function App() {
	const [Img, setImg] = useState<any[]>([])

	const getLanguage = async (API_KEY: string) => {
		try {
			const res = await axios(API_KEY, {
				headers: {
					accept: 'application/json',
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTM1MGU5M2Y5Njg2ZjcyYzI1MmFkOTc1OGFlZDY5MCIsInN1YiI6IjY2NjZjMmU5MWZmZWRhMjRkMjE1Y2MyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HfcQRLC7C7wtbv_tVBJ_3poKQvnT9p2QW2ChtE6D_ME'
				}
			})
			// setImg(res.data.results)
			console.log(res.data[3])
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const API_KEY = import.meta.env.VITE_LANGUAGE_API
		if (API_KEY) {
			getLanguage(API_KEY)
		} else {
			console.error('API key is missing')
		}
	}, [])

	return (
		<>
			<Header />
			{/* {Img.map((el: any) => (
				<img key={el.id} src={`${baseUrl}${el.profile_path}`} alt='' />
			))} */}
		</>
	)
}

export default App
