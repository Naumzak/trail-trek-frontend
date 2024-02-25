import { animated } from '@react-spring/web'

import {HeadDown} from "@/componentLib/icons/HeadDown";
import {useSpring} from "@react-spring/web";
import {useGesture} from "@use-gesture/react";
import {useRef, useState} from "react";


interface IProps{
  onClick: ()=>void
  open: boolean
}
export const OpenCardsButton =({onClick, open}: IProps)=>{
  const target = useRef(null)
  const [t, setT] = useState(false)
  
  const textProps = useSpring({ opacity: open ? "0" : "1" })
  const mainProps = useSpring({ bottom: open ? "-30px" : "0" })
  
  const props = useSpring({scale: t ? 1.2 : 1})
  
  useGesture(
    {
      onHover: ({ hovering }) => {setT(!!hovering)}
    },
    { target, eventOptions: { passive: false } }
  )
  
  return (
    <animated.div className='grid justify-items-stretch absolute bottom-2 left-0 w-screen flex justify-center' style={mainProps}>
      <div className=' grid justify-self-auto cursor-pointer' onClick={onClick} ref={target}>
        <animated.div className='justify-self-center text-white/50 text-xl' style={textProps}>Go on a trip</animated.div>
        <animated.div  className='h-1 w-64 bg-white/50 rounded-sm justify-self-center' style={props}/>
        <HeadDown className='fill-white/50 w-12 justify-self-center -mt-2'/>
      </div>
    </animated.div>
  )
}
