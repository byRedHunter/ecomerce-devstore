import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header, Loader } from './common'
import { routes } from './routers/router'

const App = () => {
	return (
		<Suspense fallback={<Loader />}>
			<BrowserRouter>
				<section className='main'>
					<Header />

					<main className='content'>
						<Routes>
							{routes.map(({ path, Component }) => (
								<Route key={path} path={path} element={<Component />} />
							))}
						</Routes>
					</main>

					<Footer />
				</section>
			</BrowserRouter>
		</Suspense>
	)
}

export default App
