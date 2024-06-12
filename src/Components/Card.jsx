import React from 'react'

const Card = () => {
    return (
        <div>
            <div class="max-w-md mx-auto rounded-md  overflow-hidden shadow-md hover:shadow-lg">
                <div class="relative">
                    <img class="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image"/>
                        <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                        </div>
                </div>
                <div class="p-4">
                    <div>
                        <h3 class="text-lg font-medium mb-2">Product Title</h3>
                        <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                        vel eros fermentum faucibus sit amet euismod lorem.</p>
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-lg">$19.99</span>
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Buy Now
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card