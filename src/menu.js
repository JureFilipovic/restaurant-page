import burgerImg1 from "./assets/images/burger-1.png"
import burgerImg2 from "./assets/images/burger-2.png"
import burgerImg3 from "./assets/images/burger-3.png"
import friesImg from "./assets/images/fries.png"

export default function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const heading = document.createElement("h1");
    heading.textContent = "Menu:"

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid")
    const items = [
        { 
            name: "The Cheesy Chomp",
            desc: "A ridiculously cheesy burger that practically oozes with melted goodness.",
            img:  burgerImg1
        },
        { 
            name: "The Big Messy Boi", 
            desc: "A towering burger stacked with toppings, guaranteed to be a delicious disaster.",
            img: burgerImg2
         },
        { 
            name: "The Spicy Sizzle", 
            desc: "A fiery burger loaded with jalapeños, hot sauce, and a kick of madness.",
            img: burgerImg3 
        },
        { 
            name: "The Crunchy Bunch", 
            desc: "A wild gang of golden, crispy fries—so good they might just escape your plate!",
            img: friesImg
        }
    ]

    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-card");

        const img =document.createElement("img");
        img.src = item.img;
        img.alt = item.name;

        const name = document.createElement("h2");
        name.textContent = item.name;

        const desc = document.createElement("p");
        desc.textContent = item.desc;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(desc);
        menuGrid.appendChild(card);
    });

    menu.appendChild(heading);
    menu.appendChild(menuGrid);

    return menu;
}