const sidebar = document.querySelector(".sidebar")
const sidebarToggler = document.querySelector(".sidebar-toggler")

//Toggle sidebar's collapse state
sidebarToggler.addEventListener("click", () => {
sidebar.classList.toggle("collapsed")
})