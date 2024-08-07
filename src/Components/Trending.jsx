import React from 'react';
import Shoppingitems from './Shoppingitems';
// import bestseller1 from '../Images/Items/bestseller1.jpg';
// import bestseller2 from '../Images/Items/bestseller2.jpg';
// import bestseller3 from '../Images/Items/bestseller3.jpg';
import shirtimg1 from '../Images/Shirts/shirtimg1.jpg';
import shirtimg2 from '../Images/Shirts/shirtimg2.jpg';
import shirtimg3 from '../Images/Shirts/shirtimg3.jpg';


export const items = [
    {
        id: 1,
        dec: "Best Seller",
        name: "Oversized Tee - Black",
        image: shirtimg1,
        price: 799,
    },
    {
        id: 2,
        dec: "Best Seller",
        name: "Oversized Tee - CherryRed",
        image: shirtimg2,
        price: 799,
    },
    {
        id: 3,
        dec: "Best Seller",
        name: "Oversized Tee - AcidWash",
        image: shirtimg3,
        price: 799,
    },

]

const Trending = () => {

    return (
        <div className='section grid lg:grid-cols-3 md:grid-cols-2 gap-6 top-0  left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto'>
            {
                items.map((item) => {
                    return <Shoppingitems key={item.id} item={item} />
                })
            }
        </div>
    )
}

export default Trending