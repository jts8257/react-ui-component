import React, {useState} from "react";
import { ReactComponent as BellIcon } from '../../icons//svgs/bell.svg';
import { ReactComponent as MessengerIcon } from '../../icons/svgs/messenger.svg';
import { ReactComponent as CaretIcon } from '../../icons/svgs/caret.svg';
import { ReactComponent as PlusIcon } from '../../icons//svgs/plus.svg';
import { ReactComponent as CogIcon } from '../../icons//svgs/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons//svgs/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons//svgs/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons//svgs/bolt.svg';

import {CSSTransition} from 'react-transition-group'
import style from './style.scss'

function NavbarWithDropdown() {
  
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon/>}>
        <DropdownMenu/>
      </NavItem>
    </Navbar>

  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  )
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return(
    <li className="nav-item">
      <div 
        className="icon-button" 
        onClick={() => setOpen(!open)}>
        {props.icon}
      </div>

      {open && props.children}
    </li>
  )
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  // settings 를 눌러서 dropdown menu 가 바뀌면 height 애니메이션이 없어지는걸 바꾸기 위해서
  const [menuHeight, setMenuHeight] = useState(null)

  // dom 객체는 offsetHeight 를 통해 해당 component 의 actual height 를 가져올 수 있다.
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height)
  }
  // 이렇게 가져온 height 를 CSSTransition 의 onEnter 에 넣어줌

  function DropdownItem(props) {
    return (
      <div className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </div>
    )
  }

  return (
    <div className="dropdown" style={{height:menuHeight }}>

      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames="menu-primary">
          <div className="menu">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon/>}
              rightIcon={<ChevronIcon/>}
              goToMenu="settings">
                Settings
            </DropdownItem>
            
        </div>
        </CSSTransition>
        <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames="menu-secondary">
          <div className="menu">
            <DropdownItem
              leftIcon={<ArrowIcon/>}
              goToMenu="main"
              ></DropdownItem>
            <DropdownItem
                leftIcon={<BoltIcon/>}>Settings</DropdownItem>
            <DropdownItem
                leftIcon={<BoltIcon/>}>Settings</DropdownItem>
            <DropdownItem
                leftIcon={<BoltIcon/>}>Settings</DropdownItem>
            <DropdownItem
                leftIcon={<BoltIcon/>}>Settings</DropdownItem>
            <DropdownItem
                leftIcon={<BoltIcon/>}>Settings</DropdownItem>
            
        </div>
        </CSSTransition>
        
    </div>
  )
}

export default NavbarWithDropdown;
