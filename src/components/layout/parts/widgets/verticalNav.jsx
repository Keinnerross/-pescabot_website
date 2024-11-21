'use client'
import Link from "next/link";

const VerticalNav = ({ setIsOpen, closeSlidebar }) => {


    const handleCloseSidebar = () => {
        closeSlidebar ? closeSlidebar() : "";
    }




    return (
        <div className="">
            <h3 className="pb-4 text-lg font-medium">Menú</h3>
            <ul className="flex flex-col gap-4 font-md ">
                <Link href="/" > <li onClick={() => handleCloseSidebar()}>Inicio</li></Link>
                <a href="#features" onClick={() => handleCloseSidebar()}><li>Características</li></a>
                <a href="#footer" onClick={() => handleCloseSidebar()}><li>Recursos</li></a>
                <a href="#about" onClick={() => handleCloseSidebar()}><li>Nosotros</li></a>
                <a href="#form" onClick={() => handleCloseSidebar()}><li>Contácto</li></a>
                {/* <a href="#form" onClick={() => closeSlidebar()}><li>Solicitar una cotización</li></a> */}
            </ul>
        </div>

    )
}

export default VerticalNav;