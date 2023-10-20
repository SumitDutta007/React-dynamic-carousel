import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Slide = ({item}) => {

    const {id, title, thumbnail, price, rating, description} = item

    let stars =[]
    const ratings = Math.round(rating)
    for(let i=0; i<ratings; i++){
        stars.push(<FontAwesomeIcon key={i} icon="fa-solid fa-star" style={{color: "#fbff00",}}/>)
    }

    return (
        <div className='flex items-center'>
            <div className="container  pl-20 pt-6 pb-12 flex items-center">
                <div className='bg-slate-300 rounded-md shadow-[3px_3px_6px_2px_rgba(0,0,0)] pl-4 pt-4 pb-4 mr-4 hover:scale-105 hover:cursor-pointer max-[428px]:w-72 max-[377px]:w-64'>
                    <img src={thumbnail} alt="" className=' h-72 w-[22rem] mb-2 shadow-2xl rounded-xl max-[1069px]:w-72 max-[1069px]:h-48 max-[428px]:h-36 max-[428px]:w-64 max-[377px]:w-52' />
                    <div className="info flex">
                    <h1 className='text-2xl font-extrabold'>{`${id}.)`}
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                    </h1>
                    <div className="name flex flex-col text-2xl max-[1069px]:text-xl font-bold ml-4 max-[428px]:text-lg">
                        <h1 className='text-2xl text-red-600 font-extrabold max-[428px]:font-bold max-[428px]:text-xl'>{title.substring(0,25)}</h1>
                        <div>{stars}
                        </div>
                        
                        <div className="price font-bold">{`Rs ${Math.floor(price*83.26)}.00`}</div>
                        <div className="description w-80 h-20 font-semibold max-[1069px]:w-64 max-[1069px]:font-normal max-[428px]:w-52 max-[428px]:text-base max-[377px]:w-[100%]">{description.substring(0,53)}...</div>
                    </div>
                    </div>
                
                </div>
            </div>
          </div>
  )
}
