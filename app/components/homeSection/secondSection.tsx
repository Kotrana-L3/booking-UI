import '@/app/home/home.css';
import Image from 'next/image';
import soap from '@/app/pics/premium_photo-1677776519079-184fdc8f5c6d.jpg';
export default function SecondSection() {
    return (
        <div>
            <section className='secondSection'>
                <div className='flex flex-row gap-32 items-center  justify-center mt-32 '>
                    <div>
                        <Image
                            src={soap}
                            alt='organic soap'
                            className='soapShadow'
                        ></Image>
                    </div>
                    <div className='flex flex-col gap-12 mt-28'>
                        <div className='flex flex-col items-center justify-center pr-5'>
                            <h1 className='uppercase font-light text-black text-4xl soapUndertitle'>
                                BARRES NETTOYANTES PROBIOTIQUES
                            </h1>
                        </div>
                        <p className='font-light text-black text-xl gifDescription'>
                            Les barres nettoyantes probiotiques sont conçues pour purifier votre peau tout en maintenant son équilibre naturel.
                            Enrichies en probiotiques, elles aident à renforcer la barrière cutanée, laissant la peau douce, hydratée et protégée contre les agressions extérieures.
                            Une solution naturelle pour un nettoyage efficace et respectueux de votre peau.
                        </p>
                        <button type='button' className='shopButton py-2 font-light'>
                            Boutique Savons
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}