import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../../actions/data';
import Card from '../Card/Card';

class Aktualne extends Component {

    componentDidMount(){
        const { setData } = this.props;    
        axios.get('https://apidev.tikrow.com/commission-open/fetch-all')
        .then(({data}) => {
            setData(data);
        })
    }

    render() {
      console.log(this.props);
      const { items } = this.props;
      console.log(items);
        return(
            <Container>
               { items.map( item => (
                   <Card key={item.id} {...item}/>
               ))}
            </Container>
        )
    }
}


const mapStateToProps = ({cart}) => ({
    items:cart.items,
});

const mapDispathToProps = (dispatch) => ({
     ...bindActionCreators(booksActions, dispatch),
})

export default connect(mapStateToProps, mapDispathToProps )(Aktualne);