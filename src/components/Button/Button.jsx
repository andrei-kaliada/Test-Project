import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './button.scss';

const ButtonComponent = (props) => {
    console.log(props);
    return(
        <div className="button" >
            <Link to={{
                pathname:'/pokaz',
                state: {
                    props:props
                }
            }} 
            position={props.position}>
            <Button variant="contained" >
                Pokaz
            </Button>
            </Link>                    
                
            <Button variant="contained">
                Akceptuj
            </Button>                  
        </div>
    )
}

export default ButtonComponent;