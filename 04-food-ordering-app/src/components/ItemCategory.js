import MenuItem from "./MenuItem";

const ItemCategory = (props) => {
    console.log(props);
    const {title, itemCards} = props?.data;
    return(
        <div>
            <h2 className='category'>
                {title} ({(itemCards?.length)})
            </h2>
            <ul className='menuItems'>
                {
                    itemCards.map((item, index) => (
                        <MenuItem key={item?.card?.info?.id || `item-${index}`} menuInfo={item?.card?.info}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default ItemCategory;