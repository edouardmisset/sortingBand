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
const excludeList = ['the ', 'a ', 'an '];

const regex = new RegExp(`^(${excludeList.join('|')})`, 'i');

//----------------
// Event Listeners
//----------------

//----------
// Functions
//----------

const sortedBands = [...bands].sort((a, b) => (strip(a) < strip(b) ? -1 : 1));

function strip(band) {
  return band.replace(regex, '');
}

list.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join('');
