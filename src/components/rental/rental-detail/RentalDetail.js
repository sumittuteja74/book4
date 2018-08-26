import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {RentalDetailInfo} from './RentalDetailInfo';
import {MapWithAMarker} from 'components/map/GoogleMap';

class RentalDetail extends React.Component{
    
    componentWillMount()
    {
     const rentalId = this.props.match.params.id
     this.props.dispatch(actions.fetchRentalById(rentalId));   
    }    
    render(){
        const rental = this.props.rental;
       if(rental.id){
    return(
           <section id='rentalDetails'>
            <div className='upper-section'>
                <div className='row'>
                <div className='col-md-6'>
                    <img src={rental.image} alt=''></img>
                </div>
                <div className='col-md-6'>
                <img src={rental.image} alt=''></img>
                    {/* <MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `360px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    /> */}
                </div>
                </div>
            </div>

            <div className='details-section'>
                <div className='row'>
                <div className='col-md-8'>
                  <RentalDetailInfo rental={rental}/> 
                </div>
                <div className='col-md-4'> BOOKING</div>
                </div>
            </div>
            </section>
    );
}else{
    return(
        <h1>LOADING.....</h1>
    )
}

}
}
function mapStateToProps(state){
    return{
     rental:state.rental.data,
    }
}
export default connect(mapStateToProps)(RentalDetail)