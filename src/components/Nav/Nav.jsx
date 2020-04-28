import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import style from './Nav.module.css';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';

function Nav(props) {
    return (
        <div className={style.navbar}>
            <ul className={style.navbar_nav}>
                <NavItem icon={<ArrowIcon />} />
                <NavItem icon="Word" />

                <NavItem icon={<CaretIcon />} >
                    <DropdownMenu />
                </NavItem>
            </ul>
        </div>
    );
}

function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className={style.nav_item}>
            <a href="/#" className={style.icon_button}
                onClick={() => setOpen(!open)}
            >
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');

    function DropdownItem(props) {
        return (
            <a href="#" className={style.menu_item} onClick={ () => props.goToMenu && setActiveMenu(props.goToMenu)} >
                <span className={style.icon_button}>{props.leftIcon}</span>
                {props.children}
                <span className={style.icon_right}>{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className={style.dropDown}>
            <CSSTransition 
                in={activeMenu === 'main'}
                unmountOnExit timeout={500}
                classNames={style.menu_primary}
                >
                <div className="menu">
                    <DropdownItem>My profile</DropdownItem>
                    <DropdownItem goToMenu="settings">Setting</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'settings'}
                unmountOnExit timeout={500}
                classNames={style.menu_secondary} 
                >
                <div className="menu">
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem goToMenu="main">Setting</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Nav; 