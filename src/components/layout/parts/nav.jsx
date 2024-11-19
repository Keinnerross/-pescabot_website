import Link from "next/link";

const Nav = () => {
    return (
        <div>
            <ul className="flex gap-4 items-center font-md text-white">
                <Link href="/"> <li>Inicio</li></Link>
                <a href="#features"><li>Caracteristicas</li></a>
                <a href="#footer"><li>Recursos</li></a>
                <a href="#about"><li>Nosotros</li></a>
                <a href="#form"><li>Contácto</li></a>
                <a href="#form" className="px-4 py-4 bg-blue-500 hover:bg-blue-600 transition-all font-medium rounded-lg"><li>Solicitar una cotización</li></a>
            </ul>
        </div>
    )
}

export default Nav;