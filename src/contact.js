import chefImage from "./assets/images/mr-burger.png"

export default function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Information";

    const information = document.createElement("p");
    information.textContent = `
        If you have any questions or just want to chat about 
        burgers, feel free to reach out! Our friendly chef, 
        Mr. Burger, is always happy to chat.
    `;

    const img = document.createElement("img");
    img.src = chefImage;
    img.alt = "Mr. Burger";
    img.classList.add("chef-image");

    const address = document.createElement("p");
    address.innerHTML = "<strong>Visit Us:</strong><br>123 Burger Lane, Burger City";

    const phone = document.createElement("p");
    phone.innerHTML = "<strong>Call Us:</strong><br>(555) BURGER";
    
    const email = document.createElement("p");
    email.innerHTML = "<strong>Email Us:</strong><br>contact@mrburger.com";

    contact.appendChild(heading);
    contact.appendChild(img);
    contact.appendChild(information);
    contact.appendChild(address);
    contact.appendChild(phone);
    contact.appendChild(email);

    return contact;
}