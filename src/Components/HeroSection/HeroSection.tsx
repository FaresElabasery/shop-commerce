import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <div className="bg-bg-hero pt-[clamp(0.5rem,4vw,1.5rem)]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center gap-[clamp(0.5rem,3vw,1rem)]">

                    <div className="content md:w-1/2">
                        <h1 className="font-extrabold text-[clamp(2rem,5vw,3rem)] sm:text-[clamp(2.5rem,4vw,3.5rem)] md:text-[clamp(3rem,2vw,4rem)] leading-tight">
                            FIND CLOTHES THAT <span className="block md:inline">MATCHES YOUR STYLE</span>
                        </h1>

                        <p className="text-sm text-black/60 mt-[clamp(0.25rem,1vw,0.5rem)]">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>

                        <Button asChild className="rounded-full font-medium py-[clamp(0.4rem,1.5vw,0.8rem)] px-[clamp(0.8rem,3vw,1.5rem)] w-full sm:w-fit mt-[clamp(0.25rem,1vw,0.5rem)]">
                            <Link to="/products">Shop Now</Link>
                        </Button>

                        <div className="hero-number grid grid-cols-2 gap-[clamp(0.15rem,1vw,0.3rem)] sm:flex sm:flex-row sm:justify-between sm:gap-0 mt-[clamp(0.25rem,1vw,0.5rem)] items-center">

                            <div className="text-center sm:text-left relative">
                                <p className="font-bold text-[clamp(1.8rem,5vw,2.5rem)]">200+</p>
                                <p className="text-black/60">International Brands</p>

                                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[clamp(2rem,5vw,4rem)] w-[1px] bg-black/10 sm:hidden"></div>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="font-bold text-[clamp(1.8rem,5vw,2.5rem)]">2,000+</p>
                                <p className="text-black/60">High-Quality Products</p>
                            </div>

                            <div className="text-center col-span-2 sm:col-auto mt-[clamp(0.15rem,1vw,0.3rem)] sm:mt-0">
                                <p className="font-bold text-[clamp(1.8rem,5vw,2.5rem)]">30,000+</p>
                                <p className="text-black/60">Happy Customers</p>
                            </div>

                        </div>
                    </div>

                    <div className="imageContainer w-full md:w-1/2 flex justify-center md:justify-end mt-[clamp(0.25rem,1vw,0.5rem)] md:mt-0">
                        <img 
                            src="/hero.png" 
                            alt="hero" 
                            className="w-full max-w-[clamp(220px,80%,360px)] sm:max-w-[clamp(280px,60%,340px)] md:max-w-[360px] h-auto object-cover rounded-lg"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

