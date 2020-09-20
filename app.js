//Contact Class:Represent Contact data
class Contact{
    constructor(name,phone,mail){
        this.name = name;
        this.phone = phone;
        this.mail = mail;
    }
}
//UI class:Handle UI events
class UI{
    static displayContacts(){
        const storageContact = [
            {
                name:"John",
                phone:"8657635410",
                mail:"test@gmail.com"
        
            },
            {
                name:"Doe",
                phone:"9856745620",
                mail:"check@gmail.com"
        
            }
        ];

        const contacts = storageContact;
        contacts.forEach((contact) => UI.addContactData(contact));
    }

    static addContactData(contact){
        let list = document.querySelector('#contact-list');
        let row = document.createElement('tr');
        row.innerHTML=`<td>${contact.name}</td>
        <td>${contact.phone}</td>
        <td>${contact.mail}</td>
        <td><i class="fas fa-times-circle delete"></i></td>`

        list.appendChild(row);
    }

    static deleteContact(el){
     if(el.classList.contains('delete')){
         el.parentElement.parentElement.remove();
     }
    }

    static showAlert(message,className){

        var div = document.createElement('div');
        div.classList = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        var container = document.querySelector('.container');
        var form = document.querySelector('#contactform');
        container.insertBefore(div,form);

        setTimeout(()=>document.querySelector('.alert').remove(),3000);
    }

    static clearFields(){
        document.querySelector('#name').value = " ";
        document.querySelector('#phone').value = " ";
        document.querySelector('#mail').value = " ";
    }
}



//Storage:Handle Storage


//Event:Display Contact
document.addEventListener('DOMContentLoaded',UI.displayContacts);

document.querySelector('#contactform').addEventListener('submit',(e)=>{

    e.preventDefault();
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    let mail = document.querySelector('#mail').value;
    if(name === '' || phone === '' || mail === ' '){
      UI.showAlert('Please fill out the form','info');
    }else{
        let newContact = new Contact(name,phone,mail);

        UI.addContactData(newContact);
        UI.showAlert("New Contact List added",'success');
    
        UI.clearFields();
        
    }
   

});
//Event:Add Contact List



//Event:Remove Contact List

document.querySelector('#contact-list').addEventListener('click',(e) =>
{
UI.deleteContact(e.target);
UI.showAlert('Contact Deleted','danger');

});