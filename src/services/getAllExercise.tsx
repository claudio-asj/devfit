interface Exercise {
    name: string;
    imgUrl: string;
    targetMuscle: string;
  }

export const getAllExercise = (): Exercise[] => {
    const storedData = localStorage.getItem('exercises');
    if (storedData) {
      return JSON.parse(storedData) as Exercise[];
    }
    return [];
  };