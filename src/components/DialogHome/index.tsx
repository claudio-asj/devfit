import { useEffect, useState } from "react"
import Ilustration from "../../assets/ilustration/img-popup-main.svg"

export default function DialogHome() {
    const [show, setShow] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('firstVisit') === 'true') {
            setShow(false)
        }

    }, [])
    return (
        <div className={` ${show ? "" : "hidden"} " absolute top-0 left-0 bg-black bg-opacity-70 w-full h-full flex items-center justify-center "`}>
            <div className="w-fit max-w-[70%] bg-slate-100 p-6 rounded-lg  flex flex-col items-center justify-center">
                <img src={Ilustration} alt="ilustração de Teste" />
                <div className="text-xl font-bold text-laranja my-3  text-center">
                    Estamos em Desenvolvimento!
                </div>
                <div className="text-sm">
                    Este site ainda está em desenvolvimento e pode apresentar alguns problemas.
                    Se ocorrer algum problema, dúvida ou sugestão sinta-se avontade para <a href="https://claudiojr.vercel.app" target="_blank" className="underline">falar comigo</a>.
                </div>
                <button onClick={() => { setShow(false); localStorage.setItem('firstVisit', 'true') }} className="bg-azul-escuro py-2 px-8 mt-4 rounded text-lg font-semibold text-slate-50">Continuar</button>
            </div>
        </div>
    )
}