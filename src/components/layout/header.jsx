'use client'
import { Fragment, useEffect, useState } from "react";
import Logotype from "./parts/logotype";
import Nav from "./parts/nav";
import { IoMenu } from "react-icons/io5";
import SliderbarMenu from "./parts/slidebarMenu";

const Header = () => {
    const [isOpenSlidebar, setIsOpenSlidebar] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detectar el scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Cambia el número según cuándo quieres cambiar el fondo
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Fragment>
            <div
                className={`desktopHeader hidden md:flex items-center justify-center w-full relative z-[999999999999] transition-all duration-300 ${isScrolled ? "bg-[#0046a4] shadow-lg !fixed top-0 !text-textColor" : "bg-transparent"
                    }`}
            >
                <div className="flex justify-between w-11/12 items-center">
                    <Logotype withLogotype="200" isScrolled={isScrolled} />
                    <Nav isScrolled={isScrolled} />
                </div>
            </div>

            <div
                className={`MobileMenu md:hidden flex items-center justify-center w-screen fixed top-0 transition-all duration-300 ${isScrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"
                    }`}
            >
                <div className="flex justify-between w-11/12 items-center">
                    <Logotype withLogotype="200" />
                    <div>
                        <IoMenu size={40} onClick={() => setIsOpenSlidebar(true)} />
                        <SliderbarMenu isOpen={isOpenSlidebar} setIsOpen={setIsOpenSlidebar} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
