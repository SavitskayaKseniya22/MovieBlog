

/*   поиск
let search = document.querySelector("#search");
let searchButton = document.querySelector("#search button");
let searchInput = document.querySelector("#search input");
searchInput.addEventListener("blur", function () {
    searchInput.value = "";
})
searchButton.addEventListener("click", function (evt) {
    if (!searchInput.value) {
        evt.preventDefault()
    }
})

*/

/*  перелистывание карусели*/
let ul = document.querySelector("#topStories ul")

let arrow1 = document.querySelector("#pinkArrowRigth")
arrow1.addEventListener("click", function () {
    let list = document.querySelectorAll("#topStories li")
    let li = list[0];
    list[0].remove();
    li.style.marginRight = "5px";
    li.style.marginLeft = "0";
    ul.append(li)

})

let arrow2 = document.querySelector("#blueArrowLeft ")
arrow2.addEventListener("click", function () {
    let list = document.querySelectorAll("#topStories li")
    let li = list[list.length - 1];
    list[list.length - 1].remove();
    li.style.marginRight = "5px";
    li.style.marginLeft = "0";

    ul.prepend(li)
})








/*  средний блок боковая панель выбор вкладки в первой секции*/
let topStoriesPrewNavs = document.querySelectorAll("#topStoriesPrew nav li");
let topStoriesPrewNav = document.querySelector("#topStoriesPrew nav");

let topStoriesPrewArt = document.querySelectorAll("#topStoriesPrew > ul");

topStoriesPrewNav.addEventListener("click", function (event) {
    if (event.target.tagName == "LI") {
        for (let i = 0; i < topStoriesPrewNavs.length; i++) {
            topStoriesPrewNavs[i].classList.remove("navActiv")
        }
        event.target.classList.add("navActiv");


        let j = (Array.from(topStoriesPrewNavs).indexOf(event.target))
        for (let i = 0; i < topStoriesPrewArt.length; i++) {
            topStoriesPrewArt[i].setAttribute('hidden', 'true')
        }
        topStoriesPrewArt[j].removeAttribute('hidden')
    }
}
)
/* смена превью в галерее */
let galeryOfNews = document.querySelector("#galeryOfNews")
galeryOfNews.addEventListener('click', function (event) {
    event.preventDefault();
    let bigPic = document.querySelector('#galeryOfNews li:first-child img');
    if (event.target.hasAttribute('src') && event.target.previousSibling.tagName == "A") {
        bigPic.setAttribute('src', event.target.previousSibling.getAttribute('href'));
    }
});

/* показ панели комментов */
let showComments = document.querySelector("#showComments");
let additionPanel = document.querySelector("#additionPanel");
let mainNewsFooter = document.querySelector("#mainNews footer")
let allNews = document.querySelector("#mainNews h1 a");
showComments.addEventListener("click", function (event) {
    additionPanel.toggleAttribute('hidden');


})
allNews.addEventListener("click", function (event) {
    event.preventDefault()
    additionPanel.toggleAttribute('hidden');


})
/* скрыть панель ком-тов если нет ком-тов */

let list = document.querySelectorAll("#allComm li");
let allComm = document.querySelector("#allComm");
window.onload = function () {
    if (list.length == 0) {
        allComm.setAttribute('hidden', 'true')
    };
}

/* вставка шаблона */
let sendComm = document.querySelector("#sendComm");
let wholeList = document.querySelector("#allComm ul")
sendComm.addEventListener("click", function (event) {
    event.preventDefault();
    let input = document.querySelector("#writeComm input:first-child");
    let textarea = document.querySelector("#writeComm textarea");
    if (input.value.length < 3) {
        input.style.border = "1px solid red";
    } else (input.style.border = "1px solid #bfbfbf")


    if (textarea.value.length < 10) {
        textarea.style.border = "1px solid red";
    } else (textarea.style.border = "1px solid #bfbfbf")


    if (input.value.length >= 3 && textarea.value.length >= 10) {
        input.style.border = "1px solid #bfbfbf";
        textarea.style.border = "1px solid #bfbfbf";

        allComm.removeAttribute('hidden')

        let elem = document.createElement('li');
        elem.classList.add("comment");
        elem.append(tmpl.content.cloneNode(true));


        let span = elem.querySelector("span");
        span.innerHTML = new Date();

        let title = elem.querySelector("h3");

        title.innerHTML = `${input.value} said:`;
        input.value = "";

        let text = elem.querySelector("p");

        text.innerHTML = `"${textarea.value}"`;
        textarea.value = "";
        wholeList.append(elem);


    }

    /* показ кол-ва комментов */
    let comments = document.querySelectorAll("#allComm li")
    showComments.innerHTML = "Comments: " + comments.length;
})





/* кнопка гамб */
let navigation = document.querySelector("#navigation");
let openMenu = document.querySelector("#openMenu");
openMenu.addEventListener("click", function (event) {
    event.preventDefault();
    navigation.classList.toggle("isOpen")

})