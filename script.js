// Função para copiar o link gerado para a área de transferência
function copiarLinkParaAreaDeTransferencia(link) {
    // Cria um elemento de input oculto
    const input = document.createElement("input");
    input.style.position = "fixed";
    input.style.opacity = 0;
    input.value = link;

    // Adiciona o elemento à página
    document.body.appendChild(input);

    // Seleciona o conteúdo do input
    input.select();
    input.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand("copy");

    // Remove o elemento de input
    document.body.removeChild(input);
}

// Função para gerar o link do WhatsApp com mensagem personalizada e copiá-lo
function gerarLinkWhatsApp() {
    const numero = document.getElementById("numero").value;
    const mensagem = document.getElementById("mensagem").value;
    const linkGerado = document.getElementById("linkGerado");

    if (numero) {
        // Formate o número removendo caracteres não numéricos
        const numeroFormatado = numero.replace(/\D/g, "");
        // Monte o link com a mensagem, incluindo nome e mensagem personalizada
        const link = `https://wa.me/${numeroFormatado}?text=${encodeURIComponent(mensagem)}`;

        // Copie o link para a área de transferência
        copiarLinkParaAreaDeTransferencia(link);

        alert("Link copiado para a área de transferência!");
    } else {
        alert("Por favor, insira um número de WhatsApp válido.");
    }
}

// Event listener para o botão "Gerar Link"
const gerarLinkButton = document.getElementById("gerarLink");
gerarLinkButton.addEventListener("click", gerarLinkWhatsApp);
