/**
 * Aquí está la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from './stays.js';
import {
  loadStays,
  toggleModal,
  toggleGuestOptions,
  updateGuestsInput,
} from './utils.js';

const staysContainer = document.querySelector('#stays-contenedor');
const search = document.getElementById("search");
const locationInput = document.getElementById("location");
const guestInput = document.getElementById("guests");
const suggestionList = document.getElementById("location-suggestions");


let modalJustOpened = false;


loadStays(stays, staysContainer);


const locationBtn = document.getElementById('location-button');
const guestsBtn = document.getElementById('guests-button');
const searchBtn = document.getElementById('search-button');
const closeBtn = document.getElementById('close-modal');


const openModalHandler = () => {
  toggleModal();
  modalJustOpened = true;
  setTimeout(() => {
    modalJustOpened = false;
  }, 100); // para evitar que el modal se cierre por el mismo clic
};

if (locationBtn) locationBtn.addEventListener('click', openModalHandler);
if (guestsBtn) guestsBtn.addEventListener('click', openModalHandler);
if (searchBtn) searchBtn.addEventListener('click', openModalHandler);
if (closeBtn) closeBtn.addEventListener('click', toggleModal);


const guestsInput = document.getElementById("guests-input");
if (guestsInput) guestsInput.addEventListener("click", toggleGuestOptions);


const increaseAdults = document.getElementById("increase-adults");
const decreaseAdults = document.getElementById("decrease-adults");
const increaseChildren = document.getElementById("increase-children");
const decreaseChildren = document.getElementById("decrease-children");

increaseAdults?.addEventListener("click", () => {
  let count = parseInt(document.getElementById("adult-count").textContent);
  document.getElementById("adult-count").textContent = count + 1;
  updateGuestsInput();
});

decreaseAdults?.addEventListener("click", () => {
  let count = parseInt(document.getElementById("adult-count").textContent);
  if (count > 1) document.getElementById("adult-count").textContent = count - 1;
  updateGuestsInput();
});

increaseChildren?.addEventListener("click", () => {
  let count = parseInt(document.getElementById("children-count").textContent);
  document.getElementById("children-count").textContent = count + 1;
  updateGuestsInput();
});

decreaseChildren?.addEventListener("click", () => {
  let count = parseInt(document.getElementById("children-count").textContent);
  if (count > 0) document.getElementById("children-count").textContent = count - 1;
  updateGuestsInput();
});


locationInput.addEventListener("focus", () => {
  suggestionList.classList.remove("hidden");
});


locationInput.addEventListener("input", () => {
  const term = locationInput.value.toLowerCase();
  [...suggestionList.children].forEach((li) => {
    const city = li.getAttribute("data-city").toLowerCase();
    li.classList.toggle("hidden", !city.includes(term));
  });
});


suggestionList.addEventListener("click", (e) => {
  const li = e.target.closest("li[data-city]");
  if (li) {
    const selectedCity = li.getAttribute("data-city");
    locationInput.value = selectedCity;
    suggestionList.classList.add("hidden");
  }
});


document.addEventListener("click", (e) => {

  if (!document.getElementById("location-container").contains(e.target)) {
    suggestionList.classList.add("hidden");
  }


  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  if (
    !modal.classList.contains("hidden") &&
    !modalContent.contains(e.target) &&
    window.innerWidth >= 768 &&
    !modalJustOpened
  ) {
    toggleModal();
  }
});


search.addEventListener("click", () => {
  let cityValue = locationInput.value.split(",")[0].trim().toLowerCase();
  let guestValue = parseInt(guestInput.value) || 0;
  let filtered = stays;

  if (cityValue !== "" && guestValue === 0) {
    filtered = stays.filter((stay) => stay.city.toLowerCase() === cityValue);
  } else if (cityValue === "" && guestValue > 0) {
    filtered = stays.filter((stay) => stay.maxGuests >= guestValue);
  } else if (cityValue !== "" && guestValue >= 0) {
    filtered = stays.filter(
      (stay) => stay.maxGuests >= guestValue && stay.city.toLowerCase() === cityValue
    );
  }

  loadStays(filtered, staysContainer);
  toggleModal();
});
