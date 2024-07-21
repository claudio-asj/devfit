interface Exercise {
    nome: string;
    imgUrl: string;
    targetMuscle: string;
}

export const createExercise = ({nome, imgUrl, targetMuscle}:Exercise) => {
    if(localStorage.getItem('exercises')){
        console.log(localStorage.getItem('exercises'))
    } else {
        const exercise = {
            nome,
            imgUrl,
            targetMuscle
        }
        localStorage.setItem('exercises', exercise.toString())
        console.log(localStorage.getItem('exercises'))
    }
}