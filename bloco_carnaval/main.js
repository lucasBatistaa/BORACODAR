var cardsSection = document.querySelector("#cards")

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
    })
})