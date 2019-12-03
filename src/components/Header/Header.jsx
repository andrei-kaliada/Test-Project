import React, { Component } from 'react';
import logo from '../../tikrow-logo.png';
import { Container, Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import classNames  from 'classnames';
import './header.scss';
import { Link } from 'react-router-dom';




class Header extends Component {

    constructor(props){
        super(props);

        this.state ={
            first:false,
            second:false,
            third:false,
        }
        
    }

    handleActive = (select) => {

        console.log(select)
        if (select === "valueFirst") {
          this.setState({
            first:true,
            second:false,
            third:false,
          })
        }

        if (select === "valueSecond") {
          this.setState({
            first:false,
            second:true,
            third:false,
          })
        }

        if (select === "valueThird") {
          this.setState({
            first:false,
            second:false,
            third:true,
          })
        }

      }


    render(){

        const classValueFirst = classNames(
            'valueFirst',{'first':this.state.first,
        });
        const classValueSecond = classNames(
            'valueSecond',{'second':this.state.second,
        });
        const classValueThird = classNames(
            'valueThird',{'third':this.state.third,   
        });
    return (
     <> 
        <div className="wrapperMenu-header">          
            <Container>
                <div className="wrapperMenu">
                        <Grid container spacing={0}>
                            <Grid item xs={6} className="wrapperMenu__logo">
                            <Link to="/" onClick={ (event) => {
                                    this.handleActive("valueFirst");
                                    }
                                }>
                                <img src={logo} alt="logo" />
                            </Link> 
                            </Grid>
                            <Grid item xs={6} className="wrapperMenu__account">
                                <a href="#">
                                    <AccountCircleIcon fontSize="large" />
                                </a>
                            </Grid>
                        </Grid>
                </div>   
            </Container>  
        </div>     
        <Container>     
            <div className="wrapperMenu"> 
                <Grid item xs={12}>
                <div className="wrapperMenu__navigation">
                    <nav className="links">
                        <ul className="links__wrapper">
                            <Grid item xs={4}>
                                <Link to="/aktualne" onClick={ (event) => {
                                    this.handleActive(event.target.className);
                                    }
                                }>
                                    <li className={classValueFirst} >
                                        Aktualne
                                    </li>
                                </Link>    
                            </Grid>
                            <Grid item xs={4}>
                                <Link to="/planowane" onClick={ (event) => {
                                    this.handleActive(event.target.className);
                                    }
                                }>
                                    <li className={classValueSecond} >
                                        Planowane
                                    </li>
                                </Link>   
                            </Grid>
                            <Grid item xs={4}>
                                <Link to="/zakonczone" onClick={ (event) => {
                                    this.handleActive(event.target.className);
                                    }
                                }>
                                    <li className={classValueThird}>Zakończone</li>
                                </Link>
                                
                            </Grid>
                        </ul>
                    </nav>
                </div>
                </Grid>
                
            </div>
        </Container>
    </>
    );

           
    }
}

export default Header;