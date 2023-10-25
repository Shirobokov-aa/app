document.addEventListener("DOMContentLoaded", () => {





    let xml = new XMLHttpRequest();
    console.log(xml);

    xml.open('GET', 'test.txt')
    xml.onreadystatechange = function(){
        console.log(xml.readyState);
        if(xml.readyState ===4){
            alert(xml.response);
        }
    }
    xml.send();












































    // let switchButtons = document.querySelectorAll(".swicth__item")
    // console.log(switchButtons);

    // switchButtons.forEach(switchButton =>{
    // switchButton.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     console.log(switchButton.dataset.value)
    //     setEvent(switchButton.dataset.value)
    // })
    // })

    // function setEvent(curEvent){
    //     switchButtons.forEach(switchButton => {
    //         switchButton.classList.remove("swicth__item--js-active");
    //     })
    //     let tabContents = document.querySelectorAll(".content");
    //     tabContents.forEach (tabContent =>{
    //         tabContent.classList.remove("js-active")
    //     })
    //     let switchButtonActive = document.querySelector(`[data-value="${curEvent}"]`)
    //     switchButtonActive.classList.add("swicth__item--js-active");

    //     let tabContentActive = document.querySelector(`[data-event="${curEvent}"]`)
    //     tabContentActive.classList.add("js-active");
    // }

    // var swiper = new Swiper(".photos__slider", {
    //   slidesPerView: 4,
    //   spaceBetween: 30,
    //   navigation: {
    //     nextEl: ".photos__arrow--right",
    //     prevEl: ".photos__arrow--left",
    //   }
    // });
})

