function theme()
{
    document.body.classList.toggle("dark-theme");
    (localStorage.getItem("theme") === "dark") ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark");
}

if (localStorage.getItem("theme") === "dark") document.body.classList.toggle("dark-theme");

let prevScrollpos = window.scrollY;
window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    (prevScrollpos >= currentScrollPos) ? document.getElementById("Menu").style.top = "0" : document.getElementById("Menu").style.top = "-90px";
    prevScrollpos = currentScrollPos;
}

if (localStorage.getItem("theme") === "dark") document.body.classList.toggle("dark-theme");

/* ----- ----- ----- ----- ----- */

function obterDataAtualFormatada() {
    let dataAtual = new Date();
    let ano = dataAtual.getFullYear();
    let mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    let dia = dataAtual.getDate().toString().padStart(2, '0');

    return `${dia}-${mes}-${ano}`;
}

/* ----- ----- Funções Churrasco: ----- ----- */

function calcularChurrasco() {
    let qtdCriancasElement  = document.getElementById("qtd_Criancas");
    let qtdMulheresElement  = document.getElementById("qtd_Mulheres");
    let qtdHomensElement    = document.getElementById("qtd_Homens");

    let qtd_criancas  = Number(qtdCriancasElement.value);
    let qtd_mulheres  = Number(qtdMulheresElement.value);
    let qtd_homens    = Number(qtdHomensElement.value);

    let qtd_pessoas   = qtd_homens + qtd_mulheres + qtd_criancas;

    if (qtd_pessoas == 0) return false;

    const dadosChurrasco = {
        data:           obterDataAtualFormatada(),
        qtd_homens:     qtd_homens,
        qtd_mulheres:   qtd_mulheres,
        qtd_criancas:   qtd_criancas,
        carne_kg:       (qtd_homens * 0.4 + qtd_mulheres * 0.32 + qtd_criancas * 0.2).toFixed(1).replace(".", ","),
        carvao_kg:      (qtd_homens * 1 + qtd_mulheres * 1 + qtd_criancas * 1),
        pao_de_alho:    (qtd_homens * 2 + qtd_mulheres * 2 + qtd_criancas * 1),
        refri_l:        (qtd_pessoas <= 5) ? 2 : Math.ceil(qtd_pessoas / 5),
        cerveja_l:      ((qtd_homens * 3 + qtd_mulheres * 3 + qtd_criancas * 0) * 0.6).toFixed(1).replace(".", ",") 
        }
    
    return dadosChurrasco;
}

async function criarChurrasco() {

    if (calcularChurrasco() == false) return;

    try {
        await fetch('http://localhost:3000/churrascos/', {
            method: 'POST',
            body: JSON.stringify(calcularChurrasco())
        });
        window.location.href = "../index.html";
    } catch (error) {
        console.warn('Erro ao subir dados para à API.');
        console.error('Erro ao subir dados para à API:', error);
    }
}

async function deletarChurrasco(id) {
    try {
        await fetch(`http://localhost:3000/churrascos/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.warn('Erro ao deletar churrasco.')
        console.error('Erro ao deletar churrasco:', error);
    }
}

async function atualizarChurrasco(id) {
    
    if (calcularChurrasco() == false) return;

   try {
        await fetch(`http://localhost:3000/churrascos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(calcularChurrasco())
        });
   } catch (error) {
        console.warn('Erro ao buscar dados do churrasco, por favor verifique se à ID solicitada esta correta.')
        console.error('Erro ao buscar dados do churrasco', error);
   }
}
