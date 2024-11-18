import VerticalNav from "./widgets/verticalNav";

const SliderbarMenu = ({ isOpen, setIsOpen }) => {

    const closeSlidebar = () => {
        setTimeout(() => {
            setIsOpen(false)
        }, 500)
    }


    return (
        <div
            className={`fixed w-screen h-full top-0 left-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsOpen(false)}
        >
            <div
                className={`w-[75vw] fixed h-screen top-0 right-0 transition-transform duration-300 transform bg-slate-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}  >

                <VerticalNav setIsOpen={setIsOpen} closeSlidebar={closeSlidebar} />

            </div>


        </div>
    )
}

export default SliderbarMenu;