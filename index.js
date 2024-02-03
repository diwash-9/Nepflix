let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}





/* let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');



toggleBtn.onclick = ()=>{
    themeToggler.classList.toggle('active');
    
}

window.onscroll = ()=>{
 
    themeToggler.classList.remove('active');

}


document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
btn.onclick = ()=>{
        let color= btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color', color);
    }
});
 */

  