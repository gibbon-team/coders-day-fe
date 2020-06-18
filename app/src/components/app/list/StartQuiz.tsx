import React, { useState, useEffect } from 'react'
import { makeStyles, Theme, List, ListItem, ListItemText, Modal, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import { Quiz, getQuizes } from '../../../service/quiz';

const useStyles = makeStyles((theme: Theme) => ({
    startQuiz: {
        width: "50%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
    list: {
        overflowY: 'auto',
        maxHeight: '30rem',
        borderBottom: '1px black solid'
    },
    modal: {
        position: 'absolute',
        width: '50%',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    button: {
        display: 'flex',
        margin: '0 auto',
        fontSize: '2rem',
    },
    root: {
        padding: '1rem 0',
        textAlign: 'center'
    },
    primary: {
        fontSize: '2rem',
    }
}));

function createData(question, answer1, answer2, answer3, answer4) {
    return { question, answer1, answer2, answer3, answer4 };
}

const rows = [
    createData('Is Java the best', 'Yes', 'No', 'No', 'No'),
    createData('The best company', 'Transistion Technologies', 'Mc donald', 'Nike', 'Welmart'),
    createData('The best TT office', 'Kielce', 'Bialystok', 'Taipei', 'Radom'),
    createData('The best frontend technology', 'React', 'Angular', 'Vue', 'Vanilia'),
    createData('The best footbal team', 'Korona Kielce', 'Real Madrit', 'Juventus', 'Arsenal'),
];

export const StartQuiz = () => {
    const classes = useStyles();
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [quiz, setQuiz] = useState<any | null>(null);

    useEffect(() => {
        const fetchAsync = () => getQuizes().then(res => setQuizzes(res))
        fetchAsync();
    }, [])

    return (
        <>
            {quiz != null && (
                <Modal
                    open={true}
                    onClose={() => setQuiz(null)}
                >
                    <>
                        <TableContainer component={Paper} className={classes.modal}>
                            <Button className={classes.button}>Start Quiz</Button>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Question</TableCell>
                                        <TableCell align="right">Answer 1</TableCell>
                                        <TableCell align="right">Answer 2</TableCell>
                                        <TableCell align="right">Answer 3</TableCell>
                                        <TableCell align="right">Answer 4</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.question}>
                                            <TableCell component="th" scope="row">
                                                {row.question}
                                            </TableCell>
                                            <TableCell align="right" style={{ backgroundColor: '#01FF70' }}>{row.answer1}</TableCell>
                                            <TableCell align="right" style={{ backgroundColor: '#FF4136' }}>{row.answer2}</TableCell>
                                            <TableCell align="right" style={{ backgroundColor: '#FF4136' }}>{row.answer3}</TableCell>
                                            <TableCell align="right" style={{ backgroundColor: '#FF4136' }}>{row.answer4}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                </Modal>
            )}

            <div className={classes.startQuiz}>
                <List className={classes.list}>
                    {quizzes.map((quiz) => (
                        <ListItem button key={quiz.name}>
                            <ListItemText primary={quiz.name} classes={{ root: classes.root, primary: classes.primary }} onClick={() => setQuiz(quiz)} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </>
    )
}

export default StartQuiz;