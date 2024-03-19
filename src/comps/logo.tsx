


import './css/logo.css'

export default function Logo({url} : {url : string}) {
  return (
    <div className="logo-cont0">
      <img src={url} alt="le logo de la banque" />
    </div>
  )
}