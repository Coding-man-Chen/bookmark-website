const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

const handleTabClick = (e) => {
    tabs.forEach(tab => {
        tab.children[0].classList.remove('border-b-4','border-softRed')
    })
    panels.forEach(panel => {
        panel.classList.add('hidden')
    })
    e.target.classList.add('border-b-4','border-softRed')
    const panelKey = e.target.getAttribute('data-target')
    document.getElementsByClassName(panelKey)[0].classList.remove('hidden')
}

tabs.forEach(tab => {
    tab.addEventListener('click', handleTabClick)
});