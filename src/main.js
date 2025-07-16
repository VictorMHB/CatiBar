const appContent = document.getElementById('app-content');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// App initialization
function initializeApp() {
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Render initial content
    renderContent();
    
    // Add event listeners
    window.addEventListener('hashchange', renderContent);
}

// Mobile menu functionality
function initializeMobileMenu() {
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('translate-y-0');
            if (isOpen) {
                mobileMenu.classList.remove('translate-y-0');
                mobileMenu.classList.add('-translate-y-full');
            } else {
                mobileMenu.classList.remove('-translate-y-full');
                mobileMenu.classList.add('translate-y-0');
            }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-y-0');
                mobileMenu.classList.add('-translate-y-full');
            });
        });
    }
}

// Enhanced page content functions with modern design
const getHomePageContent = () => `
    <div class="max-w-6xl mx-auto px-4">
        <!-- Hero Section -->
        <section class="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center mb-12 md:mb-16 overflow-hidden">
            <div class="absolute inset-0 rock-pattern"></div>
            <div class="relative z-10 text-center fade-in">
                <h1 class="text-4xl md:text-5xl lg:text-7xl font-bebas mb-4 md:mb-6 gradient-text text-glow">
                    Bem-vindo ao <span class="music-note">🎸</span> Cativeiro Bar
                </h1>
                <p class="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                    A melhor experiência em bar de rock da cidade. Música ao vivo, petiscos deliciosos e um ambiente único que vai te cativar!
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center px-4">
                    <a href="#agenda" class="btn-rock px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg">
                        Ver Agenda
                    </a>
                    <a href="#cardapio" class="btn-rock px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg">
                        Ver Cardápio
                    </a>
                </div>
            </div>
        </section>

        <!-- Features Grid -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20 slide-in-left">
                <div class="text-3xl md:text-4xl mb-4">🎵</div>
                <h2 class="text-xl md:text-2xl font-bebas mb-4 text-red-400">Música ao Vivo</h2>
                <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                    Shows incríveis todas as semanas. Do rock clássico ao metal, passando pelo blues e samba. 
                    Sempre com as melhores bandas da região.
                </p>
            </div>
            <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20 slide-in-right">
                <div class="text-3xl md:text-4xl mb-4">🍺</div>
                <h2 class="text-xl md:text-2xl font-bebas mb-4 text-red-400">Cervejas Artesanais</h2>
                <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                    Nossa seleção exclusiva de cervejas artesanais, incluindo a famosa IPA Cativeiro, 
                    produzida especialmente para nós.
                </p>
            </div>
            <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20 slide-in-left">
                <div class="text-3xl md:text-4xl mb-4">🍖</div>
                <h2 class="text-xl md:text-2xl font-bebas mb-4 text-red-400">Petiscos Especiais</h2>
                <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                    Cardápio variado com os melhores petiscos para acompanhar sua cerveja. 
                    Desde batatas fritas até pratos mais elaborados.
                </p>
            </div>
            <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20 slide-in-right">
                <div class="text-3xl md:text-4xl mb-4">🎉</div>
                <h2 class="text-xl md:text-2xl font-bebas mb-4 text-red-400">Eventos Especiais</h2>
                <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                    Festas temáticas, aniversários da casa e eventos exclusivos. 
                    Sempre algo novo e emocionante acontecendo no Cativeiro.
                </p>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="text-center mb-12 md:mb-16">
            <div class="bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-xl p-6 md:p-8 border border-red-600/30">
                <h2 class="text-2xl md:text-3xl font-bebas mb-4 text-red-400">Próximo Evento</h2>
                <p class="text-lg md:text-xl mb-4 md:mb-6 text-gray-300">Sexta da Boa - Banda X</p>
                <p class="text-base md:text-lg mb-6 md:mb-8 text-gray-400">01/08/2025 às 21:00</p>
                <a href="#agenda" class="btn-rock px-6 py-3 rounded-lg font-bold">
                    Ver Agenda Completa
                </a>
            </div>
        </section>
    </div>
`;

