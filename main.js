

var countries = [
    {country: "Lietuva", area: 65300, population: 2795680},
    {country: "Latvija", area: 64589 , population: 1907675},
    {country: "Estija", area: 45339, population: 1328439},
    {country: "Kroatija", area: 56594, population: 3888529},
    {country: "Sveicarija", area: 41285, population: 8570146},
]

for(var x of countries){
    var average = (x.area * 1000000) / x.population
    var popl = x.population / 1000000
    console.log(`Šalis: ${x.country}, joje gyvena: ${popl.toFixed(2)} mln. gyventojų. Valstybės plotas: ${x.area} km², plotas tenkantis vienam gyventojui: ${average.toFixed(2)} m² `)
    console.log("=================")
}