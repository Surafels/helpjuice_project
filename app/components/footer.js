import circleCheck from '../assets/circle-help.svg'
import Image from 'next/image';
const Footer = () => {
    return (
        <div className="">
            <div className=" flex justify-end pr-3">
                <Image className='bg-[#F3F4F6] rounded-[2px]' src={circleCheck} alt="circle check" layout="fixed" />
            </div>

            <span className=" flex justify-center border border-[#E5E7EB] shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]  w-1/2 h-0.5 m-auto mb-4 ">
            </span>
        </div>
    )
}

export default Footer;