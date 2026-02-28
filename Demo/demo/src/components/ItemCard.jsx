import "./css/ItemCard.css"

const ItemCard = ({id, image, price, title, rating, description}) => {
  return <div className="cardMain">
    <p className="cardTitle">{title}</p>
    <div className="cardImage"><img src={image}/></div>
    <div className="discAndRating">
        <p className="disc">{description}</p>
        <p className="rating">Rating: {rating.rate}, Count: {rating.count}</p>
    </div>
    <div><p className="price">Price : ${price}</p></div>
  </div>;
};

export default ItemCard;
