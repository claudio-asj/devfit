//JSON.stringify(myData)
//JSON.parse(localStorage.getItem('myData'))

interface Exercise {
    name: string;
    imgUrl: string;
    targetMuscle: string;
}

export const createExercise = (exercise: Exercise) => {
    const exercises = JSON.parse(`${localStorage.getItem('exercises')}`) || [];

    // Adicionar o novo exercício ao array
    exercises.unshift(exercise);

    // Salvar o array atualizado no localStorage
    localStorage.setItem('exercises', JSON.stringify(exercises));
}