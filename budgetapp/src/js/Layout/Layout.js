import React from 'react';
import Navigation from './Navigation';
// import Summary from '../Summary';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

// import {DataProvider} from '../DataContext';
// import Modal from '../Modal';


const Layout = ({ children }) => {
    return (
      <div className="App">
        <header className="header">
          <div className="logo">
            <FontAwesomeIcon icon={faHouseChimney}/> 
            <span>Home</span>
            <span>Budget</span>        
          </div>
          <div className="user">
            <span className="user__first_name">First Name</span>
            <span className="user__last_name">Last Name</span>
            <div className="user__avatar"></div>
          </div>
        </header>
        <main className="main">
          {/* <DataProvider> */}
            <Navigation/>
            {children} 
            {/* <Summary/> */}
            {/* <Modal /> */}
          {/* </DataProvider> */}
        </main>
 
      </div>
    )
}

export default Layout