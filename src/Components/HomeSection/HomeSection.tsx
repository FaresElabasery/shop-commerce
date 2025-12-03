
import Slider from './../Slider/Slider';
import { Button } from '@/components/ui/button';
import HomeTitle from './../HomeTitle/HomeTilte';

export default function HomeSection({ title }: { title: string }) {
    return (
        <section className="my-16">
            <div className="container">
                <div className='section-content text-center'>
                    <HomeTitle title={title} />
                    <Slider />
                    <Button variant={'ghost'} className=' border w-full sm:w-fit px-25 rounded-full py-6 mx-auto mt-9'>View All</Button>
                </div>
            </div>
        </section>
    )
}