const getAgendaPageContent = () => `
    <div class="max-w-6xl mx-auto px-4">
        <!-- Header -->
        <section class="text-center mb-8 md:mb-12 fade-in">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bebas mb-4 md:mb-6 gradient-text">Agenda de Eventos</h1>
            <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Confira os próximos shows e eventos do Cativeiro Bar. Garanta sua mesa e venha curtir!
            </p>
        </section>

        <!-- Events Grid -->
        <section class="space-y-6 md:space-y-8">
            <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20 slide-in-up">
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div class="flex-1">
                        <div class="flex items-center mb-4">
                            <span class="text-2xl md:text-3xl mr-4">🎸</span>
                            <h2 class="text-xl md:text-2xl font-bebas text-red-400">Sexta da Boa - Banda X</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-gray-300 text-sm md:text-base">
                            <div><strong>📅 Data:</strong> 01/08/2025</div>
                            <div><strong>🕒 Horário:</strong> 21:00</div>
                            <div><strong>🎫 Entrada:</strong> R$ 15,00</div>
                        </div>
                        <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                            Noite de rock clássico com a Banda X. Venha curtir os maiores sucessos do rock nacional e internacional!
                        </p>
                    </div>
                    <div class="mt-4 md:mt-0 md:ml-6">
                        <button class="btn-rock px-6 py-3 rounded-lg font-bold">
                            Reservar
                        </button>
                    </div>
                </div>
            </div>

            <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20 slide-in-up">
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div class="flex-1">
                        <div class="flex items-center mb-4">
                            <span class="text-2xl md:text-3xl mr-4">🎵</span>
                            <h2 class="text-xl md:text-2xl font-bebas text-red-400">Sábado do Samba - Roda de Samba Y</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-gray-300 text-sm md:text-base">
                            <div><strong>📅 Data:</strong> 02/08/2025</div>
                            <div><strong>🕒 Horário:</strong> 20:00</div>
                            <div><strong>🎫 Entrada:</strong> R$ 20,00</div>
                        </div>
                        <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                            A melhor roda de samba da cidade com o grupo Y. Traga seus amigos e venha sambar ao som dos clássicos!
                        </p>
                    </div>
                    <div class="mt-4 md:mt-0 md:ml-6">
                        <button class="btn-rock px-6 py-3 rounded-lg font-bold">
                            Reservar
                        </button>
                    </div>
                </div>
            </div>

            <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20 slide-in-up">
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div class="flex-1">
                        <div class="flex items-center mb-4">
                            <span class="text-2xl md:text-3xl mr-4">🎤</span>
                            <h2 class="text-xl md:text-2xl font-bebas text-red-400">Domingo Acústico - Voz e Violão Z</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-gray-300 text-sm md:text-base">
                            <div><strong>📅 Data:</strong> 03/08/2025</div>
                            <div><strong>🕒 Horário:</strong> 19:00</div>
                            <div><strong>🎫 Entrada:</strong> R$ 10,00</div>
                        </div>
                        <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                            Um fim de tarde relaxante com o melhor do MPB e pop acústico. Perfeito para fechar o final de semana.
                        </p>
                    </div>
                    <div class="mt-4 md:mt-0 md:ml-6">
                        <button class="btn-rock px-6 py-3 rounded-lg font-bold">
                            Reservar
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter -->
        <section class="mt-12 md:mt-16 text-center">
            <div class="bg-gray-800/30 rounded-xl p-6 md:p-8 border border-red-600/20">
                <h3 class="text-xl md:text-2xl font-bebas mb-4 text-red-400">Fique por dentro!</h3>
                <p class="text-gray-300 mb-6 text-sm md:text-base">Receba notificações sobre novos eventos e promoções especiais.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input type="email" placeholder="Seu email" class="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500">
                    <button class="btn-rock px-6 py-3 rounded-lg font-bold">
                        Inscrever
                    </button>
                </div>
            </div>
        </section>
    </div>
`;

