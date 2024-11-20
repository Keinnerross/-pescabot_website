import '../../animations/waveFooter.css';

const WaveFooter = () => {





    return (
        <div className='w-full h-screen transform absolute top-0 left-0 z-50 '>

            <section className="w-full relative h-[100vh]   overflow-hidden">
            <div className='waveFooter waveFooterBg'></div>
                <div className='waveFooter waveFooter1'></div>
                <div className='waveFooter waveFooter2'></div>
                <div className='waveFooter waveFooter3'></div>
                <div className='waveFooter waveFooter4'></div>



            </section>
        </div>
    )
}

export default WaveFooter;