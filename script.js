// function book(title,author,pages,isRead) { 
//     this.title = title;
//     this.author = author; 
//     this.pages = pages; 
//     this.isRead = isRead; 

//     this.info = function() {
//         if (isRead === true) { 
//             return `${title} by ${author}, ${pages} pages, already read. `;
//         } else {
//             return `${title} by ${author}, ${pages} pages, not read yet `;
//         }
//     }
// }

// const theHobbit = new book('The Hobbit', "JRR Tolkien", "295", false); 

// console.log(theHobbit.info()); 


let myLibrary = []; 

function Book(title,author,pages,isRead) {
    // the constructor
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.isRead = isRead; 
}

Book.prototype.info = function() {
    if (isRead === true) { 
        return `${title} by ${author}, ${pages} pages, already read. `;
    } else {
        return `${title} by ${author}, ${pages} pages, not read yet `;
    }
}


function addBookToLibrary(book) { 

}

// display form on click of create book button
const bookButton = document.getElementById("create-book-button"); 
bookButton.addEventListener('click', () => {
    bookButton.style.visibility = "hidden"; 

    let form = document.createElement('form'); 
        let formBox = document.getElementById('form-box');
        formBox.appendChild(form); 
    
        form.setAttribute('method', "post"); 
        form.setAttribute('action', 'submit.php'); 
   
    // create inputs on the form
    let title = document.createElement('input'); 
    form.append(title); 
    title.setAttribute('type', "text"); 
    title.setAttribute('id', "title"); 
    
    const titleLabel = document.createElement('label'); 
    titleLabel.setAttribute('for', "title"); 
    titleLabel.innerHTML = "Title:"



    let author = document.createElement('input'); 
    form.append(author); 

    let pages = document.createElement('input'); 
    form.append(pages); 

    let isRead = document.createElement('input'); 
    form.append(isRead); 





})

