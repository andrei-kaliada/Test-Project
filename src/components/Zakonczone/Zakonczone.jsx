import React from 'react';
import Palma from '../../palma.png'
import { Container, Grid } from '@material-ui/core';
import './zakonczone.scss';

const Zakonczone = () => {

    return(
        <Container>
            <Grid container spacing={0}>
                <Grid item xs={12} className="wrapperEnd">
                        <img src={Palma} alt="palma"/>
                </Grid>
            </Grid>
        </Container> 
    );
         
}


export default Zakonczone;