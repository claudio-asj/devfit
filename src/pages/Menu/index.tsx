import { FaDumbbell } from "react-icons/fa";
import CardMenu from "../../components/CardMenu";
import { BiDumbbell } from "react-icons/bi";
import { LuDumbbell } from "react-icons/lu";

export default function Menu() {
    return (
        <div className="pt-8 min-h-[90vh]">
            <img className="mx-auto w-40" src="/logo.svg" alt="Logo Marca da Devfit" />

            <div className="mt-32 flex flex-wrap items-center justify-center gap-8">
                <CardMenu name="Treinos" icon={<FaDumbbell/>} to="/training" />
                <CardMenu name="Exercícios" icon={<BiDumbbell/>} to="/exercises" />
                <CardMenu name="Medidas" icon={<LuDumbbell/>} to=""/>
            </div>
        </div>
    )
}