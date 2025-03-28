import { stays } from './stays.js';
import {
  loadStays,
  toggleModal,
  toggleGuestOptions,
  updateGuestsInput
} from './utils.js';

const staysContainer = document.querySelector('#stays-contenedor');
const search = document.getElementById("search");
const locationInput = document.getElementById("location");
const guestInput = document.getElementById("guests");
const suggestionList = document.getElementById("location-suggestions");
const staysCount = document.getElementById("stays-count");

let modalJustOpened = false;


loadStays(stays, staysContainer);
staysCount.textContent = `${stays.length} stays`;


const locationBtn = document.getElementById('location-button');
const guestsBtn = document.getElementById('guests-button');
const searchBtn = document.getElementById('search-button');
const closeBtn = document.getElementById('close-modal');

const openModalHandler = () => {
  toggleModal();
  modalJustOpened = true;


  document.getElementById("adult-count").textContent = "1";
  document.getElementById("children-count").textContent = "0";


  guestInput.value = "";
  locationInput.value = "";


  suggestionList.classList.add("hidden");

  setTimeout(() => {
    modalJustOpened = false;
  }, 100);
};

locationBtn?.addEventListener("click", openModalHandler);
guestsBtn?.addEventListener("click", openModalHandler);
searchBtn?.addEventListener("click", openModalHandler);
closeBtn?.addEventListener("click", toggleModal);


const guestsInput = document.getElementById("guests-input");
if (guestsInput) {
  guestsInput.addEventListener("click", () => {
    toggleGuestOptions();
    updateGuestsInput(guestInput);
  });
}


const increaseAdults = document.getElementById("increase-adults");
const decreaseAdults = document.getElementById("decrease-adults");
const increaseChildren = document.getElementById("increase-children");
const decreaseChildren = document.getElementById("decrease-children");

increaseAdults?.addEventListener("click", () => {
  let count = parseInt(document.getElementById("adult-count").textContent);
  document.getElementById("adult-count").textContent = count + 1;
  updateGuestsInput(guestInput);
});

decreaseAdults?.addEventListener("click", () => {
  let count = parseInt(document.getElementById("adult-count").textContent);
  if (count > 1) {
    document.getElementById("adult-count").textContent = count - 1;
    updateGuestsInput(guestInput);
  }
});

increaseChildren?.addEventListener("click", () => {
  let count = parseInt(document.getElementById("children-count").textContent);
  document.getElementById("children-count").textContent = count + 1;
  updateGuestsInput(guestInput);
});

decreaseChildren?.addEventListener("click", () => {
  let count = parseInt(document.getElementById("children-count").textContent);
  if (count > 0) {
    document.getElementById("children-count").textContent = count - 1;
    updateGuestsInput(guestInput);
  }
});


locationInput.addEventListener("focus", () => {
  suggestionList.classList.remove("hidden");
});


locationInput.addEventListener("input", function () {
  const textoUsuario = this.value.toLowerCase(); 
  const sugerencias = Array.from(suggestionList.children); 

  sugerencias.forEach(function (item) {
    const ciudad = item.dataset.city.toLowerCase(); 
    if (ciudad.includes(textoUsuario)) {
      item.classList.remove("hidden"); 
    } else {
      item.classList.add("hidden"); 
    }
  });
});


suggestionList.addEventListener("click", (e) => {
  const li = e.target.closest("li[data-city]");
  if (li) {
    locationInput.value = li.dataset.city;
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
  let guestValue = parseInt(
    guestInput.value.match(/\d+/)?.[0] || "0"
  );

  let filtered = stays;

  if (cityValue && guestValue === 0) {
    filtered = stays.filter((stay) => stay.city.toLowerCase() === cityValue);
  } else if (!cityValue && guestValue > 0) {
    filtered = stays.filter((stay) => stay.maxGuests >= guestValue);
  } else if (cityValue && guestValue > 0) {
    filtered = stays.filter(
      (stay) =>
        stay.maxGuests >= guestValue &&
        stay.city.toLowerCase() === cityValue
    );
  }

  loadStays(filtered, staysContainer);
  staysCount.textContent = `${filtered.length} stay${filtered.length !== 1 ? "s" : ""}`;
  toggleModal();
});
