import React from "react";
import {
  List,
  ListItem,
  Container,
  makeStyles,
  Theme,
  ListItemText,
} from "@material-ui/core";
import QuizDetails from "../modal/QuizDetails";

const question = (id, description, answers) => {
  return {
    id: id,
    description: description,
    answers: answers,
  };
};

const answer = (id, description, isCorrect) => {
  return {
    id: id,
    description: description,
    isCorrect: isCorrect,
  };
};

const quizesMock = [
  {
    id: 1,
    name: "quiz 1",
    questions: question(1, "desc 1", [
      answer(1, "aaa", true),
      answer(2, "bbb", false),
    ]),
    status: "xdxd",
  },
  {
    id: 2,
    name: "quiz 2",
    questions: question(2, "desc 2", [
      answer(3, "ccc", false),
      answer(4, "ddd", true),
    ]),
    status: "dxdx",
  },
];

const QuizToStartList = () => {
  const quizes = quizesMock;
  const styles = useStyles();

  const [id, setId] = React.useState(null);

  const handleOpen = (id) => {
    setId(id);
  };

  const handleClose = () => {
    setId(null);
  };

  return (
    <>
      {id != null && (
        <QuizDetails
          quiz={quizes.find((quiz) => quiz.id === id)}
          id={id}
          handleClose={handleClose}
        />
      )}
      <Container className={styles.container}>
        <List>
          {quizes.map((quiz) => (
            <ListItem
              button
              className={styles.listItem}
              key={quiz.id}
              onClick={() => handleOpen(quiz.id)}
            >
              <ListItemText primary={quiz.name} />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "50%",
    margin: "0 auto",
  },

  listItem: {
    marginBottom: "10px",
  },
}));

export default QuizToStartList;
