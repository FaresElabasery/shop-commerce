import { useState } from "react";
import { TbFilterUp } from "react-icons/tb";

type SortComponentProps = {
    isSortPrice: boolean;
    setIsSortPrice: (isSortPrice: boolean) => void;
    isSortDate: boolean;
    setIsSortDate: (isSortDate: boolean) => void;
}
export default function SortComponent({ isSortPrice, setIsSortPrice, isSortDate, setIsSortDate }: SortComponentProps) {
    return (
        <div className="flex flex-col gap-2 my-1">
            <div className="flex items-center justify-between">
                <span>Price</span>
                <input className="hidden" type="checkbox" checked={isSortPrice} onChange={() => setIsSortPrice(!isSortPrice)} />
                <span onClick={() => setIsSortPrice(!isSortPrice)} className={`${isSortPrice ? 'bg-black/60 text-white' : ''} flex-center size-7 hover:bg-black/60 hover:text-white duration-200 rounded-full cursor-pointer`}>
                    <TbFilterUp />
                </span>
            </div>
            <div className="flex items-center justify-between">
                <span >Date</span>
                <input className="hidden" type="checkbox" checked={isSortDate} onChange={() => setIsSortDate(!isSortDate)} />
                <span onClick={() => setIsSortDate(!isSortDate)} className={`${isSortDate ? 'bg-black/60 text-white' : ''} flex-center size-7 hover:bg-black/60 hover:text-white duration-200 rounded-full cursor-pointer`}>
                    <TbFilterUp />
                </span>
            </div>
        </div>
    )
}