const getCardapioPageContent = () => `
    <div class="max-w-6xl mx-auto px-4">
        <!-- Header -->
        <section class="text-center mb-8 md:mb-12 fade-in">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bebas mb-4 md:mb-6 gradient-text">Nosso Cardápio</h1>
            <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Delícias para acompanhar sua noite e refrescar sua garganta. Sabores únicos que combinam perfeitamente com a música.
            </p>
        </section>

        <!-- Porções Section -->
        <section class="mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl font-bebas text-center mb-8 md:mb-12 gradient-text">🍖 Porções</h2>
            
            <!-- Porções Normais -->
            <div class="mb-8 md:mb-12 slide-in-left">
                <h3 class="text-xl md:text-2xl font-bebas text-red-400 mb-6 text-center">Porções Normais</h3>
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 max-w-3xl mx-auto">
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-left text-gray-200 border-separate border-spacing-y-2">
                      <thead>
                        <tr>
                          <th class="py-2 px-4 bg-gray-900/80 text-red-400 rounded-l-lg">Item</th>
                          <th class="py-2 px-4 bg-gray-900/80 text-red-400">450g</th>
                          <th class="py-2 px-4 bg-gray-900/80 text-red-400 rounded-r-lg">225g</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-gray-700/60">
                          <td class="py-2 px-4 rounded-l-lg">Anéis de Cebola</td><td class="py-2 px-4">R$ 30,00</td><td class="py-2 px-4 rounded-r-lg">R$ 16,00</td>
                        </tr>
                        <tr class="bg-gray-800/60">
                          <td class="py-2 px-4 rounded-l-lg">Batata Frita</td><td class="py-2 px-4">R$ 22,00</td><td class="py-2 px-4 rounded-r-lg">R$ 12,00</td>
                        </tr>
                        <tr class="bg-gray-700/60">
                          <td class="py-2 px-4 rounded-l-lg">Batata Frita com Queijo e Bacon</td><td class="py-2 px-4">R$ 30,00</td><td class="py-2 px-4 rounded-r-lg">R$ 16,00</td>
                        </tr>
                        <tr class="bg-gray-800/60">
                          <td class="py-2 px-4 rounded-l-lg">Calabresa Acebolada</td><td class="py-2 px-4">R$ 28,00</td><td class="py-2 px-4 rounded-r-lg">R$ 15,00</td>
                        </tr>
                        <tr class="bg-gray-700/60">
                          <td class="py-2 px-4 rounded-l-lg">Isca de Frango</td><td class="py-2 px-4">R$ 28,00</td><td class="py-2 px-4 rounded-r-lg">R$ 15,00</td>
                        </tr>
                        <tr class="bg-gray-800/60">
                          <td class="py-2 px-4 rounded-l-lg">Mandioca Frita</td><td class="py-2 px-4">R$ 26,00</td><td class="py-2 px-4 rounded-r-lg">R$ 14,00</td>
                        </tr>
                        <tr class="bg-gray-700/60">
                          <td class="py-2 px-4 rounded-l-lg">Panceta</td><td class="py-2 px-4">R$ 25,00</td><td class="py-2 px-4 rounded-r-lg">R$ 14,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>

            <!-- Porções Especiais -->
            <div class="mb-8 md:mb-12 slide-in-up">
                <h3 class="text-xl md:text-2xl font-bebas text-red-400 mb-6 text-center">Porções Especiais</h3>
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 max-w-3xl mx-auto">
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-left text-gray-200 border-separate border-spacing-y-2">
                      <thead>
                        <tr>
                          <th class="py-2 px-4 bg-gray-900/80 text-red-400 rounded-l-lg">Item</th>
                          <th class="py-2 px-4 bg-gray-900/80 text-red-400 rounded-r-lg">Preço</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-gray-700/60">
                          <td class="py-2 px-4 rounded-l-lg">Alcatra Acebolada (450g)</td><td class="py-2 px-4 rounded-r-lg">R$ 55,00</td>
                        </tr>
                        <tr class="bg-gray-800/60">
                          <td class="py-2 px-4 rounded-l-lg">Alcatra Acebolada com Queijo (450g)</td><td class="py-2 px-4 rounded-r-lg">R$ 65,00</td>
                        </tr>
                        <tr class="bg-gray-700/60">
                          <td class="py-2 px-4 rounded-l-lg">Alcatra, Batata Frita e Mandioca Frita (750g)</td><td class="py-2 px-4 rounded-r-lg">R$ 70,00</td>
                        </tr>
                        <tr class="bg-gray-800/60">
                          <td class="py-2 px-4 rounded-l-lg">Bolinho de Mandioca com Carne Seca (8 unid.)</td><td class="py-2 px-4 rounded-r-lg">R$ 30,00</td>
                        </tr>
                        <tr class="bg-gray-700/60">
                          <td class="py-2 px-4 rounded-l-lg">Bolinho de Mandioca com Queijo (8 unid.)</td><td class="py-2 px-4 rounded-r-lg">R$ 30,00</td>
                        </tr>
                        <tr class="bg-gray-800/60">
                          <td class="py-2 px-4 rounded-l-lg">Esfirra de Carne (6 unid.)</td><td class="py-2 px-4 rounded-r-lg">R$ 30,00</td>
                        </tr>
                        <tr class="bg-gray-700/60">
                          <td class="py-2 px-4 rounded-l-lg">Esfirra de Queijo (6 unid.)</td><td class="py-2 px-4 rounded-r-lg">R$ 30,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>

            <!-- Porções Individuais -->
            <div class="slide-in-right">
                <h3 class="text-xl md:text-2xl font-bebas text-red-400 mb-6 text-center">Porções Individuais</h3>
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 max-w-md mx-auto">
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-left text-gray-200 border-separate border-spacing-y-2">
                      <thead>
                        <tr>
                          <th class="py-2 px-4 bg-gray-900/80 text-red-400 rounded-l-lg">Item</th>
                          <th class="py-2 px-4 bg-gray-900/80 text-red-400 rounded-r-lg">Preço</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-gray-700/60">
                          <td class="py-2 px-4 rounded-l-lg">Esfirra de Carne (1 unidade)</td><td class="py-2 px-4 rounded-r-lg">R$ 10,00</td>
                        </tr>
                        <tr class="bg-gray-800/60">
                          <td class="py-2 px-4 rounded-l-lg">Esfirra de Queijo (1 unidade)</td><td class="py-2 px-4 rounded-r-lg">R$ 10,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
        </section>

        <!-- Lanches Section -->
        <section class="mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl font-bebas text-center mb-8 md:mb-12 gradient-text">🥪 Lanches</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-left">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="font-bold text-white text-sm md:text-base">X-Burger</h3>
                            <p class="text-xs md:text-sm text-gray-400">Hambúrguer, queijo, alface e tomate</p>
                        </div>
                        <span class="text-red-400 font-bold text-sm md:text-base">R$ 25,00</span>
                    </div>
                </div>
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-up">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="font-bold text-white text-sm md:text-base">X-Bacon</h3>
                            <p class="text-xs md:text-sm text-gray-400">Hambúrguer, bacon, queijo e salada</p>
                        </div>
                        <span class="text-red-400 font-bold text-sm md:text-base">R$ 32,00</span>
                    </div>
                </div>
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-right">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="font-bold text-white text-sm md:text-base">X-Frango</h3>
                            <p class="text-xs md:text-sm text-gray-400">Frango grelhado, queijo e salada</p>
                        </div>
                        <span class="text-red-400 font-bold text-sm md:text-base">R$ 28,00</span>
                    </div>
                </div>
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-left">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="font-bold text-white text-sm md:text-base">X-Calabresa</h3>
                            <p class="text-xs md:text-sm text-gray-400">Calabresa, queijo e cebola caramelizada</p>
                        </div>
                        <span class="text-red-400 font-bold text-sm md:text-base">R$ 30,00</span>
                    </div>
                </div>
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-up">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="font-bold text-white text-sm md:text-base">X-Tudo</h3>
                            <p class="text-xs md:text-sm text-gray-400">Hambúrguer, bacon, ovo, queijo e salada</p>
                        </div>
                        <span class="text-red-400 font-bold text-sm md:text-base">R$ 38,00</span>
                    </div>
                </div>
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-right">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="font-bold text-white text-sm md:text-base">Misto Quente</h3>
                            <p class="text-xs md:text-sm text-gray-400">Presunto e queijo</p>
                        </div>
                        <span class="text-red-400 font-bold text-sm md:text-base">R$ 18,00</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bebidas Section -->
        <section class="mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl font-bebas text-center mb-8 md:mb-12 gradient-text">🍺 Bebidas</h2>
            
            <!-- Cervejas -->
            <div class="mb-8 md:mb-12">
                <h3 class="text-xl md:text-2xl font-bebas text-red-400 mb-6 text-center">Cervejas</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-left">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-white text-sm md:text-base">IPA Cativeiro</h4>
                                <p class="text-xs md:text-sm text-gray-400">500ml - Amarga e aromática</p>
                            </div>
                            <span class="text-red-400 font-bold text-sm md:text-base">R$ 25,00</span>
                        </div>
                    </div>
                    <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-up">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-white text-sm md:text-base">Weiss da Casa</h4>
                                <p class="text-xs md:text-sm text-gray-400">500ml - Suave e refrescante</p>
                            </div>
                            <span class="text-red-400 font-bold text-sm md:text-base">R$ 22,00</span>
                        </div>
                    </div>
                    <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-right">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-white text-sm md:text-base">Pilsen Premium</h4>
                                <p class="text-xs md:text-sm text-gray-400">600ml - Clássica e gelada</p>
                            </div>
                            <span class="text-red-400 font-bold text-sm md:text-base">R$ 18,00</span>
                        </div>
                    </div>
                    <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-left">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-white text-sm md:text-base">Heineken</h4>
                                <p class="text-xs md:text-sm text-gray-400">350ml - Importada</p>
                            </div>
                            <span class="text-red-400 font-bold text-sm md:text-base">R$ 12,00</span>
                        </div>
                    </div>
                    <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-up">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-white text-sm md:text-base">Corona</h4>
                                <p class="text-xs md:text-sm text-gray-400">330ml - Com limão</p>
                            </div>
                            <span class="text-red-400 font-bold text-sm md:text-base">R$ 15,00</span>
                        </div>
                    </div>
                    <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-right">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-white text-sm md:text-base">Stella Artois</h4>
                                <p class="text-xs md:text-sm text-gray-400">473ml - Chopp</p>
                            </div>
                            <span class="text-red-400 font-bold text-sm md:text-base">R$ 20,00</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Drinks e Outras Bebidas -->
            <div>
                <h3 class="text-xl md:text-2xl font-bebas text-red-400 mb-6 text-center">Drinks e Outras Bebidas</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-left">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-white text-sm md:text-base">Mojito Cativeiro</h4>
                                <p class="text-xs md:text-sm text-gray-400">Rum, hortelã e limão</p>
                            </div>
                            <span class="text-red-400 font-bold text-sm md:text-base">R$ 30,00</span>
                        </div>
                    </div>
                    <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-up">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-white text-sm md:text-base">Caipirinha de Frutas Vermelhas</h4>
                                <p class="text-xs md:text-sm text-gray-400">Cachaça e frutas frescas</p>
                            </div>
                            <span class="text-red-400 font-bold text-sm md:text-base">R$ 28,00</span>
                        </div>
                    </div>
                    <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-right">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-white text-sm md:text-base">Whisky Cola Premium</h4>
                                <p class="text-xs md:text-sm text-gray-400">Jack Daniel's e Coca-Cola</p>
                            </div>
                            <span class="text-red-400 font-bold text-sm md:text-base">R$ 32,00</span>
                        </div>
                    </div>
                    <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-left">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-white text-sm md:text-base">Gin Tônica</h4>
                                <p class="text-xs md:text-sm text-gray-400">Gin premium e tônica</p>
                            </div>
                            <span class="text-red-400 font-bold text-sm md:text-base">R$ 35,00</span>
                        </div>
                    </div>
                    <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-up">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-white text-sm md:text-base">Refrigerante</h4>
                                <p class="text-xs md:text-sm text-gray-400">350ml - Coca, Pepsi, Sprite</p>
                            </div>
                            <span class="text-red-400 font-bold text-sm md:text-base">R$ 8,00</span>
                        </div>
                    </div>
                    <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-600/20 slide-in-right">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-white text-sm md:text-base">Água Mineral</h4>
                                <p class="text-xs md:text-sm text-gray-400">500ml - Com ou sem gás</p>
                            </div>
                            <span class="text-red-400 font-bold text-sm md:text-base">R$ 5,00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
`;

