import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Aktualne from '../../components/Aktualne/Aktualne';
import Planowane from '../../components/Planowane/Planowane';
import Zakonczone from '../../components/Zakonczone/Zakonczone';
import Pokaz from '../../components/Pokaz/Pokaz';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Main = () => {
    return(
        <div>
            <Route path={'/pokaz'} component={Pokaz}/>
            <Route path={['/','/aktualne','/planowane', '/zakonczone']} component={Header} exact/>
            <Route path={['/','/aktualne']} component={Aktualne} exact/>
            <Route path={['/planowane']} component={Planowane} />
            <Route path={['/zakonczone']} component={Zakonczone} />
            
        </div>
    );
}

export default Main;