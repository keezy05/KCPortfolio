import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";




const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex item-center justify-center gap-4 text-2xl">
    

<a href="https://www.linkedin.com/in/kc16/">
  <FaLinkedin />
</a>

<a href="#">
  <FaGithub />

</a>
<a href="https://www.facebook.com/KromDane16">
  <FaFacebook />
</a>
  
<a href="https://www.instagram.com/kc_arcibal/">
  <FaInstagram />
</a>

    </div>
  </nav>;
  
}

export default Navbar