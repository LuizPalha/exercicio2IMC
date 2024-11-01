class pessoa{
    nome
    peso
    altura
constructor(nome,peso,altura){
    this.nome=nome
    this.peso=peso
    this.altura=altura
}
calcularImc(){
return (this.peso/(this.altura * this.altura))
}
}

let luiz = new pessoa ("Luiz" ,68, 1.65)
console.log (luiz)
console.log ("O IMC de " + luiz.nome + " e: " + luiz.calcularImc().toFixed(2))
