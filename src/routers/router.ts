import { Route } from '../interfaces/index'
import { lazy } from 'react'
import Cart from '../icons/Cart'
import Heart from '../icons/Heart'

const HomePage = lazy(() => import('../pages/Home'))
const FavoritesPage = lazy(() => import('../pages/Favorites'))
const OrderPage = lazy(() => import('../pages/Order'))

export const routes: Route[] = [
	{
		to: '/',
		path: '/',
		Component: HomePage,
		name: 'Inicio',
	},
	{
		to: '/favoritos',
		path: '/favoritos',
		Component: FavoritesPage,
		name: 'Favoritos',
		icon: Heart,
	},
	{
		to: '/orden',
		path: '/orden',
		Component: OrderPage,
		name: 'Carrito',
		icon: Cart,
	},
]
