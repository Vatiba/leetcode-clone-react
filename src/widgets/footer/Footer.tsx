import { LangBtn, ThemeBtn } from "features/ui";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
         <nav className="grid grid-flow-col gap-4">
            <Link className="link link-hover" to="/about-us">About us</Link>
            <Link className="link link-hover" to="/contact">Contact</Link>
         </nav>
         <nav>
            <div className="grid grid-flow-col gap-4">
               {/* <ThemeBtn /> */}
               <LangBtn />
            </div>
         </nav>
         <aside>
            <p>Copyright © 2024 - All right reserved</p>
         </aside>
      </footer>
   )
}

export default Footer;