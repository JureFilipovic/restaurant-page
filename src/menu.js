export default function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const heading = document.createElement("h1");
    heading.textContent = "Menu:"

    const menuList = document.createElement("ul");
    const items = [
        { name: "The Cheesy Chomp", desc: "A ridiculously cheesy burger that practically oozes with melted goodness." },
        { name: "The Big Messy Boi", desc: "A towering burger stacked with toppings, guaranteed to be a delicious disaster." },
        { name: "The Spicy Sizzle", desc: "A fiery burger loaded with jalapeños, hot sauce, and a kick of madness." },
        { name: "The Crunchy Bunch", desc: "A wild gang of golden, crispy fries—so good they might just escape your plate!"}
    ]

    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${item.name}</strong> - ${item.desc}`;
        menuList.appendChild(li);
    });

    menu.appendChild(heading);
    menu.appendChild(menuList);

    return menu;
}