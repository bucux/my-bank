

import './css/user.css'

export default function User({userName} : {userName : string}) {
  return (
    <div className="user-cont0">
      <p>{userName}</p>
      <div><img src="logoLogin.png" alt="logo du login" /></div>
    </div>
  )
}
