import { URL } from '../general'

export type Quiz = {
    name: string,
    questions: SingleQuestion[],
}

export type SingleQuestion = {
    description: string;
    answers: Answer[];
};

export type Answer = {
    description: string;
    isCorrect: boolean;
};

const optionGET = {
    method: "GET",
    headers: new Headers({ 'Content-Type': 'application/json' }),
}

const optionPOST = (body: Quiz) => ({
    method: "POST",
    headers: new Headers({ 'Content-Type': 'application/json' }),
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
