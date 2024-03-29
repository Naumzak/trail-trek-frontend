import styles from './style.module.css'
import {Plus} from "@/componentLib/icons/Plus";
import {useRef, useState} from "react";
import {useSpring} from "@react-spring/web";
import {useGesture} from "@use-gesture/react";
import {animated,} from '@react-spring/web'

interface IProps{
  onCreate: ()=>void
}
export const CreateCard =({onCreate}: IProps)=>{
  const target = useRef(null)
  const [focus, setFocus] = useState(false)
  
  const props = useSpring({scale: focus ? 1.1 : 1})
  
  useGesture(
    {
      onHover: ({ hovering }) => {setFocus(!!hovering)}
    },
    { target, eventOptions: { passive: false } }
  )
  
  return(
    <animated.div className={`w-64 h-96 mx-10 inline-block rounded-xl cursor-pointer ${styles.createCard}`} style={props} ref={target}>
      <div style={{position: "absolute", top:'50%', height: '40%', width: '100%',transform: 'translateY(-50%)', margin: '0 auto'}} onClick={onCreate}>
        <Plus style={{height: '100%', margin: '0 auto', opacity: 0.3}} className='self-center'/>
      </div>
    </animated.div>
  )
}
