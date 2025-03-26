import {stays} from './stays.js';
console .log(stays);
import {
  loadStays,
} from './utils.js';


const staysContainer = document.querySelector('#stays-contenedor');


// 🚀 Mostrar estancias al cargar
loadStays(stays, staysContainer);

