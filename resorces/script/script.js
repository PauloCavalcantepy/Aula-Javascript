let n1 = Number(prompt("Digite a 1° nota!"))
let n2 = Number(prompt("Digite a 2° nota!"))
let n3 = Number(prompt("Digite a 3° nota!"))
let n4 = Number(prompt("Digite a 4° nota!"))

log = resultado = (n1 + n2 + n3 + n4) / 4;
if (resultado >=7){
    alert("Sua media foi "+resultado +" logo você está Aprovado!!!");
}
else{
    alert("Sua media foi " +resultado +" logo está reprovado!!!");
}

// Verificação de idade

let idade = 21

if(idade >= 18){
    alert("Você é maior de idade")
}
else{
    alert("Você é menor de idade")
}