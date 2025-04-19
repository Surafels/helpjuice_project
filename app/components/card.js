const Card = ({ data = [], len }) => {
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className={`w-[270px] h-96 bg-white shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] border border-[#e6e7eb] rounded-[5px] ${data.length === 0 ? 'hidden' : 'block'}`}>
            {data.length === 0 ? null : (
                <div className="relative pl-[10px] pt-[10px]">
                    <h5 className="text-[#232830] mb-5">
                        Add blocks
                    </h5>
                    <span className="absolute top-[40px] text-[10px] text-[#9fa5b0]">
                        Keep typing to filter, or escape to exit
                    </span>
                    <p className="pt-[10px] text-[12px] text-[#6f7582]">
                        Filtering keyword
                        <span className="inline-flex justify-center items-center rounded-[2px] w-2.5 h-[15px] bg-[#3565a9] ml-[5px] text-white text-[10px]">
                            {len || 1}
                        </span>
                    </p>
                </div>
            )}
            <div className="w-full">
                {data.length === 0 ? null : data.map((val, index) => (
                    <div key={index} className="flex w-full justify-start items-center hover:bg-[#f3f4f6] py-2">
                        <h1 className="pt-0 font-['Times_New_Roman'] text-[#a0a6b1] text-[32px] pl-[15px]">T</h1>
                        <div className="pl-[15px]">
                            <h5 className="text-[#232830] text-[17px]">
                                {capitalizeFirstLetter(val.type)}
                            </h5>
                            <p className="text-[#9fa5b0] text-[12px] mt-[-4px]">
                                {val.shortcut}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;