export default function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Goofy Burger!";

    const description = document.createElement("p");
    description.textContent = "The best goofy burgers in town!"

    home.appendChild(heading);
    home.appendChild(description);

    return home;
}