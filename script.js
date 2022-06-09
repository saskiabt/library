
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
    openForm(); 

    document.querySelector("#list-item-5 > button.cancel-btn").addEventListener('click', () => { 
        closeForm();
        bookButton.style.visibility = "visible";
    });


    function openForm() { 
        document.getElementById('popup-form').style.display = "block"; 
    }
    function closeForm() { 
        document.getElementById('popup-form').style.display = "none"; 
    }
 
    // CODE TO CLOSE POPUP WHEN CLICK ANYWHERE OUTSIDE POPUP BOX // 
    // window.addEventListener('click', (event) => { 
    //     let modal = document.getElementById('popup-form');
    //     if (event.target == modal) {
    //         closeForm();
    //     }
    // })
});



      

   
