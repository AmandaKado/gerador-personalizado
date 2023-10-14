
function copiarLinkParaAreaDeTransferencia(link) {

    const input = document.createElement("input");
    input.style.position = "fixed";
    input.style.opacity = 0;
    input.value = link;

    
    document.body.appendChild(input);

    
    input.select();
    input.setSelectionRange(0, 99999); // Para dispositivos móveis

    document.execCommand("copy");

    
    document.body.removeChild(input);
}

function gerarLinkWhatsApp() {
    const numero = document.getElementById("numero").value;
    const mensagem = document.getElementById("mensagem").value;
    const linkGerado = document.getElementById("linkGerado");

    if (numero) {
        // Formate o número removendo caracteres não numéricos
        const numeroFormatado = numero.replace(/\D/g, "");
       
        const link = `https://wa.me/${numeroFormatado}?text=${encodeURIComponent(mensagem)}`;

        // Copie o link para a área de transferência
        copiarLinkParaAreaDeTransferencia(link);

        alert("Link copiado para a área de transferência!");
    } else {
        alert("Por favor, insira um número de WhatsApp válido.");
    }
}

const gerarLinkButton = document.getElementById("gerarLink");
gerarLinkButton.addEventListener("click", gerarLinkWhatsApp);
