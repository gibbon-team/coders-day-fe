import React, { useState, useRef } from "react";
import {
    makeStyles,
    Theme,
    Button,
} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({

}));

export const Quiz = () => {
    return (
        <div style={{ marginTop: '20rem' }}>
            <span style={{ fontSize: '2rem' }}>Which design pattern allows you to decouple the business logic, data representation, and data presentation? (Select one)</span>
            <div style={{ height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: ' space-between' }}>
                    <Button style={{ height: '20%', width: '20%' }}>Value Object</Button>
                    <Button style={{ height: '20%', width: '20%' }}>Bimodal Data Access</Button>
                </div>
                <div style={{ display: 'flex', justifyContent: ' space-between' }}>
                    <Button style={{ height: '20%', width: '20%' }}>Model-View-Controller</Button>
                    <Button style={{ height: '20%', width: '20%' }}>Business Delegate</Button>
                </div>
            </div>
        </div>
    )
};

export default Quiz;