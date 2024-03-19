
import { tAccount } from '../libs/type'
import './css/account.css'
import Header2 from './header2'
import Operation from './operation'

export default function Account({name, balance, color, operations} : tAccount) {
  return (
    <div className='account-cont0'>
      <Header2 name={name} balance={balance} color={color}/>
      {operations.map((operation, index)=>(
        <Operation 
          key={index} 
          date={operation.date} 
          description={operation.description} 
          amount={operation.amount} 
          counter={index}/>
      ))}
    </div>
  )
}
