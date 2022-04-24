import { Field, Form, Formik } from 'formik'
import { SearchFormValues } from '../interfaces/index'
import Search from '../../../icons/Search'

const Searcher = () => {
	const initialValues: SearchFormValues = { value: '' }

	const handleSubmit = (values: SearchFormValues) => {
		console.log(values)
	}

	return (
		<section className='searchSection'>
			<h2 className='title'>Busca tu producto</h2>

			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form>
					<div className='searchIinput'>
						<Field
							type='text'
							name='value'
							placeholder='Nombre del producto'
							autoComplete='off'
							className='input'
						/>
						<button type='submit' className='button'>
							<Search />
						</button>
					</div>
				</Form>
			</Formik>
		</section>
	)
}

export default Searcher
