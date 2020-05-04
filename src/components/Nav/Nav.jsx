import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {Link} from 'react-router-dom';

import style from './Nav.module.css';
import './Nav.module.css';
import './navTran.css';
//import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
//import { ReactComponent as CogIcon } from './icons/cog.svg';

//Output 
function Nav() {
    return (
        <Navbar>
            <NavItem icon={<CaretIcon />}>
                <DropdownMenu></DropdownMenu>
            </NavItem>
        </Navbar>
    );
}

function Navbar(props) {
    return (
        <nav className={style.navbar}>
            <ul className={style['navbar-nav']}><NavLeft /><span className={style.flexbuffer} />{props.children}</ul>
            <div className={style.navbuffer}></div>
        </nav>
        
    );
}

function NavLeft() {
    return(
        <div className={style.title}>
        <Link to="/"><h3>COVID-19 Tracker</h3></Link>
        </div>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);
  
    return (
        
      <li className={style['nav-item']}>
        <div className={style['icon-button']} onClick={() => setOpen(!open)}>
          {props.icon}
        </div>
        {open && props.children}
      </li>
    );
  }

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
      }, [])

    function calcHeight(el){
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return(
            <div className={style['menu-item']} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)} >
                <span className={style['icon-button']}>{props.leftIcon}</span>
                {props.children}
                <span className={style['icon-right']}>{props.rightIcon}</span>
            </div>
        );
    }

    return(
        <div className={style.dropdown} style={{ height: menuHeight }}  ref={dropdownRef}>
            <CSSTransition 
                in={activeMenu === 'main'} 
                timeout={500} 
                unmountOnExit 
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className={style.menu}>
                <Link to="/"><DropdownItem>Global Statistics</DropdownItem></Link>
                    <DropdownItem
                        leftIcon={< ChevronIcon />}
                        goToMenu="CountryPicker"
                    >
                        CountryPicker
                    </DropdownItem>
                    <Link to="/about"><DropdownItem>About</DropdownItem></Link>
                </div>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'CountryPicker'} 
                timeout={500} 
                unmountOnExit 
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className={style['menu']}>
                    <Link to="/countryPickerPage"><DropdownItem>
                        Country Picker
                    </DropdownItem></Link>
                    <DropdownItem
                        leftIcon="<"
                        goToMenu="main"
                    >
                        Go Back
                    </DropdownItem>
                </div>
            </CSSTransition>

        </div>
    );
}

export default Nav; 