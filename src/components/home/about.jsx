

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const About = () => {
    return (
        <div id="features" className="flex justify-center items-center py-20">
            <div className="flex flex-row-reverse justify-between w-[90%] gap-20">
                <div className="w-[50%] flex items-center">
                    <div className="h-[500px] w-full relative ">
                        <Image src="/about/about.jpg" alt="Descripción de la imagen"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '20px' }}
                        />
                    </div>
                </div>
                <div className="w-[45%]">
                    <p className="text-blue-500 uppercase font-medium tracking-widest py-2 text-xl">Sobre Nosotros</p>
                    <h2 className="text-5xl pb-6 font-semibold text-textColor">Nuestra Misión: Revolucionar la Pesca con Tecnología Inteligente</h2>
                    <p className="text-textLightColor pb-10">En pescabot.cl, somos un equipo apasionado por la tecnología y la innovación en el sector pesquero. Nos especializamos en soluciones de automatización para procesos complejos, brindando herramientas que optimizan la productividad y el cumplimiento normativo de nuestros clientes.</p>
                  <a href="#form"> <button className="w-52 bg-blueBtn hover:bg-blue-500 px-6 py-4 rounded-full cursor-pointer text-white transition-all">Solicita una demo</button></a> 
                    <div className="flex gap-6 py-4">
                 

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;