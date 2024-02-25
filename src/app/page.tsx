"use client"

import {ScrollLine} from "@/app/components/Scroll-line";
import {OpenCardsButton} from "@/app/components/OpenCardsButton";
import {useState} from "react";
import {useSpring} from "@react-spring/web";

export default function Home() {
  const [open, toggle] = useState(false)
  
  const props = useSpring({ bottom: open ? "0px" : "-500px" })
  
  return (
    <main className="w-screen h-screen overflow-hidden">
      <ScrollLine props={props}/>
      <OpenCardsButton onClick={()=>toggle(prev=>!prev)} open={open}/>
    </main>
  );
}
