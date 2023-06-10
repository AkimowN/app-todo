import {FC,useState} from 'react'
import Bucket from '../img/bucket.png'

type Props = {
  text: string
  removeTodo: () => void
}

export const Todo: FC<Props> = ({text, removeTodo}) => {
  const [checked, setChecked] = useState(false)

  const className = `text ${checked === true ? 'lineThrough' : ''}`
  return(
    <div className='todo'>
      <input type='checkbox'checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
      <p className={className}>
        {text}
      </p>
      <button className='delete' onClick={removeTodo}><img src={Bucket}/></button>
    </div>
  )
}