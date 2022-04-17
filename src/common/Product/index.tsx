import Style from './style.module.css'
import Heart from '../../icons/Heart'
import Eye from '../../icons/Eye'
import Cart from '../../icons/Cart'

const Product = () => {
	return (
		<article className={Style.product}>
			<h3 className={Style.productTitle}>titulo del producto</h3>

			<figure className={Style.productImage}>
				<img
					src='https://http2.mlstatic.com/D_NQ_NP_984136-MLM43965816361_112020-O.webp'
					alt='product tile'
				/>
			</figure>

			<div className={Style.productInfo}>
				<div className={Style.productActions}>
					<button className={Style.productActionHeart}>
						<Heart />
					</button>
					<button className={Style.productActionEye}>
						<Eye />
					</button>
					<button className={Style.productActionCart}>
						<Cart />
					</button>
				</div>

				<p className={Style.productPrice}>$10.00</p>
			</div>
		</article>
	)
}

export default Product
