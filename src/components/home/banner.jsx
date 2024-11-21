import Image from "next/image";

const Banner = () => {
    return (
        <div className="min-h-[90vh] flex items-center justify-center pt-[100px] md:pt-0">
            <div className="w-[90%] md:flex justify-between items-center">
                <div className="w-full md:w-[50%] relative z-[99]">
                    <h2 className="text-3xl md:text-6xl text-center md:text-left md:leading-[60px] font-semibold text-textColor pb-2 md:pb-0">PescaBot - Automatización Inteligente para el Sector Pesquero</h2>
                    <div className="flex flex-col md:flex-row  gap-4 md:gap-6 py-4 text-center md:text-left">
                        <a href="#form"><button className="w-52 bg-blueBtn hover:bg-blue-500 px-6 py-4 rounded-full cursor-pointer text-white transition-all">Solicita una demo</button></a>
                        <a href="#form"><button className="w-52 border-2 border-gray-500 text-gray-500 font-medium px-6 py-4 rounded-full cursor-pointer hover:bg-gray-500 hover:text-white hover:border-gray-500 transition-all">Contáctanos</button></a>
                    </div>
                </div>
                <div className="w-full md:w-[50%]">
                    <div className="md:w-[600px] md:h-[600px]  w-full h-[400px] relative z-[99]">

                        <Image src="/banner/main_img.png"
                            alt="description_img"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Banner;