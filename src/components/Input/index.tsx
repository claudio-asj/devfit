import { InputHTMLAttributes, ReactNode} from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: ReactNode;
    label: string
}


export function InputText({ label, icon, ...rest }: InputTextProps) {
    return (
        <div>
            <div className="text-lg mb-2 text-laranja">{label}</div>
            <div className="p-2 bg-slate-600 flex items-center gap-2 rounded">
                <span className="text-2xl text-creme">{icon}</span>
                <input {...rest} className="w-full bg-transparent p-1 text-slate-100 text-lg" />
            </div>
        </div>
    )
}