function theme()
{
    document.body.classList.toggle("dark-theme");
    (localStorage.getItem("theme") === "dark") ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark");
}

let prevScrollpos = window.scrollY;
window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    (prevScrollpos >= currentScrollPos) ? document.getElementById("Menu").style.top = "0" : document.getElementById("Menu").style.top = "-90px";
    prevScrollpos = currentScrollPos;
}

if (localStorage.getItem("theme") === "dark") document.body.classList.toggle("dark-theme");

/* ----- ----- ----- ----- ----- */

function obterDataAtualFormatada() {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    let mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    let dia = dataAtual.getDate().toString().padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
}

// async function fetchData(url) {

//     const card = document.createElement('div');
//     const response = await fetch(url);
//     const data = await response.json();

//     card.innerHTML =
//         `<div class="card">
//             <h3>Data: ${data[0].data}</h3>
//             <p>Qtd. de Pessoas: ${data[0].qtd_homens + data[0].qtd_mulheres + data[0].qtd_criancas}</p>
//             <p>Carne (KG): ${data[0].carne_kg}</p>
//             <p>Pão de Alho: ${data[0].pao_de_alho}</p>
//             <p>Carvão (KG): ${data[0].carvao_kg}</p>
//             <p>Refri (L): ${data[0].refri_l}</p>
//             <p>Cerveja (L): ${data[0].cerveja_l}</p>
//         </div>
//         `;
//     document.getElementById('Teste').appendChild(card);
// }

async function fetchListaChurrascos() {
    try {
        const response = await fetch('http://localhost:3000/churrascos');
        const churrascos = await response.json();
        const tbody = document.getElementById('churrascoData');
        churrascos.forEach(churrasco => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${churrasco.data}</td>
                <td>${churrasco.qtd_homens + churrasco.qtd_mulheres + churrasco.qtd_criancas}</td>
                <td>${churrasco.carne_kg}</td>
                <td>${churrasco.pao_de_alho}</td>
                <td>${churrasco.carvao_kg}</td>
                <td>${churrasco.refri_l}</td>
                <td>${churrasco.cerveja_l}</td>
                <td class="table-actions">
                    <button class="edit material-symbols-outlined" onclick="editChurrasco('${churrasco.id}')">edit</button>
                    <button class="delete material-symbols-outlined" onclick="deleteChurrasco('${churrasco.id}')">delete</button>
                </td>`;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

fetchListaChurrascos()

async function novoChurrasco() {
    let qtdCriancas = document.getElementById("qtdCriancas");
    let qtdHomens = document.getElementById("qtdHomens");
    let qtdMulheres = document.getElementById("qtdMulheres");
        const novoChurrasco = {
            data: obterDataAtualFormatada(),
            qtd_homens: Number(qtdHomens.value),
            qtd_mulheres: Number(qtdMulheres.value),
            qtd_criancas: Number(qtdCriancas.value),
            carne_kg: Number(qtdHomens.value) * 0.4 + Number(qtdMulheres.value) * 0.32 + Number(qtdCriancas.value) * 0.2,
            pao_de_alho: Number(qtdHomens.value) * 2 + Number(qtdMulheres.value) * 2 + Number(qtdCriancas.value) * 1,
            carvao_kg: Number(qtdHomens.value) * 1 + Number(qtdMulheres.value) * 1 + Number(qtdCriancas.value) * 1,
            refri_l: ((Number(qtdHomens.value) + Number(qtdMulheres.value) + Number(qtdCriancas.value)) < 5) ? 2 : Math.ceil(((Number(qtdHomens.value) + Number(qtdMulheres.value) + Number(qtdCriancas.value))/5)),
            cerveja_l: (Number(qtdHomens.value) * 3 + Number(qtdMulheres.value) * 3 + Number(qtdCriancas.value) * 0) * 0.6 
        }
    
        await fetch('http://localhost:3000/churrascos/', {
            method: 'POST',
            body: JSON.stringify(novoChurrasco)
        });
    
        window.location.href = "../index.html";
}

// fetchData("http://localhost:3000/churrascos");

async function deleteChurrasco(id) {
    try {
        await fetch(`http://localhost:3000/churrascos/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Erro ao deletar churrasco:', error);
    }
}