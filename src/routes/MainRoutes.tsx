import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../components/NotFound/NotFound'
import Home from '../pages/Home/Home'
import { Paths } from '../paths'

export const publickRoutes = [
	{
		path: Paths.HOME,
		element: <Home />
	},
	{
		path: Paths.NOTFOUND,
		element: <NotFoundPage />
	}
]

const MainRoutes = () => {
	return (
		<Routes>
			{publickRoutes.map((route, index) => (
				<Route key={index} path={route.path} element={route.element} />
			))}
		</Routes>
	)
}

export default MainRoutes
