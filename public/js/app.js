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


