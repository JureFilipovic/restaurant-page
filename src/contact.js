export default function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Information";

    const information = document.createElement("p");
    information.textContent = "Some contact info bla bla bla!";

    contact.appendChild(heading);
    contact.appendChild(information);

    return contact;
}