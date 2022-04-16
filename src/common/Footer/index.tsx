import Style from './style.module.css'
import Logo from '../../icons/Logo'

const Footer = () => {
	const date = new Date().getFullYear()

	return (
		<footer className={Style.footer}>
			<p className={Style.copy}>
				<span>&copy;{date}</span> all right reserved.
			</p>

			<Logo />

			<a
				href='https://byredhunter.vercel.app/'
				target={'_blank'}
				className={Style.author}
			>
				made by<span>Red</span>Hunter
			</a>
		</footer>
	)
}

export default Footer
