import Link from "next/link";

const Nav = () => {
    return (
        <div>
            <ul className="flex gap-4 font-md">
                <Link href="/"> <li>Inicio</li></Link>
                <a href="#features"><li>Caracteristicas</li></a>
                <a href="#footer"><li>Recursos</li></a>
                <a href="#about"><li>Nosotros</li></a>
                <a href="#form"><li>Contácto</li></a>
                <a href="#form"><li>Solicitar una cotización</li></a>
            </ul>
        </div>
    )
}

export default Nav;