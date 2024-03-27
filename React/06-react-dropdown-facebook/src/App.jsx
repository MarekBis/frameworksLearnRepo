import { FaFacebookMessenger, FaPlus, FaBell, FaCaretDown, FaCaretUp, FaCog, FaCaretRight } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
function App() {

  return (
    <>
      <Navbar>
        <NavItem icon={<FaPlus
          style={{ color: "#ffffff", }} />} />
        <NavItem icon={<FaBell
          style={{ color: "#ffffff", }} />} />
        <NavItem icon={<FaFacebookMessenger
          style={{ color: "#ffffff", }} />} />

        <NavItem icon={<FaCaretDown
          style={{ color: "#ffffff", }}
        />}>
          <DropdownMenu />

        </NavItem>
      </Navbar>
    </>
  )
}


const Navbar = (props) => {
  return (
    <>
      <nav className=" h-[60px] bg-gray-800 py-4 border-b-2 border-black pr-2">
        <ul className="max-w-full h-full flex justify-end">
          {props.children}
        </ul>
      </nav>
    </>
  )
}
const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li className="flex items-center px-1 justify-center">
        <a href="#" onClick={() => { setOpen(!open) }} className=" w-[40px] hover:brightness-150 duration-300 h-[40px] bg-gray-600 rounded-[50%] justify-center items-center flex">{props.icon}</a>

        {open && props.children}
      </li>

    </>
  )
}
const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  console.log(activeMenu  )

  const DropdownItem = (props) => {
    return (
      <a href="#" className="flex duration-300 h-[50px] items-center gap-2 hover:bg-gray-700 rounded-md p-2" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="bg-gray-600 rounded-[50%] justify-center items-center flex  w-[30px] h-[30px]">{props.leftIcon}</span>
        {props.children}
        <span className="ml-auto">{props.rightIcon}</span>
      </a>
    )
  }


  return (
    <div className="absolute top-[58px] w-[300px] overflow-hidden translate-x-[-45%] rounded-md bg-gray-800 text-white p-3">

      <CSSTransition in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary">

        <div className="menu">

          <DropdownItem leftIcon={<BsPersonFill style={{ color: "#ffffff" }} />} goToMenu="settings">
            My Profile
          </DropdownItem>
          <DropdownItem leftIcon={<FaCog
            style={{ color: "#ffffff", }} />}
            rightIcon={<FaCaretRight style={{ color: "#ffffff" }} />}>
            Settings
          </DropdownItem>

        </div>

      </CSSTransition>

      <CSSTransition in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary">

        <div className="menu">

          <DropdownItem leftIcon={<BsPersonFill style={{ color: "#ffffff" }} />} goToMenu="main">
            Account Settings
          </DropdownItem>
          <DropdownItem leftIcon={<FaCog
            style={{ color: "#ffffff", }}
          />}>
            Settings
          </DropdownItem>

        </div>

      </CSSTransition>
    </div>
  )
}


export default App
