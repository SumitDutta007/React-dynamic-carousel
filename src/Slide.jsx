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
        <div className='w-screen flex items-center'>
            <div className="container h-[76vh] p-20 w-screen flex items-center">
                <div className='bg-slate-300 rounded-md shadow-[3px_3px_6px_2px_rgba(0,0,0)] pl-4 pt-4 pb-4 hover:scale-105 hover:cursor-pointer'>
                    <img src={thumbnail} alt="" className='h-52 w-[22rem] mb-2 shadow-2xl rounded-xl'/>
                    <div className="info flex">
                    <h1 className='text-2xl font-extrabold'>{`${id}.)`}
                    <FontAwesomeIcon icon="fa-regular fa-star" />
                    </h1>
                    <div className="name flex flex-col text-2xl font-bold ml-4">
                        <h1 className='text-2xl text-red-600 font-extrabold'>{title.substring(0,25)}</h1>
                        <div>{stars}
                        </div>
                        
                        <div className="price font-bold">{`Rs ${Math.floor(price*83.26)}.00`}</div>
                        <div className="description w-80 h-20 font-semibold">{description.substring(0,60)}...</div>
                    </div>
                    </div>
                
                </div>
            </div>
          </div>
  )
}
