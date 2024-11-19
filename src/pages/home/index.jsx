import Banner from "@/components/home/banner";
import Features from "@/components/home/features";
import About from "@/components/home/About";
import WaveBanner from "@/components/waves/waveBanner";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center">


            <div className="max-w-[1600px] ">
                <WaveBanner />
                <Banner />
                <Features />
                <About />
            </div>
        </div>
    )
}

export default HomePage;