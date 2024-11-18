const Banner = () => {
    return (
        <div className="h-[90vh] flex items-center justify-center">
            <div className="w-[90%] flex justify-between">
                <div className="w-[40%]">
                    <h2 className="text-6xl leading-[65px]">PescaBot - Automatización Inteligente para el Sector Pesquero</h2>
                    <div className="flex gap-6 py-4">
                        <button className="bg-blueBtn px-6 py-4 rounded-full cursor-pointer text-white">Solicita una demo</button>
                        <button className="border-2 border-gray-400 text-gray-400 font-medium px-6 py-4 rounded-full cursor-pointer">Solicita una demo</button>
                    </div>

                </div>
                <div className="w-[60%]">

                </div>
            </div>

        </div>
    )
}

export default Banner;