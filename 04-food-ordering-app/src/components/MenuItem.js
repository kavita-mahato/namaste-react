const MenuItem = (props) => {
    // console.log(props);

    const RESTAURANT_MENU_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

    const {name, price, description, imageId, ratings} = props.menuInfo;
    return <li className="
                my-7.5
                flex
                justify-between
                py-5
                px-7.5
                rounded-[15px]
                shadow-[0_8px_12px_rgba(0,0,0,0.2)]
                bg-[rgb(252,201,155)]
                font-medium
                font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]
                transition-transform duration-300 ease-in-out
                hover:scale-[1.025]
                hover:shadow-[0_8px_12px_rgba(0,0,0,0.2)
                ">
        <div>    
            <h4 className="my-1.75   font-bold text-[#242323] text-lg font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">{name}</h4>
            <p className="my-1.75">Rs.{(price/100)?.toFixed(2)}/_ only</p>
            {ratings.aggregatedRating.rating && 
            <p className="my-1.75">{ratings.aggregatedRating.rating}⭐({ratings.aggregatedRating.ratingCountV2})</p>}
            <p className="my-1.75 font-medium text-[#242323]">{description}</p>
        </div>
        <div>
            {imageId && <img className="rounded-[15px] shadow-[0_8px_12px_rgba(0,0,0,0.2)] ml-7.5" src={RESTAURANT_MENU_IMG + imageId}/>} 
        </div>
    </li>;
}

export default MenuItem;