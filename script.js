
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

// CLEAR THE POPUP FORM  
function clearForm () { 
    const title = document.querySelector("#title")
    title.value = '';
    title.classList.remove('form-error')

    const author = document.querySelector("#author")
    author.value = '';
    author.classList.remove('form-error')


    const pages = document.querySelector("#pages")
    pages.value = '';
    title.classList.remove('form-error')


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
    this.author = `by ${author}`; 
    this.pages = `${pages} Pages`; 
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

        const title = document.createElement('div'); 
        card.appendChild(title); 
        title.classList.add('book-title'); 
        title.textContent = myLibrary[i].title; 

        const bookInfo = document.createElement('div'); 
        card.appendChild(bookInfo); 
        bookInfo.classList.add('book-info'); 
        
            let ul = document.createElement('ul')
            bookInfo.appendChild(ul); 

            let author = createListItem(myLibrary[i].author)
            ul.appendChild(author); 

            let pages = createListItem(myLibrary[i].pages)
            ul.appendChild(pages); 

            let rating = createListItem(myLibrary[i].review)
            ul.appendChild(rating); 
            

        
        const readWrapper = document.createElement('div'); 
        card.appendChild(readWrapper); 
        readWrapper.className = "read-wrapper"; 

        const readText = document.createElement('div'); 
        readWrapper.appendChild(readText); 
        readText.textContent = "Read?"

        const rBtn = document.createElement('button'); 
        readWrapper.appendChild(rBtn); 
        rBtn.classList.add("read-button"); 

        if (myLibrary[i].isRead == true) { 
            rBtn.textContent = "✓"
            card.classList.toggle('active')
        } else {
            rBtn.textContent = ""
        }

        rBtn.addEventListener('click', () => { 
            card.classList.toggle('active');
            
            if (rBtn.textContent == '') { 
                rBtn.textContent = "✓"
            } else {
                rBtn.textContent = ''
            }
        })
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
submitButton.addEventListener('click', (event) => {
    if (checkForm(document.querySelector("#title")) == false || checkForm(document.querySelector("#author")) == false) { 
        event.preventDefault()
    } else { 
        submitCard();
        clearForm();
    }


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


// check text input of form for blanks 
function checkForm(elem) { 
    let isValid
    if (elem.value === '') { 
        elem.classList.add('form-error'); 
        elem.setAttribute('placeholder', "Please enter informaton before proceeding")
        isValid = false;
    } else { 
        elem.classList.remove('form-error')
        isValid = true
    }

    return isValid; 
}






