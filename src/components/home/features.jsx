import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const Features = () => {
    return (
        <div id="features" className="w-full flex justify-center items-center bg-slate-100 py-20">
            <div className="flex-col-reverse md:flex-row flex justify-between w-[90%] gap-4 md:gap-20  text-center md:text-left">
                <div className="w-full md:w-[48%] flex items-center">
                    <div className="h-[400px] w-full relative ">
                        <Image src="/features/feature.jpg" alt="Descripción de la imagen"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '20px' }}
                        />
                    </div>
                </div>
                <div className="w-full md:w-[55%]">
                    <p className="text-blue-500 uppercase font-medium tracking-widest py-2 text-xl">Caracteristicas de PescaBot</p>
                    <h2 className="text-3xl md:text-6xl pb-6 font-semibold text-textColor">Automatización Pesquera a medida</h2>
                    <p className="text-textLightColor">Simplifica el procesamiento de datos en SERNAPESCA y mejora tu eficiencia operativa. PescaBot es un sistema de automatización de RPA diseñado para simplificar la interacción con los formularios y datos de SERNAPESCA. Nuestro servicio permite a las empresas del sector pesquero automatizar procesos rutinarios, asegurando precisión y eficiencia.</p>
                    <div className="flex gap-6 py-4 ">
                        <ul className="w-full flex flex-col gap-8 text-textColor text-lg pt-8 font-medium justify-center text-center">
                            <li className="flex gap-4 flex-col items-center md:flex-row"><div className="rounded-lg  bg-[#f3c203] w-8 h-8 flex items-center justify-center">
                                <FaCheck fill="white" />
                            </div>Integración rápida y segura.</li>
                            <li className="flex gap-4 flex-col items-center md:flex-row"><div className="rounded-lg  bg-[#00d362] w-8 h-8 flex items-center justify-center">
                                <FaCheck fill="white" />
                            </div>Automatización de procesos de SERNAPESCA.</li>
                            <li className="flex gap-4 flex-col items-center md:flex-row"><div className="rounded-lg  bg-[#886cff] w-8 h-8 flex items-center justify-center">
                                <FaCheck fill="white" />
                            </div>Informes detallados y trazabilidad en tiempo real.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;