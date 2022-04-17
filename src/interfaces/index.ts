import { LazyExoticComponent } from 'react'

type JSXComponent = () => JSX.Element

export interface Route {
	to: string
	path: string
	Component: JSXComponent | LazyExoticComponent<JSXComponent>
	name: string
	icon?: JSXComponent
}
