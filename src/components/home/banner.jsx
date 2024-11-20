import Image from "next/image";

const Banner = () => {
    return (
        <div className="h-[90vh] flex items-center justify-center ">
            <div className="w-[90%] flex justify-between items-center">
                <div className="w-[50%] relative z-[99]">
                    <h2 className="text-6xl leading-[60px] font-semibold text-textColor">PescaBot - Automatización Inteligente para el Sector Pesquero</h2>
                    <div className="flex gap-6 py-4">
                        <a href="#form"><button className="w-52 bg-blueBtn hover:bg-blue-500 px-6 py-4 rounded-full cursor-pointer text-white transition-all">Solicita una demo</button></a>
                        <a href="#form"><button className="w-52 border-2 border-gray-500 text-gray-500 font-medium px-6 py-4 rounded-full cursor-pointer hover:bg-gray-500 hover:text-white hover:border-gray-500 transition-all">Contáctanos</button></a>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="w-[600px] h-[600px]  relative z-[99]">

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