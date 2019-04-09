/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

// Places student LI HTML objects into the array arrayStudents.

const listStudents = document.querySelector(".student-list");
let arrayStudents = listStudents.children;
const listStudentNames = document.querySelectorAll ('h3');

let resultsList = [];

getPages(arrayStudents);
initPage(arrayStudents);
createButton();
const searchForm = document.querySelector('form');
searchStudentNames();

function searchStudentNames(){
  
  searchForm.addEventListener('submit', (e) => {
   e.preventDefault();
   resultsList = [];
   let compareStudentNames = document.querySelector('input.searchbox').value.toUpperCase();
   console.log (compareStudentNames);
    for (i = 0; i < listStudentNames.length; i += 1){
      if (listStudentNames[i].textContent.toUpperCase().startsWith(compareStudentNames)){
        resultsList.push(arrayStudents[i]);
      }
  }
  clearPage(arrayStudents);
  getPages(resultsList);
  initPage(resultsList);
  });
  return resultsList;

}
/* 

  We should start with the pagination function,
and then use an event handler to take the integerization of the innerHTML
of each list element as an argument for the function
that determines the display element and hide the
li elements that are out of bounds for this last function.
*/

function clearPage (elementList){ 
  for (i=0; i < elementList.length; i +=1){
    const thisStudent = elementList[i];
      thisStudent.style.display='none';
      }
    }
  

function initPage(elementList){
for (i=0; i < elementList.length; i +=1){
  thisStudent = elementList[i];
  if (i < 10) {
        thisStudent.style.display='';} else {
        thisStudent.style.display='none';
     }
};
}

// need to create a elements within li within ul, so that an event listener can properly be attached to each  a element.

// Loops over the
function displayStudents(e, elementList){
  const pageIndex = parseInt(e.target.textContent) - 1;
  for (i = 0; i < elementList.length; i += 1){
     thisStudent = elementList[i];
     
     if (i >= pageIndex * 10 && i < pageIndex * 10 + 10) {
        thisStudent.style.display='';} else {
        thisStudent.style.display='none';
     }
  }
  e.target.className = '.active';
};

function createA(elementList){
  const newLi = document.createElement('li');
  const newPage = document.createElement('a');
  const spanSpacer = document.createElement('span');
  newPage.innerHTML = i+1;
  newPage.setAttribute('href','#');
  spanSpacer.innerHTML = ' ';
  newLi.addEventListener('click', (e) => {
    displayStudents(e, elementList); 
  });
  document.querySelector('ul.pagination').appendChild(newLi)
    .appendChild(newPage);
  
};

function getPages(elementList){
const numPages = Math.floor(elementList.length / 10);
const pageDiv = document.querySelector('div.page');
const newDiv = document.createElement('div');
const newUL = document.createElement('ul');
removeChild();
newDiv.className = 'pagination';
newUL.className = 'pagination';
pageDiv.appendChild(newDiv);
newDiv.appendChild(newUL);

for (i = 0; i <= numPages; i+=1){
  createA(elementList);
  
}

return newUL.children;
};


function createButton (){
  const newButton = document.createElement('input');
  const newInput = document.createElement('input');
  const newForm = document.createElement('form');
  const pageHeader = document.querySelector("div .page-header");
  newButton.type = "submit";
  newButton.textContent = "search";
  newInput.type = "text";
  newInput.className = 'searchbox';
  newForm.style.float = 'right';
  newForm.style.className = 'searchForm';
  pageHeader.appendChild(newForm);
  newForm.appendChild(newInput);
  newForm.appendChild(newButton);
}

function removeChild (){
  if(document.querySelector('div.pagination')){
  var parEl = document.querySelector("div.page");
  var childEl = document.querySelector('div.pagination');
      parEl.removeChild(childEl);
    }
}
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