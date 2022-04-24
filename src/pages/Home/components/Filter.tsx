const Filter = () => {
	return (
		<section className='filterSection'>
			<h3>Filtrar</h3>

			<div className='filterActions'>
				<button className='filterItem active'>
					<span>Todos</span>
				</button>
				<button className='filterItem'>
					<span>Tazas</span>
				</button>
				<button className='filterItem'>
					<span>Ropas</span>
				</button>
				<button className='filterItem'>
					<span>Juguetes</span>
				</button>
				<button className='filterItem'>
					<span>Otros</span>
				</button>
			</div>
		</section>
	)
}

export default Filter
