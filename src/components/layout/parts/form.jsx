const Form = () => {

    const inputStyles = "border border-gray-400 rounded-full px-4 py-4 "


    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] flex flex-col items-center gap-4">
                <h2>¡Solicita una cotización!</h2>
                <form className="flex flex-col w-[60%] gap-4">
                    <input className={`${inputStyles}`} placeholder="Nombre" type="text" required />
                    <input className={`${inputStyles}`} placeholder="Correo electronico" type="email" required />
                    <input className={`${inputStyles}`} placeholder="Número de teléfono" type="number" required />
                    <textarea className={`${inputStyles}`} placeholder="Agrega algún comentario o consulta adicional (Opcional)"></textarea>
                </form>

            </div>

        </div>
    )
}

export default Form;