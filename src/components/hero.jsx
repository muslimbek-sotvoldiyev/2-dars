import { Heroimg } from "../image/export";

export default function Hero() {
    return (
        <>
            <div className="h-[555px] flex items-center justify-evenly ">
                <div className="w-[538px] h-[331px] flex flex-col justify-around">
                    <h1 className="text-[40px] font-bold">Work at the speed
                        of thought</h1>
                    <p className="text-[18px]">Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                   <div>
                     <button className="bg-[#02897A] w-[175px] h-[53px] text-white rounded-lg">Get started</button>
                    <button className="w-[175px] h-[53px] text-[#02897A] underline">Watch the Video</button>
                   </div>
                </div>
                <div>
                    <img src={Heroimg} alt="" />
                </div>
            </div>
        </>
    )
}