import React from "react";
import QuizForm from "../../components/app/form/QuizForm";
import QuizToStartList from "../../components/app/list/QuizToStartList";

export const App = () => {
  return (
    <div>
      <QuizForm />
      <QuizToStartList />
    </div>
  );
};

export default App;
