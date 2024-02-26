import {useRef, useState} from "react";
import {useSpring} from "@react-spring/web";
import {useGesture} from "@use-gesture/react";
import {animated,} from '@react-spring/web'
import {EditIcon} from "@/componentLib/icons/Edit";

interface IProps {
  name: string,
  date: string,
  location: string,
  distance: string
  img: string
  onEdit: ()=>void
}
export const Card =({name, img, location, distance, date, onEdit}: IProps)=>{
  const target = useRef(null)
  const [t, setT] = useState(false)
  
  const props = useSpring({scale: t ? 1.1 : 1 })
  
  useGesture(
    {
      onHover: ({ hovering }) => {setT(!!hovering)}
    },
    { target, eventOptions: { passive: false } }
  )
  return(
    <animated.div className='w-64 h-96 mx-10 inline-block rounded-xl cursor-pointer' style={{...props, overflow: 'hidden'}} ref={target}>
      <div style={{backgroundImage: `url(${img})`, backgroundSize: 'cover'}} className='h-full w-full relative'>
        <div className='absolute top-2 right-2' onClick={onEdit}>
          <EditIcon/>
        </div>
        <div  className='h-2/6 w-full absolute bottom-0 bg-black/60 p-3'>
          <div className='whitespace-normal	text-white font-semibold font-mono text-sm'>
            {name}
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 whitespace-normal text-white text-sm mt-2">
            <div className="col-span-1">{location}</div>
            <div className="row-span-2 relative">
              <div style={{position: "absolute", right: 0, bottom: 0, width: 'min-content', textAlign: 'right'}}>
                {date}
              </div>
            </div>
            <div className="col-span-1 ">
                {distance} km
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}
