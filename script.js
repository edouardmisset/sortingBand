//----------
// Variables
//----------

const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

const list = document.querySelector('ul');

//----------------
// Event Listeners
//----------------

//----------
// Functions
//----------

const sortedBands = [...bands].sort();

list.innerHTML = sortedBands
  .map((band) => {
    return `
        <li>${band}</li>
      `;
  })
  .join('');
