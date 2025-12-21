const MenuItem = (props) => {
    // console.log(props);

    const RESTAURANT_MENU_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

    const {name, price, description, imageId, ratings} = props.menuInfo;
    return <li className='itemsInfo'>
        <div>    
            <h4 className='infoItem dishName'>{name}</h4>
            <p className='infoItem'>Rs.{(price/100)?.toFixed(2)}/_ only</p>
            {ratings.aggregatedRating.rating && 
            <p className='infoItem'>{ratings.aggregatedRating.rating}⭐({ratings.aggregatedRating.ratingCountV2})</p>}
            <p className='infoItem itemDes'>{description}</p>
        </div>
        <div>
            {imageId && <img className='itemImg' src={RESTAURANT_MENU_IMG + imageId}/>} 
        </div>
    </li>;
}

export default MenuItem;