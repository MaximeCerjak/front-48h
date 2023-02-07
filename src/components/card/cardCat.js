import './card.css'
import ordi from '../../public/ordi.png'

const CardCat = (props) => {

	return (
		<div className="card">
			<h1 className="categoryTitle">{props.name}</h1>
			<img className="categoryImg" src={ordi} alt="" />
			<h3 className="categoryDescription">{props.description}</h3>
		</div>
	)
}

export default CardCat