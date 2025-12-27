/** @format */

/*Listen for clicks anywhere on the page
Find all dropdowns
For each dropdown:
Check if the click was on its button
Check if the click was inside its menu
If button was clicked → toggle that menu
If click was somewhere else → close that menu */
document.addEventListener("click", (event) => {
  let alldropdowns = document.querySelectorAll(".dropdown");

  alldropdowns.forEach((dropdown) => {
    let button = dropdown.querySelector(".dropdownBtn");
    let menu = dropdown.querySelector(".dropdown-menu");

    let clickedInsideButton = button.contains(event.target);
    let clickedInisdeMenu = menu.contains(event.target);

    if (clickedInsideButton) {
      menu.classList.toggle("hidden");
    } else if (!clickedInisdeMenu) {
      menu.classList.add("hidden");
    }
  });
});
