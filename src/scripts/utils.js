/**
 * Módulo de funciones utilitarias para Windbnb.
 * Aquí se gestionan funciones de renderizado, filtrado y ayuda general.
 */

export function loadStays(array, elementHTML) {
  elementHTML.innerHTML = "";

  array.forEach(function (stay) {
    const template = stayTemplate(stay);
    elementHTML.innerHTML += template;
  });
}

export function stayTemplate(stay) {
    if(stay.superHost){
      return `
        <div class="rounded-xl overflow-hidden shadow-sm border">
          <img src="${stay.photo}" alt="${stay.title}" class="w-full h-60 object-cover rounded-xl" />
          <p class="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <span class="text-xs font-bold border px-2 py-0.5 rounded-md">SUPERHOST</span>'
            ${stay.type}.${stay.beds}
          </p>
          <div class="flex justify-between items-center mt-1">
            <p class="font-semibold text-sm">${stay.title}</p>
            <p class="text-sm text-[#eb5757] font-medium">★ ${stay.rating}</p>
          </div>
        </div>
      `;
    }
    return `
        <div class="rounded-xl overflow-hidden shadow-sm border">
          <img src="${stay.photo}" alt="${stay.title}" class="w-full h-60 object-cover rounded-xl" />
          <p class="flex items-center gap-2 text-sm text-gray-500 mt-2">
            ${stay.superHost}
            <span class="text-xs font-bold border px-2 py-0.5 rounded-md">SUPERHOST</span>'
            ${stay.type}${stay.beds}
          </p>
          <div class="flex justify-between items-center mt-1">
            <p class="font-semibold text-sm">${stay.title}</p>
            <p class="text-sm text-[#eb5757] font-medium">★ ${stay.rating}</p>
          </div>
        </div>
      `;
  }


export function filterByCity(city, stays) {
  return stays.filter((stay) => stay.city.toLowerCase() === city.toLowerCase());
}

export function filterByGuests(guests, stays) {
  return stays.filter((stay) => stay.maxGuests >= guests);
}


