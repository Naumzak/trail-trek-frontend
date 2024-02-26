"use client"
import {ScrollLine} from "@/app/components/Scroll-line";
import {OpenCardsButton} from "@/app/components/OpenCardsButton";
import {useState} from "react";
import {useSpring} from "@react-spring/web";

export const Navigation =({cards}: {cards: any[]})=>{
  const [open, toggle] = useState(false)
  
  const props = useSpring({ bottom: open ? "0px" : "-500px" })
  return (
    <>
      <ScrollLine props={props} cards={cards}/>
      <OpenCardsButton onClick={()=>toggle(prev=>!prev)} open={open}/>
    </>
  )
}
