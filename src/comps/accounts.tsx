
import { tAccount } from "../libs/type";
import Account from "./account";
import './css/accounts.css'

interface AccountsProps {
  accounts: tAccount[]
}

export default function Accounts({accounts} : AccountsProps) {
  return (
    <div className="accounts-cont0 centreur">
      {accounts.map((account, index)=>(
        <Account 
          key={index} 
          name={account.name} 
          balance={account.balance} 
          color={account.color} 
          operations={account.operations}/>
      ))}
    </div>
  )
}
