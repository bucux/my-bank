
import './css/header2.css'

export default function Header2({name, balance, color} : {name: string, balance: number, color: string}) {
  return (
    <div className="header2-cont0" style={{backgroundColor:color}}>
      <p>{name}</p>
      <p>{balance}</p>
    </div>
  )
}

