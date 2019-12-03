import React, { Component } from 'react';
import { Grid} from '@material-ui/core';
import './card.scss';
import classNames  from 'classnames';
import Button from '../Button/Button';
import { GetFullDate, GetTime} from '../../containers/Card';




class Card extends Component{

    constructor(props){
        super(props);

        this.state = {
            isVisible:false,
            isActive:false
        }
    }

    handleChangeHidden = () =>{
        this.setState( state=> ({
            isVisble:!state.isVisble,
            isActive:!state.isActive,
        }))
      
    }
    
    render(){

    const {start_date,end_date,customer,position} = this.props;

    const classValue = classNames(
        'card',
        {'isActive':this.state.isActive},
    );

    return(
        <Grid className={classValue} container spacing={0} >
            <Grid  item xs={10}>
                <div className="card__info" onClick={this.handleChangeHidden}>
                    <div className="card__info-date">
                       <p className="card__info-date-fullDate">
                            {
                            <GetFullDate
                            start={start_date}
                            />
                            }
                        </p>
                        <p className="card__info-date-fullTime">
                        {
                            <GetTime 
                            start={start_date}
                            end={end_date}
                            />
                        }
                        </p> 
                    </div>
                    <div className="card__info-type">
                        <p>{position}</p>
                        <p>{customer}</p>
                    </div>
                </div>
            </Grid>
            <Grid className="card__price" item xs={2}>
                <div className="card__price">
                   <p>107 zl</p> 
                </div>
            </Grid>
            <Grid item xs={12}>
                {
                    this.state.isVisble ?
                    <Button {...this.props}/>
                 : " "
                }
                
            </Grid>
        </Grid>  
    );
    }
}

export default Card;