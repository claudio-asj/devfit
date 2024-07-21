

import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";


interface CardMenuPros {
    name: string;
    icon: ReactNode;
    to: string
}

export default function CardMenu({ name, icon, to }: CardMenuPros) {
    const navidate = useNavigate()
    const handleRedirec = () => {
        console.log(to)
        navidate(to)
    }
    return (
        <div onClick={() => { handleRedirec() }} className="flex gap-3 items-center p-4 bg-creme w-fit rounded-lg cursor-pointer">
            <div className="text-4xl">
                {icon}
            </div>
            <div>
                <h2 className="text-lg font-bold text-slate-200">{name}</h2>
            </div>
        </div>
    )
}