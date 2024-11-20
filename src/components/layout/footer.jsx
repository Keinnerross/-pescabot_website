import Form from "./parts/form";
import ContactFooter from "./parts/widgets/contactFooter";
import CopyFooter from "./parts/widgets/copyFooter";
import VerticalNav from "./parts/widgets/verticalNav";
import NavResources from "./parts/widgets/navResources";
import WaveFooter from "../waves/waveFooter";

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center relative h-full  ">
            <WaveFooter />
            <div className="relative z-[10001] flex flex-col items-center gap-16 ">

                <Form />
                <div className="flex bg-[#0046a4] justify-center  pb-8">
                    <div id="footer" className="w-[90%] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 !text-white ">
                        <CopyFooter />
                        <VerticalNav />
                        <NavResources />
                        <ContactFooter />
                    </div>
                </div>

            </div>

        </div>
    )


}
export default Footer;