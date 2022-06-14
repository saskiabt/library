
// GLOBAL VARIABLES 
let myLibrary = []; 
const formWrapper = document.querySelector(".popup-form-wrapper"); 
const formContainer = document.querySelector('#form-container'); 

// display form on click of create book button
const bookButton = document.getElementById("create-book-button"); 
bookButton.addEventListener('click', () => {
    if (formWrapper.style.display = "none") {
        openForm();
        
    }

    document.querySelector("#cancel-btn").addEventListener('click', () => { 
        closeForm();
        let blur = document.querySelector('.blur'); 
        if (blur.classList.contains('active') == true) {
            toggleBlur();
        }
        clearForm();
    });
});

// Open and close the form functions: 
function openForm() { 
    toggleBlur();
    formWrapper.style.display = "block"; 
    // formWrapper.style.zIndex = "1"

    bookButton.style.visibility = "hidden"; 
    bookButton.style.padding = "0px";
}
function closeForm() { 
    formWrapper.style.display = "none"; 
    // formWrapper.style.zIndex = "-1"
    bookButton.style.visibility = "visible";
    bookButton.style.padding = "10px";
    toggleBlur();
    
}

function clearForm () { 
    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#pages").value = '';
    document.querySelector("#finished").checked = false;
    document.querySelector("#not-finished").checked = false;
    document.querySelector("#\\31 star").checked = false
    document.querySelector("#\\32 star").checked = false; 
    document.querySelector("#\\33 star").checked = false; 
    document.querySelector("#\\34 star").checked = false; 
    document.querySelector("#\\35 star").checked = false; 
}


// Create book object function: 
function Book(title,author,pages,review,isRead) {
    // the constructor
    this.title = `${title}`;
    this.author = `Author: ${author}`; 
    this.pages = `Page Count: ${pages}`; 
    this.review = `My Rating: ${review}/5 Stars`; 
    this.isRead = isRead; 
}

// Add book to myLibrary Array Function
function addBookToLibrary() { 
    const title = document.querySelector("#title").value; 
    const author = document.querySelector("#author").value;
    const pageCount = document.querySelector("#pages").value;

    let finishedCheck; 
    if (document.querySelector("#finished").checked == true) {
        finishedCheck = true;
    } else if (document.querySelector("#not-finished").checked == true) { 
        finishedCheck = false
    }

    let rating = 0; 
    let radios = document.getElementsByName("user-review"); 
    for (let radio of radios) { 
        if (radio.checked) {
            rating = radio.value;
        } 
    }
    // if (title.value == '') { 
    //     title.classList.add('error'); 
    //     return; 
    // } else if (author.value = '') { 
    //     author.classList.add('error')
    //     return; 
    // } else if (pageCount.value = '') { 
    //     pageCount.classList.add('error'); 
    //     return;
    // } else {
        const newBook = new Book(title,author,pageCount,rating,finishedCheck)
        myLibrary.push(newBook); 

}


// Function to display "card" with book
function displayBooks() { 
    const libraryWrapper = document.querySelector("#library-wrapper"); 

    while(libraryWrapper.firstChild) { // remove all children in libraryWrapper before re-populating it with new cards
        libraryWrapper.removeChild(libraryWrapper.firstChild)
    }

    for(let i=0; i<myLibrary.length; i++) { 

        const card = document.createElement('div'); 
        card.classList.add('card'); 
        libraryWrapper.appendChild(card); 

        const front = document.createElement('div'); 
        card.appendChild(front); 
        front.classList.add('front'); 
        front.textContent = myLibrary[i].title; 

        const back = document.createElement('div'); 
        card.appendChild(back); 
        back.classList.add('back'); 
        
            let ul = document.createElement('ul')
            back.appendChild(ul); 

            let author = createListItem(myLibrary[i].author)
            ul.appendChild(author); 

            let pages = createListItem(myLibrary[i].pages)
            ul.appendChild(pages); 

            let rating = createListItem(myLibrary[i].review)
            ul.appendChild(rating); 

            let isRead = document.createElement('li'); 
            ul.appendChild(isRead);
            if (myLibrary[i].isRead == true) { 
                isRead.textContent = "Finished"
            } else {
                isRead.textContent = "Not Finished"
            }
        const rBtn = document.createElement('button'); 
        back.appendChild(rBtn); 
        rBtn.classList.add("read-button"); 
    }

    // creates <li>text</li> element
    function createListItem(text) { 
        let li = document.createElement('li'); 
        li.classList.add("card-info");
        li.textContent = text
        return li;
    }
}

// Save inputs and create new book card with book info when submit button is pressed: 
const submitButton = document.querySelector("#submit-btn"); 
submitButton.addEventListener('click', () => {

   submitCard(); 
    clearForm(); 

   function submitCard() { 
        addBookToLibrary(); 
        console.log(myLibrary); 
        closeForm();
        displayBooks(); 
    }
}); 

function toggleBlur() { 
    let blur = document.querySelector('.blur'); 
    blur.classList.toggle('active')
}

// handler function for checking if 'checkbox' input element has been checked ; first set ele to checked and then run function to either clear or check boxes 
function onClickHeader(ele) {
    var checkboxes = document.getElementsByTagName('input');
    if (ele.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
}