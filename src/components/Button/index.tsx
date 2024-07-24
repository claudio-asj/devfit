import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon?: ReactNode | null;
    label: string;
    bgColor?: string | null;
    extraClass?: string | null
}

export default function Button({label, icon, bgColor="",extraClass= "", ...rest}:ButtonProps){
    return (
        <button {...rest} className={`${bgColor}" flex items-center px-8 py-2 rounded text-slate-50 gap-2 bg-emerald-600 " ${extraClass}`}>
            {icon}
            <span>{label}</span>
        </button>
    )
}