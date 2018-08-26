import React, { Component } from 'react';
import {BrowserRouter ,Route , Redirect} from 'react-router-dom';


import {Provider} from 'react-redux';

import 'App.css';


import { Header } from 'shared/Header';
import RentalListing from 'components/rental/rental-listing/RentalListing';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';

const store = require('./reducers').init();

class App extends Component {
  constructor(){
  super()
  this.state={
    isRentalList: true
  }
  } 
   render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
          <div className="App">
          <Header/>
          
              <div className='container'>
              {/* {this.state.isRentalList ? <RentalList/> : <RentalDetail/>} */}
              <Route exact path ="/" render={()=> <Redirect to ="/rentals"/>}/>
                <Route exact path ="/rentals"  component={RentalListing}/>
                <Route exact path ="/rentals/:id" component={RentalDetail} />

              </div>
          </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
