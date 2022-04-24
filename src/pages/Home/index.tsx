import Filter from './components/Filter'
import Products from './components/Products'
import Search from './components/Search'

import './components/style.css'

const index = () => {
	return (
		<section className=''>
			<Search />

			<Filter />

			<Products />
		</section>
	)
}

export default index
