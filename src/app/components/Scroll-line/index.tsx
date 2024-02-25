import {Card} from "@/app/components/Card";
import { animated } from '@react-spring/web'
import {CreateCard} from "@/app/components/CreateCard";
import {useEffect, useState} from "react";
import {ownApi} from "@/api";


interface IProps{
  props: any
}
export const ScrollLine = ({props}:IProps)=>{
  const [country, setCountry] = useState<any[] | null>(null);
  
  useEffect(() => {
    const getCountry = async () => {
      const trips = await ownApi.get(`/api/trips/`);
      setCountry(trips.data);
    };
    
    getCountry();
  }, []);
  return(
    <animated.div className='absolute left-0 w-screen h-120 overflow-x-scroll whitespace-nowrap py-12' style={props}>
      <CreateCard/>
      {country?.map((card: any)=>
        <Card key={card.id} {...card}/>
      )}
    </animated.div>
  )
}
