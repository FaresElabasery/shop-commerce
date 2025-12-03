import CategoryCard from '@/Components/CategoryCard/CategoryCard';
import HomeTilte from '@/Components/HomeTitle/HomeTilte';

export default function CategoriesSection() {
    return (
        <div className="container">
            <div className="bg-[#F5F5F5] px-12 pb-12 pt-4 rounded-3xl">
                <HomeTilte title="BROWSE BY DRESS STYLE" />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <CategoryCard
                            title="Casual"
                            image="./casual.png"
                            className="sm:w-1/4"
                        />
                        <CategoryCard
                            title="Formal"
                            image="./formal.png"
                            className="flex-grow"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <CategoryCard
                            title="Party"
                            image="./party.png"
                            className="flex-grow"
                        />
                        <CategoryCard
                            title="Gym"
                            image="./gym.png"
                            className="sm:w-1/4"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
