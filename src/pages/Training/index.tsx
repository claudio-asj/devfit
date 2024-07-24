import { CiDumbbell } from "react-icons/ci";
import { FaImage } from "react-icons/fa";
import { InputText } from "../../components/Input";
import SelectMuscle from "../../components/SelectMuscle";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { createExercise } from "../../services/creacteExercise";
import { getAllExercise } from "../../services/getAllExercise";
// Definindo a interface para o exercício
interface Exercise {
    name: string;
    imgUrl: string;
    targetMuscle: string;
  }
export default function Training() {
    const [nameExercise, setNameExercise] = useState('')
    const [imgExercise, setImgExercise] = useState('')
    const [targetExercise, setTargetExercise] = useState('')
    const [exercises, setExercises] = useState<Exercise[]>([]);

    const handleSaveExercise = () => {
        console.log("salvando ...")
        createExercise({ name: nameExercise, imgUrl: imgExercise, targetMuscle: targetExercise })
        getExercises()
    }

    const getExercises = () => {
        const data = getAllExercise()
        setExercises(data)
    }

    useEffect(() => {
        getExercises()
    },[])

    return (
        <div className="min-h-screen pt-8">
            <h1 className="text-3xl font-bold text-laranja flex items-center justify-center gap-2"><CiDumbbell /> Treinos</h1>

            <div className="grid gap-2">
                <InputText onChange={(event) => { setNameExercise(event.target.value)}} label="Nome do treino" icon={<CiDumbbell />} />
                <InputText onChange={(event) => { setImgExercise(event.target.value)}} label="Imagem do treino" icon={<FaImage />} />
                <SelectMuscle onChange={(event) => { setTargetExercise(event.target.value)}} />
                <div className="flex justify-end mt-3">
                    <Button onClick={handleSaveExercise} label="Salvar" />
                </div>
            </div>


            <ul>
                {exercises.map((item, index) => (
                    <li key={index}>{item.name} \\ {item.imgUrl}  \\ {item.targetMuscle}</li>
                ))}
            </ul>


        </div>
    )
}