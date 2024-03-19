

import './css/header.css'
import Logo from './logo'
import User from './user'

export default function Header({url, userName}  : {url: string, userName: string}) {

  return (
    <div className='header-cont0'>
      <div className='centreur'>
        <Logo url={url}/>
        <User userName={userName}/>
      </div>
    </div>
  )
}
