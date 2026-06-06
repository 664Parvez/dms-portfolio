const visit_btn = document.querySelectorAll(".visit_btn")
const hover_link = document.querySelectorAll('.hover_link')

visit_btn.forEach((items, visitIndex) => {
    items.addEventListener("mouseover", (e) => {
        hover_link.forEach((items, linkIndex) => {
            if (visitIndex === linkIndex) {
                
            } 
        })
        e.preventDefault()
    })
    items.addEventListener("mouseleave", () => {
        hover_link.forEach((items, linkIndex) => {
            if (visitIndex === linkIndex) {
                
            }
        })
    })
})


document.addEventListener("DOMContentLoaded", function () {
  // Only apply hover logic if screen is wider than mobile viewports
  if (window.innerWidth >= 992) {
    
    // Select all dropdown containers
    const dropdowns = document.querySelectorAll('.navbar .nav-item.dropdown');

    dropdowns.forEach(dropdown => {
      const menu = dropdown.querySelector('.dropdown-menu');
      
      dropdown.addEventListener('mouseenter', function () {
        dropdown.classList.add('show');
        menu.classList.add('show');
      });

      dropdown.addEventListener('mouseleave', function () {
        dropdown.classList.add('show');
        menu.classList.remove('show');
      });
    });
  }
});

