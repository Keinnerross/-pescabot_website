import Logotype from "../logotype";

const CopyFooter = () => {
    return (
        <div className="text-center md:text-left">
            <Logotype withLogotype={250} isScrolled={true} />
            <p className="pt-4">PescaBot es un sistema de automatización de RPA diseñado para simplificar la interacción con los formularios y datos de SERNAPESCA. 

            </p>
        </div>
    )
}

export default CopyFooter;