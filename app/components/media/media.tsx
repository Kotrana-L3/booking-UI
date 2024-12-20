import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import "@/app/home/home.css"
export default function Media() {
    return (
        <div className="media">
            <a
                href="https://www.facebook.com/"
                className="mediaFb"
            >
                <TiSocialFacebook />
            </a>
            <a
                href="https://www.instagram.com/"
                className="mediaInsta"
            >
                <IoLogoInstagram />
            </a>
            <a
                href="https://www.pinterest.com/"
                className="mediaPint"
            >
                <FaPinterestP />
            </a>
        </div>
    )
}