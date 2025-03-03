import { GoArrowUpRight } from "react-icons/go";

const CallForAction = () => {
    return (
        <div>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 bg-[#FFFFFF] p-6 ">
                <div className="border-t w-24 hidden md:block"></div>
                <p className="text-gray-700 NormalText">Ready to talk about how you can achieve similar results?</p>
                <a
                    href="#"
                    className="btn btn-primary rounded-lg shadow-md button"
                >
                    Start with a free coaching session <span>
                        <GoArrowUpRight size={20} />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default CallForAction