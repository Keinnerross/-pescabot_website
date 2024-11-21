const NavResources = () => {
    return (
        <div>
            <h3 className="pb-4 text-lg font-medium">Menú</h3>
            <ul className="flex flex-col gap-4 font-md">
                <a href="#"><li className="cursor-pointer">Preguntas Frecuentes</li></a>
                <a href="#">  <li className="cursor-pointer">Terminos y condiciones</li></a>
            </ul>
        </div>
    )
}

export default NavResources;