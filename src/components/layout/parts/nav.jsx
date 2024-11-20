import Link from "next/link";

const Nav = () => {
    return (
        <div>
            <ul className="flex gap-4 items-center font-md text-white h-full">
                <Link href="/"> <li className="transition-all  leading-[30px]    h-full hover:border-white border-transparent border-b-2">Inicio</li></Link>
                <a href="#features" className="transition-all  leading-[30px]    h-full hover:border-white border-transparent border-b-2"><li>Características</li></a>
                <a href="#footer" className="transition-all  leading-[30px]    h-full hover:border-white border-transparent border-b-2"><li>Recursos</li></a>
                <a href="#about" className="transition-allh-full hover:border-white border-transparent border-b-2"><li>Nosotros</li></a>
                <a href="#form" className="transition-all  leading-[30px]    h-full hover:border-white border-transparent border-b-2"><li>Contácto</li></a>
                <a href="#form" className="px-4 py-4 bg-blue-600 hover:bg-blue-500 transition-all font-medium rounded-full"><li>Solicitar una cotización</li></a>
            </ul>
        </div>
    )
}

export default Nav;