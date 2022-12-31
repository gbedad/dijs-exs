const ITEM_KEY = 'notes';
const root = document.getElementById('root');
const input = document.getElementById('note');
const arr = getNotesFromLocalStorage();

const saveNote = () => {
  const note = input.value;
  arr.push(note);
  // save to loaclStorage
  localStorage.setItem(ITEM_KEY, JSON.stringify(arr));
  createNotes(arr);
};

const createNotes = (arr) => {
  const html = arr.map((note) => {
    return `<div>${note}</div>`;
  });
  console.log(html);
  root.innerHTML = html.join('');
};

function getNotesFromLocalStorage() {
  // const notes = localStorage.getItem(ITEM_KEY);
  // if(notes){
  //   return JSON.parse(notes)
  // }
  // else{
  //   return []
  // }
  return JSON.parse(localStorage.getItem(ITEM_KEY)) || [];
}
createNotes(arr);
