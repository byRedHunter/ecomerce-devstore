import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, Loader } from './common'
import { routes } from './routers/router'
import ProductDetail from './pages/Detail'

const App = () => {
	return (
		<BrowserRouter>
			<section className='main'>
				<Header />

				<Suspense fallback={<Loader />}>
					<main className='content'>
						<Routes>
							{routes.map(({ path, Component }) => (
								<Route key={path} path={path} element={<Component />} />
							))}

							<Route path='product/:id' element={<ProductDetail />} />
						</Routes>
					</main>
				</Suspense>
			</section>
		</BrowserRouter>
	)
}

export default App
