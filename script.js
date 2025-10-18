function enviarWhats(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const mensagem = document.getElementById('mensagem').value;
            const telefone = '558791020731';

            // Corrigindo o texto e a URL do WhatsApp
            const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
            const textoFormatado = encodeURIComponent(texto);

            // URL correta do WhatsApp
            const url = `https://wa.me/${telefone}?text=${textoFormatado}`;

            window.open(url, '_blank');
        }