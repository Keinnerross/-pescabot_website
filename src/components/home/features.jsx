const Features = () => {
    return (
        <div id="features" className="flex justify-center items-center">
            <div className="flex justify-between w-[90%]">
                <div className="w-[60%]">
                    img
                </div>
                <div className="w-[40%]">
                    <p>Caracteristicas de PescaBot</p>
                    <h2 className="text-6xl leading-[65px]">Automatización Pesquera a medida</h2>
                    <p>Simplifica el procesamiento de datos en SERNAPESCA y mejora tu eficiencia operativa</p>
                    <div className="flex gap-6 py-4">
                        <ul>
                            <li>Integración rápida y segura.</li>
                            <li>Automatización de procesos de SERNAPESCA.</li>
                            <li>Informes detallados y trazabilidad en tiempo real.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;