import { stays } from './stays.js';
import { loadStays, toggleModal, addCityFilter } from './utils.js';

  // Cargar los stays 
  const staysContainer = document.querySelector('#stays-contenedor');
  loadStays(stays, staysContainer);
  //addCityFilter(stays, staysContainer); // para filtra por ciudad

  // Botones
  const locationBtn = document.getElementById('location-button');
  const guestsBtn = document.getElementById('guests-button');
  const searchBtn = document.getElementById('search-button');
  const closeBtn = document.getElementById('close-modal');

  /* para chequeo 
  console.log(" Botones encontrados:", {
    locationBtn,
    guestsBtn,
    searchBtn,
    closeBtn
  });*/

  // Para abrir/cerrar modal
  if (locationBtn) locationBtn.addEventListener('click', () => {
    //console.log("Clic en Location");
    toggleModal();
  });

  if (guestsBtn) guestsBtn.addEventListener('click', () => {
    //console.log("Clic en Guests");
    toggleModal();
  });

  if (searchBtn) searchBtn.addEventListener('click', () => {
    //console.log("Clic en Search");
    toggleModal();
  });

  if (closeBtn) closeBtn.addEventListener('click', () => {
    //console.log("Clic en cerrar modal");
    toggleModal();
  });

