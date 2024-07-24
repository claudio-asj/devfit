import { SelectHTMLAttributes } from "react";
import { GiMuscleUp } from "react-icons/gi";


// Array of muscle groups
const muscleGroups = [
    "Peitoral",
    "Costas",
    "Bíceps",
    "Tríceps",
    "Ombros",
    "Abdômen",
    "Quadríceps",
    "Posteriores de coxa",
    "Panturrilhas",
    "Glúteos",
    "Antebraços",
    "Trapézio"
];

function SelectMuscle({ ...rest }: SelectHTMLAttributes<HTMLSelectElement>) {

    return (
        <div className=" w-full">
            <h1 className="text-lg mb-2 text-laranja">Selecione o Grupo Muscular</h1>
            <div className="w-full flex gap-4 bg-slate-600 p-3 items-center">
                <GiMuscleUp className="text-2xl text-creme" />
                <select
                    {...rest}
                    className="p-1 w-full bg-transparent rounded focus:outline-none focus:shadow-outline"
                >
                    <option className="bg-slate-600 text-xl text-slate-100" value="" disabled>Escolha um grupo muscular</option>
                    {muscleGroups.map((muscle) => (
                        <option className="bg-slate-600 text-xl text-slate-100" key={muscle} value={muscle}>
                            {muscle}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default SelectMuscle;