'use client'

import { useState, useEffect } from "react";
import Loading from "@/components/atoms/loading";

const Form = () => {
  const inputStyles = "border border-gray-400 rounded-full px-4 py-4 ";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [origin, setOrigin] = useState("");

  // Solo accedemos a window en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin); // Establecemos el origin una vez que estamos en el cliente
    }
  }, []);

  return (
    <div id="form" className="w-full flex justify-center py-5 md:py-10" onSubmit={() => setIsSubmitting(true)}>
      <div className="w-[90%] flex flex-col items-center gap-4">
        <h2 className="text-3xl text-center md:text-3xl text-textColor py-4 font-semibold">Contáctanos</h2>
        <form className="flex flex-col w-full md:w-[60%] gap-4" action="https://formsubmit.co/rossdrtt@gmail.com" method="POST">
          <input className={`${inputStyles}`} placeholder="Nombre" type="text" name="Nombre" required />
          <input className={`${inputStyles}`} placeholder="Correo electronico" type="email" name="Correo Electrónico" required />
          <input className={`${inputStyles}`} placeholder="Número de teléfono" type="number" name="Fono" required />
          <textarea className={`${inputStyles} `} placeholder="Agrega algún comentario o consulta adicional (Opcional)" name="Comentarios"></textarea>
          <div className="flex justify-between items-center">
            <div className="text-white flex items-center gap-2 ">
              <input type="checkbox" className="w-6 h-6" defaultChecked name="Acepto recibir información" />
              <span className="text-xs md:tex-md">Déjanos tus datos y nos pondremos en contacto para brindarte más información sobre cómo PescaBot puede transformar tus operaciones.</span>
            </div>
            <input
              className={`w-52 border-2 border-white text-white font-medium px-6 py-4 rounded-full cursor-pointer hover:bg-white hover:text-[#0046a4] hover:border-white transition-all ${isSubmitting ? "hidden" : "flex"}`}
              type="submit"
              value={isSubmitting ? "" : "Enviar"}
              disabled={isSubmitting}
            />
            {isSubmitting && (
              <div className={`w-52 border-2 border-white text-white font-medium px-6 py-4 rounded-full cursor-pointer   transition-all flex justify-center`}>
                <Loading />
              </div>
            )}
            {origin && (
              <>
                <input type="hidden" name="_next" value={`${origin}/?submitted=true`} />
                <input type="hidden" name="_cc" value="ventas@tecnich.cl"></input>
                <input type="hidden" name="_subject" value="¡Mensaje nuevo! - Pescabot" />
                <input type="hidden" name="_captcha" value="false" />
                
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
