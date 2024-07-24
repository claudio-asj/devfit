import { getAllExercise } from "./getAllExercise";

export const removeExerciseFromLocalStorage = (index: number): void => {
    const exercises = getAllExercise();
    if (index >= 0 && index < exercises.length) {
        exercises.splice(index, 1); // Remove o item na posição especificada
        localStorage.setItem('exercises', JSON.stringify(exercises));
    }
};