

window.onload = function() {
     const contactsBlock = document.querySelector(".my-contacts");
     const closeContactsButton = document.querySelector(".my-contacts__button");
     const openContactsButton = document.querySelector(".my-contacts__button-show");

     const  showContactsBlock = () => {
        contactsBlock.classList.add("_show-block");
     };
     const  closeContactsBlock = () => {
        contactsBlock.classList.remove("_show-block");
     };
     const actionsContactsBlock = e => {
         if(e.target.closest(".my-contacts__button"))  {
            closeContactsBlock()
         }

         if(e.target.closest(".my-contacts__button-show"))  {
            showContactsBlock();
         }
     }
     setTimeout(showContactsBlock, 4000);
     contactsBlock.addEventListener("click", actionsContactsBlock);


}