const getQuemSomosPageContent = () => `
    <div class="max-w-6xl mx-auto px-4">
        <!-- Hero Banner -->
        <section class="relative h-48 md:h-64 lg:h-80 flex items-center justify-center overflow-hidden mb-8 md:mb-12 rounded-xl">
            <img src="./assets/logo-cativeiro.png" alt="Banner Cativeiro" class="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div class="absolute inset-0 bg-gradient-to-r from-red-900/80 to-gray-900/80"></div>
            <div class="relative z-10 text-center fade-in">
                <h1 class="text-3xl md:text-4xl lg:text-6xl font-bebas text-white drop-shadow mb-4 gradient-text">
                    Sobre o <span class="music-note">🎸</span> Cativeiro
                </h1>
                <nav class="text-gray-200 text-sm flex justify-center space-x-2">
                    <span><a href="#home" class="hover:text-red-400 transition-colors duration-300">Home</a></span>
                    <span>/</span>
                    <span>Sobre o Cativeiro</span>
                </nav>
            </div>
        </section>

        <!-- Main Content -->
        <section class="text-center mb-12 md:mb-16 fade-in">
            <h2 class="text-lg font-semibold text-red-400 mb-2">Conheça o Bar</h2>
            <h3 class="text-2xl md:text-3xl lg:text-5xl font-bebas mb-6 gradient-text">
                Sobre o <span class="text-red-400">Cativeiro</span>
            </h3>
            <p class="text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto text-base md:text-lg leading-relaxed px-4">
                O Cativeiro Bar é um espaço criado para celebrar a música, a amizade e os melhores momentos da vida. 
                Com ambiente acolhedor, boa gastronomia e muita energia, somos referência em diversão e cultura na cidade.
            </p>
            
            <!-- Values Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" id="quem-somos-cards">
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20 opacity-0 translate-y-8 transition-all duration-700 fadein-card">
                    <span class="text-4xl md:text-5xl mb-4 block">🍻</span>
                    <h4 class="font-bold text-lg md:text-xl mb-3 text-red-400">Quem Somos?</h4>
                    <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                        Um bar que une música, gastronomia e experiências inesquecíveis desde 2020.
                    </p>
                </div>
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20 opacity-0 translate-y-8 transition-all duration-700 fadein-card">
                    <span class="text-4xl md:text-5xl mb-4 block">🎯</span>
                    <h4 class="font-bold text-lg md:text-xl mb-3 text-red-400">Missão</h4>
                    <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                        Proporcionar alegria, cultura e bons momentos para todos os nossos clientes.
                    </p>
                </div>
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20 opacity-0 translate-y-8 transition-all duration-700 fadein-card">
                    <span class="text-4xl md:text-5xl mb-4 block">👁️</span>
                    <h4 class="font-bold text-lg md:text-xl mb-3 text-red-400">Visão</h4>
                    <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                        Ser referência em entretenimento, qualidade e atendimento na região.
                    </p>
                </div>
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20 opacity-0 translate-y-8 transition-all duration-700 fadein-card">
                    <span class="text-4xl md:text-5xl mb-4 block">🤝</span>
                    <h4 class="font-bold text-lg md:text-xl mb-3 text-red-400">Valores</h4>
                    <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                        Respeito, diversidade, paixão pela música e excelência no serviço.
                    </p>
                </div>
            </div>
        </section>

        <!-- Timeline -->
        <section class="mb-12 md:mb-16">
            <h2 class="text-2xl md:text-3xl font-bebas text-center mb-8 md:mb-12 gradient-text">Nossa História</h2>
            <div class="space-y-6 md:space-y-8">
                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8 slide-in-left">
                    <div class="flex-1 text-center md:text-right">
                        <h3 class="text-xl md:text-2xl font-bebas text-red-400 mb-2">2020 - O Início</h3>
                        <p class="text-gray-300 text-sm md:text-base">Fundação do Cativeiro Bar com o sonho de criar um espaço único para amantes da música.</p>
                    </div>
                    <div class="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center text-xl md:text-2xl">🎸</div>
                    <div class="flex-1"></div>
                </div>
                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8 slide-in-right">
                    <div class="flex-1"></div>
                    <div class="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center text-xl md:text-2xl">🎵</div>
                    <div class="flex-1 text-center md:text-left">
                        <h3 class="text-xl md:text-2xl font-bebas text-red-400 mb-2">2022 - Crescimento</h3>
                        <p class="text-gray-300 text-sm md:text-base">Expansão do cardápio e início das cervejas artesanais exclusivas.</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8 slide-in-left">
                    <div class="flex-1 text-center md:text-right">
                        <h3 class="text-xl md:text-2xl font-bebas text-red-400 mb-2">2024 - Reconhecimento</h3>
                        <p class="text-gray-300 text-sm md:text-base">Premiação como melhor bar de rock da região e aumento da programação de eventos.</p>
                    </div>
                    <div class="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center text-xl md:text-2xl">🏆</div>
                    <div class="flex-1"></div>
                </div>
            </div>
        </section>
    </div>
`;

