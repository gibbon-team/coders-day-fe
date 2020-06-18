import React, { useState, useRef } from "react";
import {
    Container,
    FormControl,
    InputLabel,
    Input,
    makeStyles,
    Theme,
    Button,
} from "@material-ui/core";
import { postQuiz, SingleQuestion } from "../../../service/quiz";

const useStyles = makeStyles((theme: Theme) => ({
    form: {
        width: "50%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        "& > div": {
            padding: "1rem 0",
        },
    },
    buttons: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

export const QuizForm = () => {
    const classes = useStyles();
    const quizName = useRef<any>();
    const question = useRef<any>();
    const answer1 = useRef<any>();
    const answer2 = useRef<any>();
    const answer3 = useRef<any>();
    const answer4 = useRef<any>();

    const [questions, setQuestions] = useState<SingleQuestion[]>([]);

    const nextStep = () => {
        const nextQuestion: SingleQuestion = {
            question: question.current.value,
            answers: [
                { description: answer1.current.value, isCorrect: true },
                { description: answer2.current.value, isCorrect: false },
                { description: answer3.current.value, isCorrect: false },
                { description: answer4.current.value, isCorrect: false },
            ],
        };
        setQuestions((question) => [...question, nextQuestion]);
        quizName.current.disabled = true;
        quizName.current.readOnly = true;
        question.current.value = "";
        answer1.current.value = "";
        answer2.current.value = "";
        answer3.current.value = "";
        answer4.current.value = "";
    };

    const submit = (e) => {
        e.preventDefault();
        nextStep();
        postQuiz({ name: quizName.current.value, questions });
    };

    return (
        <Container>
            <form className={classes.form} onSubmit={submit}>
                <FormControl>
                    <InputLabel>Quiz name</InputLabel>
                    <Input inputRef={quizName} name="quizName"></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Question</InputLabel>
                    <Input inputRef={question} name="question"></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Answer 1</InputLabel>
                    <Input inputRef={answer1} name="answer1"></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Answer 2</InputLabel>
                    <Input inputRef={answer2} name="answer2"></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Answer 3</InputLabel>
                    <Input inputRef={answer3} name="answer3"></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Answer 4</InputLabel>
                    <Input inputRef={answer4} name="answer4"></Input>
                </FormControl>
                <div className={classes.buttons}>
                    <Button type="reset">Clear</Button>
                    <Button type="submit">Submit</Button>
                    <Button onClick={nextStep}>Next</Button>
                </div>
            </form>
        </Container>
    );
};

export default QuizForm;
