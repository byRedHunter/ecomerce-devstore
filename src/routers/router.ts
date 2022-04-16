import { Route } from '../interfaces/index'
import { lazy } from 'react'

const HomePage = lazy(() => import('../pages/Home'))

export const routes: Route[] = [
	{
		to: '/',
		path: '/',
		Component: HomePage,
		name: 'Inicio',
	},
]
