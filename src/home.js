import chefImage from "./assets/images/mr-burger.png"

export default function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Goofy Burger! - Where Flavor meets fun";

    const description1 = document.createElement("p");
    description1.textContent = `
        At Goofy Burger, we're not just flipping burgers; we're crafting delicious, 
        mouthwatering masterpieces with a side of humor! Our burgers are packed with 
        bold flavors, quirky toppings, and a healthy dose of fun. Whether you're in the 
        mood for a classic cheeseburger or something a little more adventurous, we've 
        got something that'll tickle your taste buds and leave you laughing.
    `;
    const description2 = document.createElement("p");
    description2.textContent = `
        Our chefs take pride in using only the freshest ingredients to create every burger 
        with love, care, and a sprinkle of goofiness. From the perfectly toasted buns to 
        the juiciest patties, each bite is a celebration of flavor and fun. Pair your burger 
        with our crispy fries, zesty sauces, and refreshing drinks to complete the ultimate 
        goofy meal!
    `;
    const description3 = document.createElement("p");
    description3.textContent = `
        Come for the burgers, stay for the laughs - Goofy Burger is more than just a place 
        to eat; it's a place to enjoy, relax, and experience the best of what we do. Whether 
        you're here for a casual meal with friends, a family outing, or a solo burger binge, 
        we guarantee a fun and unforgettable time.
    `;
    const description4 = document.createElement("p");
    description4.textContent = `
        So, what are you waiting for? Come on down to Goofy Burger, where the burgers are 
        goofy and the fun never stops!
    `;
    const img = document.createElement("img");
    img.src = chefImage;
    img.alt = "Mr Burger"

    home.appendChild(heading);
    home.appendChild(img);
    home.appendChild(description1);
    home.appendChild(description2);
    home.appendChild(description3);
    home.appendChild(description4);

    return home;
}