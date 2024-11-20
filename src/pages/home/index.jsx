import Banner from "@/components/home/banner";
import Features from "@/components/home/features";
import About from "@/components/home/About";
import WaveBanner from "@/components/waves/waveBanner";
import SubmitAlert from "@/components/alerts/submitAlert";

const HomePage = () => {
    return (
        <div className="w-full flex flex-col items-center">

            <div className="max-w-[1600px] w-full flex flex-col items-center">
                <Banner />
                <WaveBanner />
                <Features />
                <About />
            </div>
        </div>
    )
}

export default HomePage;