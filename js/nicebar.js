"use strict"; 
 
const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const itemColorsBody = ["#9999fb", "#ff8c00", "#f54888", "#4343f5", "#e0b115", "#65ddb7"];
const navsidebar = body.querySelector(".navsidebar");
const navsidebarItems = navsidebar.querySelectorAll(".navsidebar-item");
const navsidebarBorder = navsidebar.querySelector(".navsidebar-border");
const panelButton = navsidebar.querySelector(".lpanel_toggle");
let activeItem = navsidebar.querySelector(".active");

function clickItem(item, index) {
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    } 
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetnavsidebarBorder(activeItem, navsidebarBorder);
    setH1Color(body.querySelector(".hold-header"), bgColorsBody[index]);

}

function offsetnavsidebarBorder(element, navsidebarBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const top = Math.round(offsetActiveItem.top - navsidebar.offsetTop - (navsidebarBorder.offsetHeight  - offsetActiveItem.height) / 2) +  "px";
    navsidebarBorder.style.transform = `translate(0, ${top})`;

}

function toggleLeftPanel(lPanel) {
    lPanel.classList.toggle("show");
    for (const ItemShow of navsidebarItems) {
        ItemShow.classList.toggle("show");
    }
    navsidebar.querySelector(".navsidebar-border").classList.toggle("show");
}

function setH1Color (target, h1color) {
    target.querySelector("h1").style.color = h1color;
}

offsetnavsidebarBorder(activeItem, navsidebarBorder);
setH1Color(body.querySelector(".hold-header"), bgColorsBody[0]);
body.style.backgroundColor = bgColorsBody[0];


navsidebarItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItem(item, index));
});

panelButton.addEventListener("click", () => toggleLeftPanel(navsidebar.querySelector(".lpanel")));