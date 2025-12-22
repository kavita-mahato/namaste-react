import MenuItem from "./MenuItem";

const ItemCategory = (props) => {
    console.log(props);
    const {title, itemCards} = props?.data;
    return(
        <div>
            <h2 className="
            font-poppins
            border-2
            border-black
            rounded-[15px]
            text-3xl
            font-semibold
            p-3.75
            ">
                {title} ({(itemCards?.length)})
            </h2>
            <ul className="
            font-poppins
            my-7.5
            mr-10
            ">
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