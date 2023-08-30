const ul = document.getElementsByTagName("ul")[0];
let participantes = getObjectLocalStorage("participantes");

if (participantes === null) {
    participantes = [];
    setObjectLocalStorage("paricipantes", participantes);
}

window.addEventListener("load", () => {
    for (let participante of participantes){
        ul.appendChild(createLi(participante.nome, participante.email))
    }
})

const handleSubmit = () => {
    const nome = document.getElementsByName("nome")[0];
    const email = document.getElementsByName("email")[0];
    const participante = {
        nome: nome.value,
        email: email.value        
    }
    nome.value = "";
    email.value = "";

    participantes.push(participante);
    setObjectLocalStorage("participantes", participantes);

    ul.appendChild(createLi(participante.nome, participante.faltas));
}

const createLi = (nome, email) => {
    const li = document.createElement("li");
    const section = document.createElement("section");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    section.appendChild(h1);
    section.appendChild(p);
    li.appendChild(section);

    h1.innerText = nome;
    p.innerText = email;

    return li;
}