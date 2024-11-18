'use client'
import Link from "next/link";

const VerticalNav = ({ setIsOpen, closeSlidebar}) => {




    return (
        <div className="pl-20">
            <h3 className="py-4 text-lg font-medium">Menú</h3>
            <ul className="flex flex-col gap-4 font-md ">
                <Link href="/" > <li onClick={() => closeSlidebar()}>Inicio</li></Link>
                <a href="#features" onClick={() => closeSlidebar()}><li>Caracteristicas</li></a>
                <a href="#footer" onClick={() => closeSlidebar()}><li>Recursos</li></a>
                <a href="#about" onClick={() => closeSlidebar()}><li>Nosotros</li></a>
                <a href="#form" onClick={() => closeSlidebar()}><li>Contácto</li></a>
                <a href="#form" onClick={() => closeSlidebar()}><li>Solicitar una cotización</li></a>
            </ul>
        </div>

    )
}

export default VerticalNav;