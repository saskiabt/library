
// global variables 
let myLibrary = []; 


// creates book object 
function Book(title,author,pages,review,isRead) {
    // the constructor
    this.title = `Title: ${title}`;
    this.author = `Author: ${author}`; 
    this.pages = `Page Count: ${pages}`; 
    this.review = `My Rating: ${review}/5 Stars`; 
    this.isRead = isRead; 
}

Book.prototype.info = function() {
    if (isRead === true) { 
        return `${title} by ${author}, ${pages} pages, already read. `;
    } else {
        return `${title} by ${author}, ${pages} pages, not read yet `;
    }
}


function addBookToLibrary() { 
    const title = document.querySelector("#title").value; 
    console.log(title);
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


    console.log(rating);

    const newBook = new Book(title,author,pageCount,rating,finishedCheck)
    console.log(newBook); 
    myLibrary.push(newBook); 
}

// display form on click of create book button
const bookButton = document.getElementById("create-book-button"); 
bookButton.addEventListener('click', () => {
    openForm(); 

    document.querySelector("#cancel-btn").addEventListener('click', () => { 
        closeForm();
        bookButton.style.visibility = "visible";
        bookButton.style.padding = "10px";
    });
});

//  functions to open and close the form; 

function openForm() { 
    document.getElementById('popup-form').style.display = "block"; 
    bookButton.style.visibility = "hidden"; 
    bookButton.style.padding = "0px";
}
function closeForm() { 
    document.getElementById('popup-form').style.display = "none"; 
    bookButton.style.visibility = "visible";
    bookButton.style.padding = "10px";
}

function clearForm() { 

}
   

// Save inputs when submit button is pressed 
const submitButton = document.querySelector("#submit-btn"); 
submitButton.addEventListener('click', () => {
   addBookToLibrary(); 
   console.log(myLibrary); 
   closeForm();
   displayBooks(); 
}); 

// function to create div with book information 
function displayBooks() { 
    const libraryWrapper = document.querySelector("#library-wrapper"); 

    while(libraryWrapper.firstChild) { // remove all children in libraryWrapper before re-populating it with new cards
        libraryWrapper.removeChild(libraryWrapper.firstChild)
    }

    for(let i=0; i<myLibrary.length; i++) { 
        const card = document.createElement('div'); 
        card.classList.add('card'); 
        libraryWrapper.appendChild(card); 

        let ul = document.createElement('ul')
        card.appendChild(ul); 

        let title= createListItem(myLibrary[i].title); 
        ul.appendChild(title); 

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
    }
}


// creates <li>text</li> element
function createListItem(text) { 
    let li = document.createElement('li'); 
    li.classList.add("card-info");
    li.textContent = text
    return li;
}

      

   
