idade = prompt('Digite Sua Idade: ')
function calculadoraDias(idade) {
    var dias90 = 90*365;
    var diasRestantes = dias90 - (idade*365);
    return diasRestantes;
}
function calculadoraSemanas(idade) {
    var semanas90 = 90*52;
    var semanasRestantes = semanas90 - (idade*52);
    return semanasRestantes
}
function calculadoraMese(idade) {
    var meses90 = 90*12;
    var mesesRestantes = meses90 - (idade*12);
    return mesesRestantes
}
console.log("You have " + calculadoraDias(idade) + " days, " + calculadoraSemanas(idade) + " weeks, and " + calculadoraMese(idade) + " months left.")
