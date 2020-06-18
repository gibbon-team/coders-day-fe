import React from "react";
import QuizForm from "../../components/app/form/QuizForm";
import { Container } from "@material-ui/core";
import StartQuiz from "../../components/app/list/StartQuiz";
import HistoryQuiz from "../../components/app/list/HistoryQuiz";

export const App = () => {
  return (
    <Container>
      <HistoryQuiz />
      <StartQuiz />
      <QuizForm />
    </Container>
  );
};

export default App;
