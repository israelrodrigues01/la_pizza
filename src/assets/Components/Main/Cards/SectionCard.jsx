import Cards from './Cards'

function SectionCard(){
	return(
		<section>
			<div className="content-width">
				<h2 className="titulo">Mais vendidas</h2>
				<Cards />
			</div>
		</section>
	)
}

export default SectionCard