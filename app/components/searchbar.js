import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import clock from "../assets/clock-4.svg";
import rabbit from "../assets/rabbit.png";
import circleCheck from "../assets/circle-check-big (2).svg";
import cloudIcon from "../assets/cloud (2).svg";
import verticalDot from "../assets/ellipsis-vertical.svg";
const SearchBar = () => {
    return (
        <div className="flex rounded-[5px] border border-[#E5E7EB]  w-1/2 m-auto mt-5 p-1 justify-between items-center">
            <div className="flex items-center">
                <div className=" flex justify-center text-center text-[#347659] bg-[#D9F9E6] w-[30px] h-[30px] rounded  ">P</div>
                <span className=" nav-color ml-3.5 mr-3.5">|</span>
                <Image className="mr-1" src={clock} alt="clock" width={16} height={16} layout="fixed" />
                <p className="nav-color"> 0min</p> <span className="nav-color ml-3.5 mr-3.5">|</span>
                <Image src={rabbit} alt="rabbit"
                    width={25}
                    height={30}
                    layout="fixed" />
                <span className=" nav-color ml-3.5 mr-3.5">|</span>
                <FontAwesomeIcon className=" nav-color rotate-45 w-[23px] h-[23px]" icon={faArrowDown} />
                <p className="nav-color">0</p>
            </div>
            <div className="flex space-x-1">
                <Image className='cloud' src={circleCheck} alt="circle check" layout="fixed" />
                <Image src={cloudIcon} alt='cloud' />
                <Image src={verticalDot} alt='vertical dot' layout="fixed" />
            </div>
        </div>
    )
}

export default SearchBar;