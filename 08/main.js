var rightDiv = document.querySelector(".right")

console.log(rightDiv)

var salesInWeek = [
    {weekday: 'dom', total: 1},
    {weekday: 'seg', total: 3},
    {weekday: 'ter', total: 2},
    {weekday: 'qua', total: 4},
    {weekday: 'qui', total: 3},
    {weekday: 'sex', total: 3},
    {weekday: 'sab', total: 2}
]

salesInWeek.map((sale) => {
    rightDiv.innerHTML += 
    `
        <div class="weekday">
            <div class="graphic" style="height: ${sale.total * 4}rem">

            </div>
            <span>
                ${sale.weekday}
            </span>
        </div>
    `

    
})
