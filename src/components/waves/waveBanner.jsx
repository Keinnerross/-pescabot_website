import '../../animations/waveBanner.css';

const WaveBanner = () => {





    return (
        <div className='w-full h-screen transform absolute top-0 left-0 z-50 overflow-hidden'>

            <section className="w-full relative h-[100vh]   overflow-hidden">
                <div className='wave wavebg'></div>
                <div className='wave wave1'></div>
                <div className='wave wave2'></div>
                <div className='wave wave3'></div>
                <div className='wave wave4'></div>
            </section>
        </div>
    )
}

export default WaveBanner;