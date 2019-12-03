import React, { Component } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from 'react-router-dom';
import Leroy from '../../leroy-merlin.jpg';
import { GetFullDate, GetTime} from '../../containers/Card';
import './pokaz.scss';

class Pokaz extends Component {

   
    render() {
        const { props } = this.props.location.state;
        console.log(props)
        return (
        <>
            <div className="wrapperContainer">
                <Container >
                    <Grid container spacing={0} className="wrapperContainer__top">
                        <Grid item xs={12} className="wrapperContainer__arrow">
                            <Link to="/aktualne">
                                <ArrowBackIcon fontSize="large"/>
                            </Link>
                            <div className="wrapperContainer__text">
                                <p>Zadanie</p>
                                <p>Aktualne</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Container>
                <Grid container spacing={0} className="containerImage">
                    <Grid item xs={12}>
                        <img src={Leroy} ></img>
                    </Grid>
                </Grid>
            </Container>
            <div className="wrapperContainer">
                <Container>
                   <Grid container spacing={0} className="wrapperContainer__info">
                        <Grid item xs={12}>
                            <p className="wrapperContainer__info-headline">
                                Stanowisko
                            </p>
                            <p className="wrapperContainer__info-text">{props.position}</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p className="wrapperContainer__info-headline">
                                Data
                            </p>
                            <p className="wrapperContainer__info-text">
                                <GetFullDate start={props.start_date}/>
                            </p>
                        </Grid>
                        <Grid item xs={6} className="wrapper-date">
                            <p className="wrapperContainer__info-headline">
                                Czas
                            </p>
                            <p className="wrapperContainer__info-text">
                                <GetTime 
                                start={props.start_date}
                                end={props.end_date}
                                />
                            </p>
                        </Grid>
                        <Grid item xs={12}>
                            <p className="wrapperContainer__info-headline">
                                Wynagrodzenie na rękę
                            </p>
                            <p className="wrapperContainer__info-text">
                                66.45 zł | 11.08 zł/h
                            </p>
                        </Grid>
                        <Grid item xs={9}>
                            <p className="wrapperContainer__info-headline">
                                Miejsce realizacji
                            </p>
                            <p className="wrapperContainer__info-text">
                               {props.customer}
                            </p>
                        </Grid>
                        <Grid item xs={3} className="map">
                            <RoomIcon fontSize="default"/>
                            <p>mapa</p>
                        </Grid>
                   </Grid>
                </Container>
            </div>
            <div className="container-button">
                <Container>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            
                            <Button variant="contained">
                                Akceptuj
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
         </>   
        );
    }
}

export default Pokaz;