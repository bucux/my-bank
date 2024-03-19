
import './App.css'
import Accounts from './comps/accounts'
import Header from './comps/header'
import {datas} from './libs/datas'

function App() {

  const url = "logoQonto2.png"
  const userName = "Etienne" 

  return (
    <div className='app-cont0'>
      <Header url={url} userName={userName}/>
      <Accounts accounts={datas}/>
    </div>
  )
}

export default App
