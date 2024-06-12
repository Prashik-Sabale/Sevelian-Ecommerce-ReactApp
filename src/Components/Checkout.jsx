import React from 'react';
import { HiChevronLeft } from 'react-icons/hi';

const Checkout = () => {
  // const dispatch = useDispatch()
  return (
    <div className=' bg-transparentBlack fixed z-30 top-0 left-0 w-full h-screen'>
      <div className=" h-full bg-gray-800  sm:w-[40rem] min-[15rem] overflow-y-auto:">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer">
              <HiChevronLeft />
              <span className=' uppercase text-[0.95rem] select-none'>Continue Shooping</span>
            </div>
            <div>Shooping Bag(0)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout