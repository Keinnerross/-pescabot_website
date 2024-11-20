'use client'
import { Fragment } from "react";
import Logotype from "./parts/logotype";
import Nav from "./parts/nav";
import { IoMenu } from "react-icons/io5";
import SliderbarMenu from "./parts/slidebarMenu"
import { useState } from "react";


const Header = () => {

    const [isOpenSlidebar, setIsOpenSlidebar] = useState(false);

    return (
        <Fragment>
            <div className="desktopHeader hidden md:flex items-center justify-center w-full z-[999999999999] relative">
                <div className="flex justify-between w-11/12 items-center">
                    <Logotype withLogotype="200" />
                    <Nav />
                </div>
            </div>

            <div className="MobileMenu md:hidden flex items-center justify-center w-screen ">
                <div className="flex justify-between w-11/12 items-center">
                    <Logotype withLogotype="200" />
                    <div className="">
                        <IoMenu size={40} onClick={()=> setIsOpenSlidebar(true)} />
                        <SliderbarMenu isOpen={isOpenSlidebar} setIsOpen={setIsOpenSlidebar} />
                    </div>
                </div>
            </div>
        </Fragment>

    )


}
export default Header;