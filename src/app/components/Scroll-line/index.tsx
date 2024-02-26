import {Card} from "@/app/components/Card";
import { animated } from '@react-spring/web'
import {CreateCard} from "@/app/components/CreateCard";
interface IProps{
  props: any
  cards: any
}
export const ScrollLine = ({props, cards}:IProps)=>{
  return(
    <animated.div className='absolute left-0 w-screen h-120 overflow-x-scroll whitespace-nowrap py-12' style={props}>
      <CreateCard/>
      {cards?.map((card: any)=>
        <Card key={card.id} {...card}/>
      )}
    </animated.div>
  )
}
