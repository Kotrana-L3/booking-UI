import landingPic from "../pics/les_savons_frais_6757-500x334.jpg";
import Image from "next/image";
import "@/app/home/home.css";
import Media from "../components/media/media";
import FirstSection from "../components/homeSection/firstSection";
import SecondSection from "../components/homeSection/secondSection";
export default function Home() {
    return (
        <main>
            <section className="relative mt-20 ">
                <Image
                    src={landingPic}
                    alt="landingPic"
                    className="w-8/12  absolute ml-12 -z-50">
                </Image>
                <div className="uppercase z-50 absolute landingDescription">
                    <h2 className="text-2xl">
                        SAVONS ET BOUGIES BIOLOGIQUES ARTISANAUX
                    </h2>
                    <h1 className="text-7xl textWidth font-light">
                        COMME LA NATURE L'A PRÉVU
                    </h1>
                    <button className="font-light bg-yellow-900 text-white mt-10 px-12 py-2 button">
                        Acheter
                    </button>
                </div>
            </section>
            <Media />
            <section>
                <FirstSection />
            </section>
            <section>
                <SecondSection />
            </section>
        </main>
    )
}