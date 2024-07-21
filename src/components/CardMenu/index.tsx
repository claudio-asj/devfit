

import { ReactNode } from "react";


interface CardMenuPros {
    name: string;
    icon: ReactNode;
}

export default function CardMenu({name, icon}:CardMenuPros){
    return(
        <div className="flex gap-3 items-center p-4 bg-creme w-fit rounded-lg">
            <div className="text-4xl">
                {icon}
            </div>
            <div>
                <h2 className="text-lg font-bold text-slate-200">{name}</h2>
            </div>
        </div>
    )
}