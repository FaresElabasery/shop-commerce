import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <div className='bg-bg-hero pt-10 sm:pt-2'>
            <div className='container'>
                <div className='flex flex-col md:flex-row md:items-center gap-10'>
                    
                    <div className="content md:w-1/2">
                       <h1 className="font-bold text-2xl md:text-4xl">
                      FIND CLOTHES THAT MATCHES YOUR STYLE
                       </h1>
                        <p className='text-sm text-black/60 mt-6'>
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>
                        <Button asChild className='rounded-full font-medium py-6 px-14 w-full sm:w-fit mt-6'>
                            <Link to='/products'>Shop Now</Link>
                        </Button>

                        <div className='hero-number flex flex-wrap justify-between items-center sm:mt-12'>
                            <div>
                                <p className='font-bold text-[40px]'>200+</p>
                                <p className='text-black/60'>International Brands</p>
                            </div>
                            <span className='w-[1px] h-15 bg-black/20'></span>
                            <div>
                                <p className='font-bold text-[40px]'>2,000+</p>
                                <p className='text-black/60'>High-Quality Products</p>
                            </div>
                            <span className='hidden sm:block w-[1px] h-15 bg-black/20'></span>
                            <div className='w-full sm:w-fit text-center'>
                                <p className='font-bold text-[40px]'>30,000+</p>
                                <p className='text-black/60'>Happy Customers</p>
                            </div>
                        </div>
                    </div>

                    <div className="imageContainer w-full md:w-1/2 flex justify-end">
                        <img 
                            src='/hero.png' 
                            alt='hero' 
                            className='w-[200px] sm:w-[250px] md:w-[400px] h-[400px] object-cover rounded-lg'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
