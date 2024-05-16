// function changeMenuColor() {
//     let menuItems = document.querySelectorAll(".menu-item");
//     let scrollValue = window.scrollY;
    
//     menuItems.forEach(item => {
//         if (scrollValue > 670) {
//             item.style.backgroundColor = "#000000";
//         } else {
//             item.style.backgroundColor = "#ffffff";
//         }
//     });

//     function resetMenuColor() {
//         let menuItems = document.querySelectorAll(".menu-item");
        
//         menuItems.forEach(item => {
//                 item.style.backgroundColor = "";       
//         });
//     }
// }

// window.addEventListener("scroll", changeMenuColor);


// if (window.matchMedia("(max-width: 768px)").matches) {
//     resetMenuColor();
// }

function changeMenuColor() {
    let menuItems = document.querySelectorAll(".menu-item");
    let scrollValue = window.scrollY;
    let media = window.matchMedia("(min-width: 768px)")
    menuItems.forEach(item => {
        if (scrollValue > 540 & media.matches) {
            item.style.backgroundColor = "#000000";
        } else if (media.matches){
            item.style.backgroundColor = "#ffffff";
        }
    });
}

window.addEventListener("scroll", changeMenuColor);

// Assuming you have a media query for a specific condition
