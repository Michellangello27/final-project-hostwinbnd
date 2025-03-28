/**
 * Aquí está la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from './stays.js';
import { loadStays, toggleModal, addCityFilter } from './utils.js';


const staysContainer = document.querySelector('#stays-contenedor');
const city = document.querySelector("#city");
const guest = document.querySelector("#guest");
const search =document.querySelector("#search"); 

  loadStays(stays, staysContainer);



  const locationBtn = document.getElementById('location-button');
  const guestsBtn = document.getElementById('guests-button');
  const searchBtn = document.getElementById('search-button');
  const closeBtn = document.getElementById('close-modal');


  /* para chequeo 
  console.log(" Botones :", {
    locationBtn,
    guestsBtn,
    searchBtn,
    closeBtn
  });*/


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


 function toggleGuestOptions() {
  document.getElementById("guest-options").classList.toggle("hidden");
}


document.getElementById("guests-input").addEventListener("click", toggleGuestOptions);
document.getElementById("guests-input-mobile").addEventListener("click", toggleGuestOptions);


document.getElementById("increase-adults").addEventListener("click", function() {
  let count = parseInt(document.getElementById("adult-count").textContent);
  document.getElementById("adult-count").textContent = count + 1;
});

document.getElementById("decrease-adults").addEventListener("click", function() {
  let count = parseInt(document.getElementById("adult-count").textContent);
  if(count > 1) {
      document.getElementById("adult-count").textContent = count - 1;
  }
});

document.getElementById("increase-children").addEventListener("click", function() {
  let count = parseInt(document.getElementById("children-count").textContent);
  document.getElementById("children-count").textContent = count + 1;
});

document.getElementById("decrease-children").addEventListener("click", function() {
  let count = parseInt(document.getElementById("children-count").textContent);
  if(count > 0) {
      document.getElementById("children-count").textContent = count - 1;
  }
});