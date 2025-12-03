
import { Slider } from "../ui/slider"

type PriceRangeProps = {
    setPriceRange: (value: number[]) => void,
    priceRange: number[]
}
export default function PriceRange({ setPriceRange, priceRange }: PriceRangeProps) {
    return (
        <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
            </div>
            <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={0}
                max={100}
                step={10}
            />
        </div>
    )
}