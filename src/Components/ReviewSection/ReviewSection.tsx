import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ReviewSlider from "../ReviewSlider/ReviewSlider";

export default function ReviewSection() {
    return (
        <div className="review mt-15">
            <div className="container">
                <div className="flex justify-between items-end sm:items-center">
                    <h2 className=" text-4xl sm:text-5xl font-bold">OUR HAPPY CUSTOMERS</h2>
                    <div className="flex gap-3">
                        <span className="review-prev-1 flex-center size-8 rounded-full duration-200 hover:bg-gray-200">
                            <FaArrowLeft />
                        </span>
                        <span className="review-next-1 flex-center size-8 rounded-full duration-200 hover:bg-gray-200">
                            <FaArrowRight />
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 sm:px-8 mt-5">
                <ReviewSlider uniqueId="1" />
            </div>
        </div>
    )
}
