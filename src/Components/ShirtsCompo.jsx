import React from 'react';
import Shoppingitems from './Shoppingitems';
// import bestseller1 from '../Images/Items/bestseller1.jpg';
// import bestseller2 from '../Images/Items/bestseller2.jpg';
// import bestseller3 from '../Images/Items/bestseller3.jpg';
import shirtimg1 from '../Images/Shirts/shirtimg1.jpg';
import shirtimg2 from '../Images/Shirts/shirtimg2.jpg';
import shirtimg3 from '../Images/Shirts/shirtimg3.jpg';
import shirtimg4 from '../Images/Shirts/shirtimg4.jpg';
import shirtimg5 from '../Images/Shirts/shirtimg5.jpg';
import shirtimg6 from '../Images/Shirts/shirtimg6.jpg';
import shirtimg7 from '../Images/Shirts/shirtimg7.jpg';
import shirtimg8 from '../Images/Shirts/shirtimg8.jpg';
import shirtimg9 from '../Images/Shirts/shirtimg9.jpg';
import shirtimg10 from '../Images/Shirts/shirtimg10.jpg';
import shirtimg11 from '../Images/Shirts/shirtimg11.jpg';
import shirtimg12 from '../Images/Shirts/shirtimg12.jpg';


export const items = [
    {
        id: 1,
        dec: "Men's shirt",
        name: "Sevelian Shirt",
        image: shirtimg1,
        price: 799,
    },
    {
        id: 2,
        dec: "Men's shirt",
        name: "Sevelian Shirt",
        image: shirtimg2,
        price: 799,
    },
    {
        id: 3,
        dec: "Men's shirt",
        name: "Sevelian Shirt",
        image: shirtimg3,
        price: 799,
    },
    {
        id: 4,
        dec: "Men's shirt",
        name: "Sevelian Shirt",
        image: shirtimg4,
        price: 799,
    },
    {
        id: 5,
        dec: "Men's shirt",
        name: "Sevelian Shirt",
        image: shirtimg5,
        price: 799,
    },
    {
        id: 6,
        dec: "Men's shirt",
        name: "Sevelian Shirt",
        image: shirtimg6,
        price: 799,
    },
    {
        id: 7,
        dec: "Men's shirt",
        name: "Sevelian Shirt",
        image: shirtimg7,
        price: 799,
    },
    {
        id: 8,
        dec: "Men's shirt",
        name: "Sevelian Shirt",
        image: shirtimg8,
        price: 799,
    },
    {
        id: 9,
        dec: "Men's shirt",
        name: "Sevelian Shirt",
        image: shirtimg9,
        price: 799,
    },
    {
        id: 10,
        dec: "Men's shirt",
        name: "Sevelian Shirt",
        image: shirtimg10,
        price: 799,
    },
    {
        id: 11,
        dec: "Men's shirt",
        name: "Sevelian Shirt",
        image: shirtimg11,
        price: 799,
    },
    {
        id: 12,
        dec: "Men's shirt",
        name: "Sevelian Shirt",
        image: shirtimg12,
        price: 799,
    },

]

const ShirtCompo = () => {

    return (

        <div>
            <header className="text-center">
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl p-8">Linen Shirt Collection</h2>

                <p className="mx-auto mt-4 max-w-md text-gray-500">
                    All new Linen Shirts , Exclusively launched in sale. With stretch & an elevated look.
                </p>
            </header>



            <div className='section grid lg:grid-cols-4 md:grid-cols-2 gap-6 top-0  left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto'>
                {
                    items.map((item) => {
                        return <Shoppingitems key={item.id} item={item} />
                    })
                }
            </div>
        </div>

    )
}

export default ShirtCompo;