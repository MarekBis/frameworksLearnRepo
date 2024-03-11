import {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
    const [nav,setNav] = useState(false)
    //funkce pro kliknuti na navigaci
    const handleNav = () =>{
        setNav(!nav);
    }


    return (
      <div className="text-white flex items-center h-24 max-w-[1240px] px-4 mx-auto">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="hidden md:flex md:items-center">
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Resources</li>
            <li className="p-4">About</li>
            <li className="p-4">Contacs</li>
        </ul>
        <div onClick = {handleNav} className='block hover:cursor-pointer md:hidden'>
            {/* if funkce pro rozhodnuti jaka ikona se zobrazi */}
            {nav ? <div className='fixed top-8 p-1 z-20 bg-[#000300] right-3'><AiOutlineClose size={20} /></div> : <div className=""><AiOutlineMenu size={20} /></div>}
        </div>
        {/* if funkce pro vykresleni vyskakujici navigace u mobilu pri aktivnim hamburger menu */}
        <div className={nav ? 'fixed left-0 top-0 border-r border-r-gray-900 h-full sm:w-[40%] bg-[#000300] ease-in-out duration-500 w-full z-10 md:hidden' : 'fixed left-[-100%] md:ease-in-out md:duration-500'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]  pt-7 pl-4">REACT.</h1>
            <ul className="pt-4 uppercase ">
                <li className="p-4 hover:bg-[#00df9a] border-b hover:text-black border-b-gray-800">Home</li>
                <li className="p-4 hover:bg-[#00df9a] border-b hover:text-black border-b-gray-800">Company</li>
                <li className="p-4 hover:bg-[#00df9a] border-b hover:text-black border-b-gray-800">Resources</li>
                <li className="p-4 hover:bg-[#00df9a] border-b hover:text-black border-b-gray-800">About</li>
                <li className="p-4 hover:bg-[#00df9a] border-b hover:text-black border-b-gray-800">Contacs</li>
            </ul>

        </div>
      </div>
    )
  }