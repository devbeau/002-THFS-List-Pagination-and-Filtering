/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// Global variables that places student LI HTML objects into the array arrayStudents.

const listStudents = document.querySelector(".student-list");
const arrayStudents = listStudents.children;
let arrayNames = arrayStudents.children.children[2];

/*
for (i=0; i < arrayStudents.length;i += 1){
  let arrayNames = arrayStudents[i].childNodes

}*/

// Calls the functions that create the pagination, and set the initial display settings
// for the array of student LI elements.

document.addEventListener('DOMContentLoaded', () => {
  displayStudentsInit(arrayStudents);
  getPages(arrayStudents);
  createSearch();
});

// Sets the initial display property for the page

function displayStudentsInit(arrayStudents){
  for (i=0; i < arrayStudents.length; i +=1){
    thisStudent = arrayStudents[i];
    if (i < 10) {
          thisStudent.style.display='';} else {
          thisStudent.style.display='none';   
        }
  }
};

 // Creates the HTML elements for pagination at the bottom of the page

function getPages(listItems){
  const numPages = Math.floor(listItems.length / 10);
  const pageDiv = document.querySelector('div.page');
  const newDiv = document.createElement('div');
  const newUL = document.createElement('ul');
  newDiv.className = 'pagination';
  newUL.className = 'pagination';
  pageDiv.appendChild(newDiv);
  newDiv.appendChild(newUL);

  for (i = 0; i <= numPages; i+=1){
    createA();
    
  }
  // included a return for debugging
  return newUL.children;
};

/* Creates an anchor element within a LI element. Then alters the display
 property of the element based on its index within the students array
 and the selected page number. */

function createA(){
  const newLi = document.createElement('li');
  const newPage = document.createElement('a');
  const spanSpacer = document.createElement('span');
  newPage.innerHTML = i+1;
  newPage.setAttribute('href','#');
  spanSpacer.innerHTML = ' ';
  newLi.addEventListener('click', (e) => {
    displayStudents(e); 
  });
  document.querySelector('ul.pagination').appendChild(newLi)
    .appendChild(newPage);
  
};

/* Loops over the student array and sets the display property of the elements
 based on whether they belong on a certain page */

function displayStudents(e){
  const pageIndex = parseInt(e.target.innerHTML) - 1;
  for (i = 0; i < arrayStudents.length; i += 1){
     thisStudent = arrayStudents[i];
     
     if (i >= pageIndex * 10 && i < pageIndex * 10 + 10) {
        thisStudent.style.display='';} else {
        thisStudent.style.display='none';
     }
  }
  e.target.className = '.active';
};

function createSearch () {
  const header = document.querySelector('.page-header');
  
  const searchBar = document.createElement('input');
  const searchButton = document.createElement('button');
 
  searchButton.textContent = 'Search Students';
  searchButton.className = 'student-search';
  searchBar.type = 'text';
  searchBar.className = 'student-search';
  

  
  header.appendChild(searchButton);
  header.appendChild(searchBar);
}
/*
const SearchButton = document.querySelector('button.student-search');
SearchButton.addEventListener('submit', (document.querySelector('input.student-search').value) => {

});*/
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.