import React, {useState} from 'react'
import { ReactComponent as BellIcon } from '../../icons//svgs/bell.svg';
import { ReactComponent as MessengerIcon } from '../../icons/svgs/messenger.svg';
import { ReactComponent as CaretIcon } from '../../icons/svgs/caret.svg';
import { ReactComponent as PlusIcon } from '../../icons//svgs/plus.svg';
import { ReactComponent as CogIcon } from '../../icons//svgs/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons//svgs/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons//svgs/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons//svgs/bolt.svg';
import style from './style.scss'
import {CSSTransition} from 'react-transition-group'

function SideBar() {
  const [isOpen, setOpen] = useState(false)
  const [navMaginR, setNavMarginR] = useState(0)

  const onNavButtonClick = () => {
    setOpen(!isOpen)
    if (navMaginR > 0) {
      setNavMarginR(0)
      console.log(navMaginR)
    } else {
      setNavMarginR(250)
      console.log(navMaginR)
    }
  }

  return (
    <div>
      <div className='nav-bar-with-side'
        style={{marginRight:navMaginR }}>
      <li className="nav-item">
        <div 
          className="icon-button" 
          onClick={() => {onNavButtonClick()}}>
          {<CaretIcon/>}
        </div>
      </li>
      </div>
      {isOpen &&  <SidebarContainer/>}
    </div>
  )
}

export default SideBar

function SidebarContainer() {
  return (
    <div 
      className='sidebar-container'>
      <ul>
        <SidebarItem icon={<BellIcon/>}str={'hello'}/>
        <SidebarItem icon={<BellIcon/>}str={'hello'}/>
        <SidebarItem icon={<BellIcon/>}str={'hello'}/>
        <SidebarItem icon={<BellIcon/>}str={'hello'}/>
        <SidebarItem icon={<BellIcon/>}str={'hello'}/>
        <SidebarItem icon={<BellIcon/>}str={'hello'}/>
        <SidebarItem icon={<BellIcon/>}str={'hello'}/>
      </ul>
    </div>
  )
}

function SidebarItem({icon, str}) {
  return(
    <li className='sidebar-item'>
      <div className='sidebar-item-left-icon'>{icon}</div>
      <span className='sidebar-item-text'>{str}</span>
    </li>
  )
}