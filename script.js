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
    openForm(); 

    document.querySelector("#popup-form > form > ul > button.cancel-btn").addEventListener('click', () => { 
        closeForm();
        bookButton.style.visibility = "visible";
    });
});

function openForm() { 
    document.getElementById('popup-form').style.display = "block"; 
}

function closeForm() { 
    document.getElementById('popup-form').style.display = "none"; 
}
    // let form = document.createElement('form'); 
    //     let formBox = document.getElementById('form-box');
    //     formBox.appendChild(form); 
    //     form.setAttribute('method', "post"); 
    //     form.setAttribute('action', 'submit.php'); 

    //     function createForm(name) { 
    //         const bullet = document.createElement('ul'); 
    //         form.appendChild(bullet)
    //         const label = document.createElement('label'); 
    //         label.setAttribute('for', `${name}`)
    //         label.innerHTML = `${name}`; 
    //         bullet.appendChild(label); 
        
    //         let input = document.createElement('input'); 
    //         bullet.appendChild(input); 
    //         input.setAttribute('type', 'text'); 
    //         input.setAttribute('id', `${name}`); 
    //         input.setAttribute('name', `${name}`); 
    //     }
        
    //     createForm('Title');
    //     createForm('Author'); 
    //     createForm('Pages');
    //     createForm('isRead');
    //         document.querySelector("#isRead").setAttribute('type', "checkbox"); 
    //         document.querySelector("#form-box > form > ul:nth-child(4) > label").innerHTML = 'Have you already read this book?'

        
    //     formBox.appendChild(document.createElement('ul')); 


      

   
