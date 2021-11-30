addEventListener('DOMContentLoaded', () => {
    const btn_menus = document.querySelector('.btn_menus')
    if (btn_menus){
        btn_menus.addEventListener('click',() =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})