const getContatoPageContent = () => `
    <div class="max-w-6xl mx-auto px-4">
        <!-- Header -->
        <section class="text-center mb-8 md:mb-12 fade-in">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bebas mb-4 md:mb-6 gradient-text">Entre em Contato</h1>
            <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Fale conosco! Estamos sempre prontos para te atender e responder suas dúvidas.
            </p>
        </section>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <!-- Contact Info -->
            <section class="space-y-6 md:space-y-8 slide-in-left">
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20">
                    <h2 class="text-xl md:text-2xl font-bebas mb-6 text-red-400">Informações de Contato</h2>
                    <div class="space-y-4">
                        <div class="flex items-center space-x-4">
                            <span class="text-xl md:text-2xl">📞</span>
                            <div>
                                <p class="font-bold text-white text-sm md:text-base">Telefone</p>
                                <p class="text-gray-300 text-sm md:text-base">(XX) XXXX-XXXX</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <span class="text-xl md:text-2xl">📧</span>
                            <div>
                                <p class="font-bold text-white text-sm md:text-base">Email</p>
                                <p class="text-gray-300 text-sm md:text-base">contato@cativeirobar.com</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <span class="text-xl md:text-2xl">📍</span>
                            <div>
                                <p class="font-bold text-white text-sm md:text-base">Endereço</p>
                                <p class="text-gray-300 text-sm md:text-base">Rua Fictícia, 123 - Centro, Cidade - Estado</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <span class="text-xl md:text-2xl">🕒</span>
                            <div>
                                <p class="font-bold text-white text-sm md:text-base">Horário de Funcionamento</p>
                                <p class="text-gray-300 text-sm md:text-base">Terça a Domingo: 18h às 02h</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20">
                    <h2 class="text-xl md:text-2xl font-bebas mb-6 text-red-400">Redes Sociais</h2>
                    <p class="text-gray-300 mb-6 text-sm md:text-base">Siga-nos nas redes sociais para ficar por dentro das novidades!</p>
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#" class="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                            <span>📘</span>
                            <span>Facebook</span>
                        </a>
                        <a href="#" class="flex items-center justify-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                            <span>📷</span>
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>
            </section>

            <!-- Contact Form -->
            <section class="slide-in-right">
                <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20">
                    <h2 class="text-xl md:text-2xl font-bebas mb-6 text-red-400">Envie uma Mensagem</h2>
                    <form class="space-y-6">
                        <div>
                            <label class="block text-white font-bold mb-2 text-sm md:text-base">Nome</label>
                            <input type="text" class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300" placeholder="Seu nome completo">
                        </div>
                        <div>
                            <label class="block text-white font-bold mb-2 text-sm md:text-base">Email</label>
                            <input type="email" class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300" placeholder="seu@email.com">
                        </div>
                        <div>
                            <label class="block text-white font-bold mb-2 text-sm md:text-base">Assunto</label>
                            <select class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-300">
                                <option>Selecione um assunto</option>
                                <option>Reserva de mesa</option>
                                <option>Informações sobre eventos</option>
                                <option>Sugestões</option>
                                <option>Outros</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-white font-bold mb-2 text-sm md:text-base">Mensagem</label>
                            <textarea rows="5" class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300" placeholder="Digite sua mensagem..."></textarea>
                        </div>
                        <button type="submit" class="btn-rock w-full py-4 rounded-lg font-bold text-lg">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </section>
        </div>

        <!-- Map Placeholder -->
        <section class="mt-12 md:mt-16">
            <div class="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-red-600/20 text-center">
                <h2 class="text-xl md:text-2xl font-bebas mb-6 text-red-400">Nossa Localização</h2>
                <div class="bg-gray-700 rounded-lg h-48 md:h-64 flex items-center justify-center">
                    <div class="text-center">
                        <span class="text-4xl md:text-6xl mb-4 block">🗺️</span>
                        <p class="text-gray-300 text-sm md:text-base">Mapa interativo será carregado aqui</p>
                        <p class="text-gray-400 text-xs md:text-sm">Rua Fictícia, 123 - Centro, Cidade - Estado</p>
                    </div>
                </div>
            </div>
        </section>
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

// Enhanced fade-in animation for Quem Somos cards
function triggerQuemSomosFadeIn() {
    const cards = document.querySelectorAll('.fadein-card');
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.remove('opacity-0', 'translate-y-8');
            card.classList.add('opacity-100', 'translate-y-0');
        }, 200 + i * 200);
    });
}

// Enhanced content rendering with animations
const renderContent = () => {
    const hash = window.location.hash || '';
    const contentFunction = routes[hash] || routes[''];
    
    if (appContent) {
        // Add fade out effect
        appContent.style.opacity = '0';
        appContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            appContent.innerHTML = contentFunction();
            
            // Add fade in effect
            appContent.style.transition = 'all 0.5s ease';
            appContent.style.opacity = '1';
            appContent.style.transform = 'translateY(0)';
            
            // Trigger specific animations
            if (hash === '#quem-somos') {
                setTimeout(triggerQuemSomosFadeIn, 100);
            }
            
            // Add scroll-triggered animations
            setTimeout(() => {
                const elements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up');
                elements.forEach((element, index) => {
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateX(0) translateY(0)';
                    }, index * 100);
                });
            }, 200);
            
        }, 300);
    } else {
        console.error("Elemento com ID 'app-content' não encontrado no HTML.");
    }
};

// Add smooth scrolling for navigation links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});