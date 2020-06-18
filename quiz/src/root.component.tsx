import React from "react";
import Quiz from "./components/quiz/form/Quiz";
import { Camera } from "./components/quiz/camera/Camera";

export const Root = (props) => {
  return (
    <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between', margin: '0 auto', minHeight: '80%' }}>
      <Quiz />
      <Camera />
    </div>
  );
};
