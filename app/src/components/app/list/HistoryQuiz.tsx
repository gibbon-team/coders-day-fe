import React, { useState, useEffect } from 'react'
import { makeStyles, Theme, List, ListItem, ListItemText, Modal, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
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
    root: {
        padding: '1rem 0',
        textAlign: 'center'
    },
    primary: {
        fontSize: '2rem',
    }
}));

function createData(name, calories, fat, carbs, points) {
    return { name, calories, fat, carbs, points };
}

const rows = [
    createData('Tomy Lee Jhon', 1, 'A', 'true', '562'),
    createData('Tomy Lee Jhon', 5, 'B', 'true', '222'),
    createData('Tomy Lee Jhon', 7, 'D', 'true', '321'),
    createData('Tomy Lee Jhon', 9, 'B', 'true', '63'),
    createData('Tomy Lee Jhon', 11, 'A', 'true', '634'),
    createData('Jhon Doe', 1, 'A', 'false', '32'),
    createData('Jhon Doe', 5, 'B', 'true', '777'),
    createData('Jhon Doe', 7, 'D', 'false', '23'),
    createData('Jhon Doe', 9, 'B', 'true', '77'),
    createData('Jhon Doe', 11, 'A', 'false', '34'),
    createData('Jhon Whick', 1, 'A', 'true', '33'),
    createData('Jhon Whick', 5, 'B', 'false', '1'),
    createData('Jhon Whick', 7, 'D', 'true', '23'),
    createData('Jhon Whick', 9, 'B', 'true', '6'),
    createData('Jhon Whick', 11, 'A', 'false', '99'),

];

export const HistoryQuiz = () => {
    const classes = useStyles();
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [quiz, setQuiz] = useState<any | null>(null);

    return (
        <>
            {quiz != null && (
                <Modal
                    open={true}
                    onClose={() => setQuiz(null)}
                >
                    <TableContainer component={Paper} className={classes.modal}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Username</TableCell>
                                    <TableCell align="right">Question Id</TableCell>
                                    <TableCell align="right">Answer</TableCell>
                                    <TableCell align="right">Is correct</TableCell>
                                    <TableCell align="right">Points</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name} style={{
                                        backgroundColor: row.carbs === 'true' ? '#01FF70' : '#FF4136'
                                    }}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.points}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Modal>
            )
            }

            <div className={classes.startQuiz}>
                <List className={classes.list}>
                    <ListItem button>
                        <ListItemText primary="Quiz number 123" classes={{ root: classes.root, primary: classes.primary }} onClick={() => setQuiz({})} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Quiz number 127" classes={{ root: classes.root, primary: classes.primary }} onClick={() => setQuiz({})} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Quiz number 199" classes={{ root: classes.root, primary: classes.primary }} onClick={() => setQuiz({})} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Quiz number 231" classes={{ root: classes.root, primary: classes.primary }} onClick={() => setQuiz({})} />
                    </ListItem>
                </List>
            </div>
        </>
    )
}

export default HistoryQuiz;