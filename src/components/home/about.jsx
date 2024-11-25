

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const About = () => {
    return (
        <div id="about" className="flex justify-center items-center py-20">
            <div className="flex-col-reverse flex md:flex-row-reverse justify-between w-[90%] gap-4 md:gap-20">
                <div className="w-full md:w-[50%] flex items-center">
                    <div className="h-[500px] w-full relative ">
                        <Image src="/about/about.jpg" alt="Descripción de la imagen"
                            fill
                            objectPosition="right"
                            style={{ objectFit: 'cover', borderRadius: '20px' }}
                        />
                    </div>
                </div>
                <div className="w-full md:w-[45%]  text-center md:text-left">
                    <p className="text-blue-500 uppercase font-medium tracking-widest py-2 text-xl">Nuestra Misión</p>
                    <h2 className="text-2xl md:text-5xl pb-6 font-semibold text-textColor">Nuestra Misión: Revolucionar la Pesca con Tecnología Inteligente</h2>
                    <p className="text-textLightColor pb-10">En tecnich, nuestra misión es impulsar la innovación tecnológica en el sector pesquero a través de soluciones de automatización avanzada. PescaBot facilita la interacción con SERNAPESCA al automatizar procesos repetitivos, optimizando la eficiencia operativa y garantizando el cumplimiento normativo. Nuestro compromiso es brindar herramientas confiables que transformen la gestión pesquera y fortalezcan la productividad de nuestros clientes.</p>
                  <a href="#form"> <button className="w-52 bg-blueBtn hover:bg-blue-500 px-6 py-4 rounded-full cursor-pointer text-white transition-all">Solicita una demo</button></a> 
                    <div className="flex gap-6 py-4">
                 

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;