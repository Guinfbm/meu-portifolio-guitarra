function enviarWhats(event) {
    event.preventDefault(); // Corrige o nome da função e o uso correto

    const nome = document.getElementById('nome').value; // precisa pegar o valor do input
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '558791020731'; // DDI + DDD + número

    // Usa template string corretamente com crases
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msFormatada = encodeURIComponent(texto);

    // Fecha corretamente as aspas e usa interpolação com crases
    const url = `https://wame.me/${telefone}?text=${msFormatada}`;

    // Corrige o nome da aba e abre o link
    window.open(url, '_blank');
}
