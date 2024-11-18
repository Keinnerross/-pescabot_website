import { Fragment } from "react";
import Logotype from "./parts/logotype";
import Nav from "./parts/nav";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    return (
        <Fragment>
            <div className="desktopHeader hidden md:flex items-center justify-center w-screen bg-slate-200">
                <div className="flex justify-between w-11/12 items-center">
                    <Logotype withLogotype="200" />
                    <Nav />
                </div>
            </div>

            <div className="MobileMenu md:hidden flex items-center justify-center w-screen bg-slate-200">
                <div className="flex justify-between w-11/12 items-center">
                    <Logotype withLogotype="200" />
                    <IoMenu size={40} />
                </div>
            </div>
        </Fragment>

    )


}
export default Header;