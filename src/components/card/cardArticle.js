import './card.css'
import chaussures from '../../public/chaussures.png'

const CardArticle = (props) => {

    return (
        <div className="card">
            <h1 className="categoryTitle">{props.title}</h1>
            <div className='centerImg'>
                <img className="categoryImg" src={chaussures} alt="" />
            </div>
            <h3 className="categoryDescription">{props.description}</h3>
            <p className='price'>{props.price} €</p>
        </div>
    )
}

export default CardArticle