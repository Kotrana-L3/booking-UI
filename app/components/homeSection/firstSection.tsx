import '@/app/home/home.css';
import Image from 'next/image';
import candleGif from '@/app/pics/angle.webp'
export default function FirstSection() {
    return (
        <div>
            <section className='firstSection'>
                <h1 className='uppercase font-light text-center  text-5xl '>
                    ACHETEZ NOS FAVORIS
                </h1>
                <div className='flex flex-row gap-16  justify-center mt-32 ml-52'>
                    <div className='flex flex-col gap-12 pt-3'>
                        <div className='flex flex-col items-center justify-center pr-5'>
                            <h1 className='uppercase font-light text-black text-4xl gifUnderTitle'>
                                BOUGIES PARFUMÉES
                            </h1>
                            <h1 className='uppercase font-light text-black text-4xl gifUnderTitle pr-2'>
                                ESSENCE DE NATURE
                            </h1>
                        </div>
                        <p className='font-light text-black text-xl gifDescription'>
                            Découvrez nos bougies artisanales fabriquées avec des ingrédients 100% naturels.
                            Chaque bougie est infusée avec des parfums délicats pour créer une ambiance apaisante et chaleureuse chez vous.
                        </p>
                        <button type='button' className='shopButton py-2 font-light'>
                            Boutique Bougies
                        </button>
                    </div>
                    <div>
                        <Image
                            src={candleGif}
                            alt='candleGif'
                        ></Image>
                    </div>
                </div>
            </section>
        </div>
    )
}