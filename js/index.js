const btnMode = document.getElementById("btn_mode")
    , listContainer = document.getElementById("list_container")
    , crosswordContainer = document.getElementById("crossword_container")
    , listH2 = document.getElementById("page_list")
    , crosswordH2 = document.getElementById("page_crossword")
    , imgSwitch = document.getElementById("switch_title");

let i = 0;

function changeMode() {
    if (i == 0) {
        imgSwitch.style.transform = "rotate(360deg)";

        listContainer.style.display = "none";
        crosswordContainer.style.display = "flex";

        crosswordH2.style.transform = "translateX(-27.2vw)";
        listH2.style.transform = "translateX(27.2vw)";

        crosswordH2.classList.remove("now");
        crosswordH2.classList.add("now");
        i++
    } else {
        imgSwitch.style.transform = "rotate(0turn)";

        listContainer.style.display = "flex";
        crosswordContainer.style.display = "none";

        crosswordH2.style.transform = "translateX(0)";
        listH2.style.transform = "translateX(0)";

        crosswordH2.classList.add("now");
        crosswordH2.classList.remove("now");
        i = 0;
    }
}

function result(input) {
    var valor = input.value.toUpperCase();
    var id = input.id;

    if (valor == id) {
        input.value = `${input.value}`;
        input.style = `background-color: #5EE65E; color:black; border: 1px solid #FFF`;
    } else {
        input.style = `background-color: #FF3333; border: 1px solid #FFF`;
        input.value = ``;
    }
}

btnMode.addEventListener('click', changeMode);