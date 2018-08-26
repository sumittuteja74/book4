import axios from 'axios';
import {FETCH_RENTALS, 
        FETCH_RENTAL_BY_ID,
        FETCH_RENTAL_BY_ID_SUCCESS,
        FETCH_RENTAL_BY_ID_INIT,
        FETCH_RENTALS_SUCCESS} from './types.js';

const rentals = [{
    id: 1,
    title: "Central Apartment",
    city: "New Delhi",
    street: "M.G Road",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 1500,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: 2,
    title: "Central Apartment 2",
    city: "New Delhi",
    street: "Hauz Khas",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 1600,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: 3,
    title: "Central Apartment 3",
    city: "Old Delhi",
    street: "Kasturba Gandhi Marg",
    category: "Pent House",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 1200,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: 4,
    title: "Central Apartment 4",
    city: "NEW Delhi",
    street: "K.P. Kariappa Marg",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 9,
    description: "Very nice apartment",
    dailyRate: 3300,
    shared: true,
    createdAt: "24/12/2017"
}];

const fetchRentalByIdInit =() =>{
    return{
        type:FETCH_RENTAL_BY_ID
        }
}
const fetchRentalByIdSuccess = (rental)=>{
    return{
    type:FETCH_RENTAL_BY_ID_SUCCESS,
    rental
    }
}

const fetchRentalsSuccess = (rentals)=>{
    return{
    type:FETCH_RENTALS_SUCCESS,
    rentals
    }
}

export const fetchRentals =()=>{
    return{
        type:FETCH_RENTALS,
        rentals
    }
}

export const fetchRentalById = (rentalId) => {
    let rental={}
   return function(dispatch){
     dispatch(fetchRentalByIdInit());

    setTimeout(()=>{
    const rental = rentals.find((rentals)=> rentals.id.toString() === rentalId);
    dispatch(fetchRentalByIdSuccess(rental));
    },1000)
    
   }
}

