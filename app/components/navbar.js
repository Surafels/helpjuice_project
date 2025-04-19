import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import book from "../assets/book-open.svg";
import Image from 'next/image';
import lock from "../assets/lock-open.svg";
import chevron from "../assets/chevrons-right.svg";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className=" flex  text-center justify-between  mt-3 border-t boder-[#E5E7EB] pt-2">
            <ul className="flex text-center nav-color text-1xl mt-3">
                <Image src={chevron} alt="chevrons" className="ml-6" width={16} height={16} />
                <li className="flex ml-10 nav-color">
                    <Image src={book} alt='open book'
                        width={18}
                        height={13}
                        layout='fixed'
                        className='nav-color  pr-[5px] '
                    />
                    Main <span className="pl-2.5">/</span></li>
                <li className="pl-5">Getting started <span className="pl-2.5">/</span></li>
                <li className="pl-5">Front-end developer test proj...</li>
            </ul>
            <ul className="flex mt-3">
                <li className="flex pl-5 nav-color">
                    <Image className='mr-1' src={lock} alt='open lock' />
                    Editing <span className="pl-2.5">|</span></li>
                <li className="pl-5 publish-color">Publish Space
                </li>
                <li><FontAwesomeIcon className="publish-color w-[14px] mr-5 ml-2" icon={faChevronDown} />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;