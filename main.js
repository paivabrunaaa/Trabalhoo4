/* 
function bttsArms(button) {
    if (button.classList.contains("arm-desocupado")) {
        console.log('oi')
    }
} */

var oi = document.getElementById("imgTeste")

async function uso1(button) {
    const res = await fetch("data.json")
    const data = await res.json()
    if (button.classList.contains("arm-desocupado")) {
        button.classList.remove("arm-desocupado")
        button.classList.add("arm-ocupado")
        button.textContent = data.estado[0];
    }
    else if (button.classList.contains("arm-ocupado")) {
        button.classList.remove("arm-ocupado");
        button.classList.add("arm-manutencao");
        button.textContent = data.estado[1];
    }
    else {
        button.classList.remove("arm-manutencao");
        button.classList.add("arm-desocupado");
        button.textContent = data.estado[2];
    }
    var imgArm1 = document.getElementById("imgArm1")
    if (button.classList.contains("arm-desocupado")) {
        imgArm1.src = "src/imgs/arm-aberto (2).png"
    }
    else if (button.classList.contains("arm-ocupado")) {
        imgArm1.src = "src/imgs/arm-fechado (2).png"
    }
    else {
        imgArm1.src = "src/imgs/arm-manut (2).png"
    }
}
async function uso2(button) {
    const res = await fetch("data.json")
    const data = await res.json()
    if (button.classList.contains("arm-desocupado")) {
        button.classList.remove("arm-desocupado")
        button.classList.add("arm-ocupado")
        button.textContent = data.estado[0];
    }
    else if (button.classList.contains("arm-ocupado")) {
        button.classList.remove("arm-ocupado");
        button.classList.add("arm-manutencao");
        button.textContent = data.estado[1];
    }
    else {
        button.classList.remove("arm-manutencao");
        button.classList.add("arm-desocupado");
        button.textContent = data.estado[2];
    }
    var imgArm2 = document.getElementById("imgArm2")
    if (button.classList.contains("arm-desocupado")) {
        imgArm2.src = "src/imgs/arm-aberto (2).png"
    }
    else if (button.classList.contains("arm-ocupado")) {
        imgArm2.src = "src/imgs/arm-fechado (2).png"
    }
    else {
        imgArm2.src = "src/imgs/arm-manut (2).png"
    }
}
async function uso3(button) {
    const res = await fetch("data.json")
    const data = await res.json()
    if (button.classList.contains("arm-desocupado")) {
        button.classList.remove("arm-desocupado")
        button.classList.add("arm-ocupado")
        button.textContent = data.estado[0];
    }
    else if (button.classList.contains("arm-ocupado")) {
        button.classList.remove("arm-ocupado");
        button.classList.add("arm-manutencao");
        button.textContent = data.estado[1];
    }
    else {
        button.classList.remove("arm-manutencao");
        button.classList.add("arm-desocupado");
        button.textContent = data.estado[2];
    }
    var imgArm3 = document.getElementById("imgArm3")
    if (button.classList.contains("arm-desocupado")) {
        imgArm3.src = "src/imgs/arm-aberto (2).png"
    }
    else if (button.classList.contains("arm-ocupado")) {
        imgArm3.src = "src/imgs/arm-fechado (2).png"
    }
    else {
        imgArm3.src = "src/imgs/arm-manut (2).png"
    }
}
async function uso4(button) {
    const res = await fetch("data.json")
    const data = await res.json()
    if (button.classList.contains("arm-desocupado")) {
        button.classList.remove("arm-desocupado")
        button.classList.add("arm-ocupado")
        button.textContent = data.estado[0];
    }
    else if (button.classList.contains("arm-ocupado")) {
        button.classList.remove("arm-ocupado");
        button.classList.add("arm-manutencao");
        button.textContent = data.estado[1];
    }
    else {
        button.classList.remove("arm-manutencao");
        button.classList.add("arm-desocupado");
        button.textContent = data.estado[2];
    }
    var imgArm4 = document.getElementById("imgArm4")
    if (button.classList.contains("arm-desocupado")) {
        imgArm4.src = "src/imgs/arm-aberto (2).png"
    }
    else if (button.classList.contains("arm-ocupado")) {
        imgArm4.src = "src/imgs/arm-fechado (2).png"
    }
    else {
        imgArm4.src = "src/imgs/arm-manut (2).png"
    }
}
async function uso5(button) {
    const res = await fetch("data.json")
    const data = await res.json()
    if (button.classList.contains("arm-desocupado")) {
        button.classList.remove("arm-desocupado")
        button.classList.add("arm-ocupado")
        button.textContent = data.estado[0];
    }
    else if (button.classList.contains("arm-ocupado")) {
        button.classList.remove("arm-ocupado");
        button.classList.add("arm-manutencao");
        button.textContent = data.estado[1];
    }
    else {
        button.classList.remove("arm-manutencao");
        button.classList.add("arm-desocupado");
        button.textContent = data.estado[2];
    }
    var imgArm5 = document.getElementById("imgArm5")
    if (button.classList.contains("arm-desocupado")) {
        imgArm5.src = "src/imgs/arm-aberto (2).png"
    }
    else if (button.classList.contains("arm-ocupado")) {
        imgArm5.src = "src/imgs/arm-fechado (2).png"
    }
    else {
        imgArm5.src = "src/imgs/arm-manut (2).png"
    }
}
async function uso6(button) {
    const res = await fetch("data.json")
    const data = await res.json()
    if (button.classList.contains("arm-desocupado")) {
        button.classList.remove("arm-desocupado")
        button.classList.add("arm-ocupado")
        button.textContent = data.estado[0];
    }
    else if (button.classList.contains("arm-ocupado")) {
        button.classList.remove("arm-ocupado");
        button.classList.add("arm-manutencao");
        button.textContent = data.estado[1];
    }
    else {
        button.classList.remove("arm-manutencao");
        button.classList.add("arm-desocupado");
        button.textContent = data.estado[2];
    }
    var imgArm6 = document.getElementById("imgArm6")
    if (button.classList.contains("arm-desocupado")) {
        imgArm6.src = "src/imgs/arm-aberto (2).png"
    }
    else if (button.classList.contains("arm-ocupado")) {
        imgArm6.src = "src/imgs/arm-fechado (2).png"
    }
    else {
        imgArm6.src = "src/imgs/arm-manut (2).png"
    }
}