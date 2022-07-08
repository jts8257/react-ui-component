import React, {useState} from 'react'
import style from './style.scss'
import { ReactComponent as CaretIcon } from '../../icons/svgs/caret.svg';

function SideBar() {
  const [open, setOpen] = useState(false)
  const [navMaginR, setNavMarginR] = useState(0)

  return (
    <div>
      <div className='navbar'>
        <li className="nav-item">
        <div 
          className="icon-button" 
          onClick={() => {
            setOpen(!open)
            setNavMarginR(300)
          }}>
          {<CaretIcon/>}
        </div>
      </li>
      </div>
      {open &&  <SidebarWrapper/>}
    </div>
  )
}

export default SideBar

function SidebarWrapper() {
  return (
    <div className='sidebar-container'>
      hello
    </div>
    
  )
}