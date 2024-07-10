const visor = document.querySelector(".texto")
const numeros = document.querySelectorAll(".num")
const operadores = document.querySelectorAll(".operador")
const apagar = document.querySelector("#apagar")
const limpar = document.querySelector("#limpar")
const igual = document.querySelector("#igual")
const trocarSinal = document.querySelector("#trocarSinal")
let num

function realizarOperacao(){
   num = visor.value.split(' ')
    switch (num[1]){
        case "+":
            visor.value = +num[0] + +num[2]
            break
        case "-":
            visor.value = +num[0] - +num[2]
            break
        case "x":
            visor.value = +num[0] * +num[2]
            break
        default:  
            if (+num[2] === 0)
                window.alert("Nao e possivel dividir por zero")
            else      
                visor.value = +num[0] / +num[2]
    }
}

numeros.forEach(num => num.addEventListener("click", (e) =>{
    if (!(visor.value.slice(visor.value.length - 1) === "." && e.target.textContent === "."))
        visor.value += e.target.textContent
}))

operadores.forEach(op => op.addEventListener("click", (e) => {
    
    if (visor.value.split(" ").length === 3)
        realizarOperacao()
    visor.value += ` ${e.target.textContent} `
}))

apagar.addEventListener("click", () => {
    if (visor.value.slice(visor.value.length - 1) === " ")
        visor.value = visor.value.slice(0, -2)
    visor.value = visor.value.slice(0, -1)
})

limpar.addEventListener("click", () => {
    visor.value = ""
})

igual.addEventListener("click", () => {
    if (visor.value.split(" ").length === 3)
        realizarOperacao()
})

trocarSinal.addEventListener("click", () => {
    num = visor.value.split(" ")
    if (num[num.length - 1] != ''){
        num[num.length - 1] = +num[num.length -1] < 0 ? `${Math.abs(+num[num.length - 1])}` :
         `-${num[num.length - 1]}`
        visor.value = num.join(" ")
    }
})