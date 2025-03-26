/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */


import { stays } from './stays.js';
import { loadStays } from './utils.js';

const staysContainer = document.querySelector('#stays-contenedor');


import {
  loadStays,
  filterByCity,
  filterByGuests,
  getUniqueCities,
} from './utilsF.js';


const deskLocationInput = document.querySelector('#deskLocationInput');
const mobLocationInput = document.querySelector('#mobLocationInput');
const locationSug = document.querySelector('#locationSug');
const mobLocationSug = document.querySelector('#mobLocationSug');

const guestsButton = document.querySelector('#guests-button');
const mobileGuestInput = document.querySelector('#mobGuestInput');
const mobileSearchBtn = document.querySelector('#mobSearchBtn');

const ventana = document.querySelector('#ventana-busqueda');
const closeVentana = document.querySelector('#close-ventana');


const adultsCount = document.querySelector('#adults-count');
const childrenCount = document.querySelector('#children-count');
const guestButtons = document.querySelectorAll('.guest-btn');

let adults = 0;
let children = 0;

loadStays(stays, staysContainer);



