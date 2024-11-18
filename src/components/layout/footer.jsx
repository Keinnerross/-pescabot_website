import Form from "./parts/form";
import ContactFooter from "./parts/widgets/contactFooter";
import CopyFooter from "./parts/widgets/copyFooter";
import VerticalNav from "./parts/widgets/verticalNav";
import NavResources from "./parts/widgets/navResources";

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center ">

            <Form />
            <div id="footer" className="w-[90%] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8 text-gray-600">
                    <CopyFooter />

                    <VerticalNav />
                    <NavResources />
                    <ContactFooter />
            </div>
        </div>
    )


}
export default Footer;