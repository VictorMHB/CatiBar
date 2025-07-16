const appContent = document.getElementById('app-content');

const getHomePageContent = () => `
    <h1 class="text-3xl font-bebas mb-4">Bem-vindo ao Cativeiro Bar</h1>
    <p class="mb-6">Aqui você encontra a melhor experiência em bar, com música ao vivo, petiscos deliciosos e um ambiente único. Prepare-se para ser cativado!</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white shadow-md rounded p-4">
            <h2 class="text-xl font-bebas mb-2">Nossa História</h2>
            <p>Descubra como o Cativeiro Bar se tornou um ponto de encontro para amantes da boa música e gastronomia. Desde a nossa fundação, buscamos oferecer momentos inesquecíveis.</p>
        </div>
        <div class="bg-white shadow-md rounded p-4">
            <h2 class="text-xl font-bebas mb-2">Eventos Especiais</h2>
            <p>Fique por dentro da nossa agenda de eventos. De shows de rock a noites de samba, sempre temos algo especial para você. Não perca!</p>
        </div>
    </div>
`;

const getAgendaPageContent = () => `
    <h1 class="text-3xl font-bold mb-4">Agenda de Eventos</h1>
    <p class="mb-6">Confira os próximos shows e eventos do Cativeiro Bar!</p>
    <div class="bg-white shadow-md rounded p-4 mb-4">
        <h2 class="text-xl font-semibold mb-2">Sexta da Boa - Banda X</h2>
        <p>Data: 01/08/2025 - Horário: 21:00</p>
        <p>Descrição: Noite de rock clássico com a Banda X. Venha curtir os maiores sucessos!</p>
    </div>
    <div class="bg-white shadow-md rounded p-4 mb-4">
        <h2 class="text-xl font-semibold mb-2">Sábado do Samba - Roda de Samba Y</h2>
        <p>Data: 02/08/2025 - Horário: 20:00</p>
        <p>Descrição: A melhor roda de samba da cidade com o grupo Y. Traga seus amigos e venha sambar!</p>
    </div>
    <div class="bg-white shadow-md rounded p-4">
        <h2 class="text-xl font-semibold mb-2">Domingo Acústico - Voz e Violão Z</h2>
        <p>Data: 03/08/2025 - Horário: 19:00</p>
        <p>Descrição: Um fim de tarde relaxante com o melhor do MPB e pop acústico.</p>
    </div>
`;

const getCardapioPageContent = () => `
    <h1 class="text-3xl font-bold mb-4">Nosso Cardápio</h1>
    <p class="mb-6">Delícias para acompanhar sua noite e refrescar sua garganta.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white shadow-md rounded p-4">
            <h2 class="text-xl font-semibold mb-2">Cervejas Artesanais</h2>
            <ul class="list-disc pl-5 space-y-1">
                <li>IPA Cativeiro (500ml) - R$25,00</li>
                <li>Weiss da Casa (500ml) - R$22,00</li>
                <li>Pilsen Premium (600ml) - R$18,00</li>
            </ul>
        </div>
        <div class="bg-white shadow-md rounded p-4">
            <h2 class="text-xl font-semibold mb-2">Petiscos</h2>
            <ul class="list-disc pl-5 space-y-1">
                <li>Batata Frita com Cheddar e Bacon - R$35,00</li>
                <li>Iscas de Frango Crocantes - R$40,00</li>
                <li>Porção de Calabresa Acebolada - R$38,00</li>
            </ul>
        </div>
        <div class="bg-white shadow-md rounded p-4">
            <h2 class="text-xl font-semibold mb-2">Drinks Especiais</h2>
            <ul class="list-disc pl-5 space-y-1">
                <li>Mojito Cativeiro - R$30,00</li>
                <li>Caipirinha de Frutas Vermelhas - R$28,00</li>
            </ul>
        </div>
    </div>
`;

const getQuemSomosPageContent = () => `
    <h1 class="text-3xl font-bold mb-4">Quem Somos</h1>
    <p class="mb-6">A história do Cativeiro Bar e nossa paixão por música, boa comida e momentos inesquecíveis.</p>
    <div class="bg-white shadow-md rounded p-4">
        <p class="mb-4">Fundado em 2020, o Cativeiro Bar nasceu do sonho de criar um espaço único na cidade, onde a boa música se encontra com a gastronomia de qualidade e um ambiente acolhedor. Nossa missão é proporcionar experiências memoráveis, seja em um show vibrante, um happy hour descontraído ou um jantar especial.</p>
        <p>Nossa equipe é apaixonada pelo que faz e trabalha incansavelmente para garantir que cada visita ao Cativeiro Bar seja perfeita. Venha nos conhecer e faça parte da nossa história!</p>
    </div>
`;

const getContatoPageContent = () => `
    <h1 class="text-3xl font-bold mb-4">Entre em Contato</h1>
    <p class="mb-6">Fale conosco! Estamos sempre prontos para te atender.</p>
    <div class="bg-white shadow-md rounded p-4">
        <p class="mb-2"><strong>Telefone:</strong> (XX) XXXX-XXXX</p>
        <p class="mb-2"><strong>Email:</strong> contato@cativeirobar.com</p>
        <p class="mb-4"><strong>Endereço:</strong> Rua Fictícia, 123 - Centro, Cidade - Estado</p>
        <p>Siga-nos nas redes sociais para ficar por dentro das novidades!</p>
        <div class="flex space-x-4 mt-4">
            <a href="#" class="text-blue-600 hover:text-blue-800">Facebook</a>
            <a href="#" class="text-pink-600 hover:text-pink-800">Instagram</a>
        </div>
    </div>
`;

const routes = {
    '#home': getHomePageContent,
    '#agenda': getAgendaPageContent,
    '#cardapio': getCardapioPageContent,
    '#quem-somos': getQuemSomosPageContent,
    '#contato': getContatoPageContent,
    '': getHomePageContent
};

const renderContent = () => {
    const hash = window.location.hash || '';
    
    const contentFunction = routes[hash] || routes[''];

    if (appContent) {
        appContent.innerHTML = contentFunction();
    } else {
        console.error("Elemento com ID 'app-content' não encontrado no HTML.");
    }
};

// --- Event Listeners ---
// Estes ouvintes garantem que a função 'renderContent' seja chamada nos momentos certos.

// 1. Quando o DOM (estrutura HTML) estiver completamente carregado.
// Isso garante que 'appContent' já exista antes de tentarmos acessá-lo.
document.addEventListener('DOMContentLoaded', renderContent);

// 2. Quando a hash da URL muda (ex: o usuário clica em um link de navegação ou usa o botão Voltar/Avançar do navegador).
window.addEventListener('hashchange', renderContent);

// Opcional: Adicionar um log para saber se o script está sendo executado
console.log("main.js carregado.");
