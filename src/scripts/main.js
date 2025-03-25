/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */


import { stays } from './stays.js';
import { loadStays } from './utils.js';

const staysContainer = document.querySelector('#stays-container');

loadStays(stays, staysContainer);

