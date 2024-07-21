import { CiDumbbell } from "react-icons/ci";
import Input from "../../components/Input";

export default function Training(){
    return (
        <div className="min-h-screen pt-8">
            <h1 className="text-3xl font-bold text-laranja flex items-center justify-center gap-2"><CiDumbbell/> Treinos</h1>

            <div>
                <Input label="Nome do treino"  icon={<CiDumbbell/>} />
            </div>

        </div>
    )
}