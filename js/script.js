let pages = document.querySelectorAll('#page-content > div')
let mainNavbar = document.getElementById('nav-main').getElementsByTagName('a')

for(let navItem of mainNavbar) {
    navItem.addEventListener("click", function() {
        for(let sibling of mainNavbar) {
            sibling.classList.remove("active")
        }
        this.classList.add("active")

        for (let page of pages) {
            page.classList.add('visually-hidden')
        }
        let pageId = this.parentNode.id.replace('nav-','')
        let page = document.getElementById(pageId)
        page.classList.remove('visually-hidden')
    }
)
}