// Garante a execução do código após o carregamento do HTML
document.addEventListener("DOMContentLoaded", () => {
    console.log("Conectado ao AgroVerde 2026!");

    // Inicialização das funções dinâmicas
    inicializarFormulario();
    adicionarEfeitoCards();
    criarSimuladorEconomia();
});

/**
 * 1. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
 * Captura o envio do formulário e valida os dados de forma interativa.
 */
function inicializarFormulario() {
    const formulario = document.getElementById("contact-form");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault(); // Impede a página de recarregar

            // Captura os inputs baseados na ordem do seu HTML
            const nome = formulario.querySelector("input[type='text']").value.trim();
            const email = formulario.querySelector("input[type='email']").value.trim();
            const mensagem = formulario.querySelector("textarea").value.trim();

            if (nome === "" || email === "") {
                alert("Por favor, preencha os campos obrigatórios de Nome e E-mail.");
                return;
            }

            // Feedback visual de sucesso
            alert(`Obrigado pelo contato, ${nome}! Nossa equipe do AgroVerde responderá em breve no e-mail: ${email}.`);
            formulario.reset(); // Limpa o formulário
        });
    }
}

/**
 * 2. INTERATIVIDADE NOS CARDS DE ENERGIA
 * Adiciona um efeito dinâmico quando o usuário passa o mouse sobre os cards de energia.
 */
function adicionarEfeitoCards() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease";
            card.style.boxShadow = "0 8px 16px rgba(0, 128, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });
}

/**
 * 3. BÔNUS: SIMULADOR DE ECONOMIA VERDE
 * Um pequeno cálculo dinâmico para mostrar o impacto da energia solar no campo.
 */
function criarSimuladorEconomia() {
    // Procura a seção de sustentabilidade para injetar o simulador
    const secaoSustentabilidade = document.getElementById("sustentabilidade");

    if (secaoSustentabilidade) {
        // Criando a estrutura do simulador dinamicamente via JS
        const containerSimulador = document.createElement("div");
        containerSimulador.className = "simulador-box";
        containerSimulador.style.marginTop = "20px";
        containerSimulador.style.padding = "15px";
        containerSimulador.style.border = "1px solid #2e7d32";
        containerSimulador.style.borderRadius = "8px";

        containerSimulador.innerHTML = `
            <h3>Simulador AgroVerde: Economia com Energia Solar</h3>
            <p>Insira o gasto mensal estimado da sua fazenda com energia elétrica (R$):</p>
            <input type="number" id="gasto-energia" placeholder="Ex: 1500" style="padding: 8px; margin-right: 10px;">
            <button id="btn-calcular" class="btn" style="padding: 8px 15px;">Calcular Economia</button>
            <div id="resultado-simulacao" style="margin-top: 15px; font-weight: bold; color: #2e7d32;"></div>
        `;

        secaoSustentabilidade.appendChild(containerSimulador);

        // Lógica do cálculo do botão
        document.getElementById("btn-calcular").addEventListener("click", () => {
            const gasto = parseFloat(document.getElementById("gasto-energia").value);
            const resultadoDiv = document.getElementById("resultado-simulacao");

            if (isNaN(gasto) || gasto <= 0) {
                resultadoDiv.textContent = "Por favor, digite um valor válido.";
                return;
            }

            // Estimativa média de 90% de economia com painéis solares no campo
            const economiaMensal = gasto * 0.9;
            const economiaAnual = economiaMensal * 12;

            resultadoDiv.innerHTML = `
                <p>Com energia solar, sua fazenda pode economizar cerca de **R$ ${economiaMensal.toFixed(2)}** por mês!</p>
                <p>Isso representa uma economia anual de **R$ ${economiaAnual.toFixed(2)}** para reinvestir na sua produção.</p>
            `;
        });
    }
}