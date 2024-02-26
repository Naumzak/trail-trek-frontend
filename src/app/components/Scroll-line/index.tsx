import {Card} from "@/app/components/Card";
import { animated } from '@react-spring/web'
import {CreateCard} from "@/app/components/CreateCard";
import {EditCard} from "@/app/components/Edit Card";
import {useState} from "react";
interface IProps{
  props: any
  cards: any
}
export const ScrollLine = ({props, cards}:IProps)=>{
  const [editCardState, setEditCardState] = useState<'edit'| 'create'| null>(null)
  const [editedCardInfo, setEditedCardInfo] = useState(null)
  
  const editCardHandler = (card: any)=>{
    setEditCardState('edit')
    setEditedCardInfo(card)
  }
  
  const createCardHandler = ()=>{
    setEditedCardInfo(null)
    setEditCardState('create')
  }
  return(
    <animated.div className='absolute left-0 w-screen h-120 overflow-x-scroll whitespace-nowrap py-12' style={props}>
      <CreateCard onCreate={createCardHandler}/>
      {cards?.map((card: any)=>
        <Card key={card.id} {...card} onEdit={()=>editCardHandler(card)}/>
      )}
      <EditCard type={editCardState} onClose={()=>setEditCardState(null)} open={Boolean(editCardState)} defaultValues={editedCardInfo}/>
    </animated.div>
  )
}
