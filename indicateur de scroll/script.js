let scrollIndicator = document.querySelector('.scroll-indicator')
let content = document.querySelector('article p')
let count = 0;

window.addEventListener('scroll', ()=>{
    if (window.scrollY > content.offsetTop) {
        let percentage = ((window.scrollY - content.offsetTop) / (content.scrollHeight) * 100 ).toFixed(2)
        console.log(percentage);
        scrollIndicator.style.transform = `scaleX(${percentage / 100}) `
    } else {
        scrollIndicator.style.transform = `scale(0) `
    }
})