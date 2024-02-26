import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import trips from '@data/trips.json';
import {SubmitHandler, useForm} from "react-hook-form";


interface IProps{
  type: 'edit' | 'create' | null
  defaultValues?: any
  onClose: ()=>void
  open: boolean
}

interface Inputs{
  name: string,
  date: string
  location: string,
  distance: number
}
export const EditCard = ({open, onClose, type, defaultValues}: IProps)=>{
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onCreate: SubmitHandler<Inputs>=(data)=>{
    trips.push({
      ...data,
      id: trips.length,
      img: ''
    })
    onClose()
  }
  return(
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onCreate)}>
        <div className='w-128 h-96 bg-white grid grid-cols-2 gap-6 p-6'>
          <TextField id="standard-basic" label="Trip name" variant="standard" defaultValue={defaultValues?.name} {...register("name")} />
          <TextField id="standard-basic" label="Location" variant="standard" defaultValue={defaultValues?.location} {...register("location")} />
          <TextField id="standard-basic" label="Distance" variant="standard" defaultValue={defaultValues?.distance} {...register("distance")}  />
          <TextField id="standard-basic" label="Dates" variant="standard" defaultValue={defaultValues?.date} {...register("date")} />
            <Button variant="outlined" type="submit">Save</Button>
            <Button variant="outlined" onClick={onClose}>Cancel</Button>
        </div>
      </form>
    </Dialog>
  )
}
