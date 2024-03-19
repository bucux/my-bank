



import { tOperation } from '../libs/type'
import './css/operation.css'

export default function Operation({date, description, amount, counter} : tOperation) {
  
  let classe = "line-cont0"
  if(counter){
    classe = `line-cont0 ${counter%2 === 0 ? "grey" : "white"}`
  }
  
  return (
    <div className={classe}>
      <div>
        <p>{date}</p>
        <p>{description}</p>
      </div>
      <p>{amount}</p>
    </div>
  )
}