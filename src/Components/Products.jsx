import React from 'react';
import { items } from '../Cartitems';
import Shoppingitems from './Shoppingitems';

const Products = () => {
    return (
        <div className='section grid lg:grid-cols-3 md:grid-cols-2 gap-6 top-0  left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto '>
            {
                items.map((item) => {
                    return <Shoppingitems key={item.id} item={item} />
                })
            }
        </div>
    )
}

export default Products;
