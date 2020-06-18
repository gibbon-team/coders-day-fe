import { URL } from '../general'

export type Quiz = {
    name: string,
    questions: SingleQuestion[],
}

export type SingleQuestion = {
    question: string;
    answers: Answer[];
};

export type Answer = {
    description: string;
    isCorrect: boolean;
};

const optionGET = {
    method: "GET",
}

const optionPOST = (body: Quiz) => ({
    method: "POST",
    body: JSON.stringify(body),
})

export const getQuizes = () => {
    return fetch(`${URL}quiz`, optionGET)
        .then(res => res.json())
}

export const postQuiz = (quiz: Quiz) => {
    return fetch(`${URL}quiz`, optionPOST(quiz))
        .then(res => res.json())
}
