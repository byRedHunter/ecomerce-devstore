import { Product } from '../../common'

const index = () => {
	return (
		<section className=''>
			<h3 className='title'>buscador</h3>
			<h3 className='title'>filtro</h3>
			<div className='product-container'>
				<Product />
				<Product />
				<Product />
			</div>
		</section>
	)
}

export default index
