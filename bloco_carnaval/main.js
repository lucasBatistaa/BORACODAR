var cardsSection = document.querySelector("#cards")
var buttonMap = document.querySelector("#button-map")
var buttonList = document.querySelector("#button-list")
var locationOptionsDiv = document.querySelector("#location")

fetch("settings.json").then((response) => {
    response.json().then((data) => {
        data.blocks.map((block) => {
            cards.innerHTML += 
            `
            <div class="card">
                <img src=${block.image} alt="imagem">
        
                <div class="card-info">
                    <h3>${block.name}</h3>
                    <p>${block.description}</p>
                    <div class="location">
                        <i class="ph-map-pin"></i>
                        <p>${block.location}</p>
                    </div>
                </div>
                
            </div>
            `
        })

        data.options.map((option, i) => {
            if (i == 0) {
                locationOptionsDiv.innerHTML += 
                `<option value=${i} selected>${option}</option>`
            } else {
                locationOptionsDiv.innerHTML += 
                `<option value=${i}>${option}</option>`
            }    
        })
    })
})

function toggleClassesButtons() {
    buttonMap.classList.toggle('secondary')
    buttonMap.classList.toggle('primary')
    buttonList.classList.toggle('secondary')
    buttonList.classList.toggle('primary')
}

function showMap() {
    if (buttonMap.classList.contains('secondary')) {
        toggleClassesButtons()
    }
}

function showList() {
    if (buttonList.classList.contains('secondary')) {
        toggleClassesButtons()
    }
}