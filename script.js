document.addEventListener('DOMContentLoaded', () => {

    // --- MODO DE DESENVOLVIMENTO ---
    const DEV_MODE = false;

    // --- NOVO: CHAVE PARA ARMAZENAMENTO LOCAL ---
    const ENIGMA_SOLVED_KEY = 'enigmaSolved'; // Chave que guardaremos no navegador

    // --- DADOS DAS CARTINHAS ---
    const lettersData = [
        {
            title: 'O Início de Tudo',
            character: 'G',
            date: '28 de Maio de 2024',
            text: `<p>Aqui você vai colar o texto completo da primeira cartinha, a cartinha que continha a letra 'G'.</p><p>Pode ter múltiplos parágrafos.</p>`
        },
        {
            title: 'O Valor dos Detalhes',
            character: 'T',
            date: '28 de Julho de 2024',
            text: `<p>Cole aqui o texto da segunda cartinha, a que tinha a letra 'T'.</p>`
        },
        {
            title: 'A Escolha Consciente',
            character: '7',
            date: '28 de Setembro de 2024',
            text: `<p>Cole aqui o texto da terceira cartinha, a que tinha o número '7'.</p>`
        },
        {
            title: 'Sonhos que Sonhamos',
            character: 'W',
            date: '28 de Novembro de 2024',
            text: `<p>Cole aqui o texto da quarta cartinha, a que tinha a letra 'W'.</p>`
        },
        {
            title: 'O Nosso Hoje',
            character: 'K',
            date: '28 de Janeiro de 2025',
            text: `<p>Cole aqui o texto da quinta cartinha, a que tinha a letra 'K'.</p>`
        },
        {
            title: 'Cartinha Final',
            character: 'Final',
            date: '28 de Março de 2025',
            text: `<p>E aqui, você cola o texto final e principal que estava antes na página. A declaração de amor que finaliza a jornada dos enigmas.</p><p>É a recompensa final por todo o esforço dela.</p>`
        }
    ];

    // --- ESTRUTURA DAS ETAPAS ---
    const stages = [
        {
            password: 'GT7WK',
            title: 'Suspeitou das letras aleatórias nas cartinhas desse último ano juntos?',
            subtitle: 'Acerte a senha que vai se surpreender',
            hint: 'As peças já estão com você. Cada uma recebeu seu valor em um dia especial. A ordem da senha é a mesma ordem em que você recebeu as cartinhas, da mais antiga para a mais recente. 💌'
        },
        {
            password: '7GKTW',
            title: 'Você passou pela primeira fase!',
            subtitle: 'Mas a jornada ainda não acabou. Qual é o próximo segredo?',
            hint: 'A ordem mudou! Agora, organize as letras e o número em ordem crescente. Pense no alfabeto e na sequência numérica. 🔢🔡'
        },
        {
            password: 'WKGT7',
            title: 'Impressionante! Você chegou longe.',
            subtitle: 'Agora o enigma se aprofunda. A ordem não é mais tão óbvia.',
            hint: 'O tempo foi a chave para as primeiras senhas, mas agora, o segredo está no valor de cada dia. Pegue a data completa de cada um dos cinco momentos especiais. Some cada dígito que forma o dia, o mês e o ano para encontrar seu verdadeiro valor numérico. A sequência correta é uma escalada: comece pelo símbolo com o menor valor e suba até o maior. Você está quase lá. O último enigma é uma prova do quanto cada momento conta. ✨'
        },
        {
            password: 'BXCNO',
            title: 'O Enigma Final',
            subtitle: 'Todas as peças, memórias e momentos levaram a isto.',
            hint: 'A lógica da soma foi a chave, e ela retorna para o desafio final. Desta vez, as datas não estão no papel, mas em cinco memórias que formaram nossa história: nosso primeiro olhar, nossa primeira conversa no whatsapp, nosso primeiro beijo, nosso primeiro encontro a sós e nossa melhor viagem juntos. A ordem da senha segue a linha do tempo desses momentos. Some os dígitos de cada data para encontrar seu valor numérico. Mas o que fazer com esses números? Eles são a matéria-prima, mas falta a ferramenta para dar-lhes forma.👀'
        }
    ];
    let currentStage = 1;

    // --- CONFIGURAÇÕES GERAIS ---
    const TOTAL_PHOTOS = 37;
    const PHOTO_INTERVAL_MS = 5000;
    const songs = [
        { title: 'Benson Boone - Beautiful Things', src: 'music/beautiful-things.mp3' },
        { title: 'Stephen Sanchez & Em Beihold - Until I Found You', src: 'music/until-i-found-you.mp3' },
        { title: 'Melim - Ouvi Dizer', src: 'music/ouvi-dizer.mp3' },
        { title: 'Ed Sheeran - Perfect', src: 'music/perfect.mp3' },
        { title: 'James Arthur - Say You Wont Let Go', src: 'music/say-you-wont-let-go.mp3' },
        { title: 'Ed Sheeran - Thinking Out Loud', src: 'music/thinking-iut-loud.mp3' },
        { title: 'Elvis Presley - Cant Help Falling In Love', src: 'music/cant-help-falling-in-love.mp3' },
        { title: 'Ed Sheeran - Photograph', src: 'music/photograph.mp3' },
        { title: 'Christina Perri - A Thousand Years', src: 'music/a-thousand-years.mp3' },
        { title: 'Roberta Campos e Nando Reis- De Janeiro A Janeiro', src: 'music/de-janeiro-a-janeiro.mp3' },
        { title: 'Ruth B. - Dandelions', src: 'music/dandelions.mp3' },
        { title: 'Alex Warren - Ordinary', src: 'music/ordinary.mp3' },
        { title: 'Bryan Adams - Heaven', src: 'music/heaven.mp3' },
        { title: 'Aerosmith - I Dont Want to Miss a Thing', src: 'music/i-dont-want-to-miss-thing.mp3' },
        { title: 'Cazuza - Exagerado', src: 'music/exagerado.mp3' },
        { title: 'Gusttavo Lima - 60 Segundos', src: 'music/60segundos.mp3' },
        { title: 'Jorge & Mateus - Amo Noite e Dia', src: 'music/amo-noite-e-dia.mp3' },
    ];

    // --- SELEÇÃO DE ELEMENTOS DO DOM ---
    const body = document.body;
    const loginScreen = document.getElementById('login-screen');
    const contentScreen = document.getElementById('content-screen');
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const hintButton = document.getElementById('hint-button');
    const hintText = document.getElementById('hint-text');
    const stageTitle = document.getElementById('stage-title');
    const stageSubtitle = document.getElementById('stage-subtitle');
    const stageIndicator = document.getElementById('stage-indicator');
    const hintParagraph = document.getElementById('hint-paragraph');
    const transitionOverlay = document.getElementById('transition-overlay');
    const qrCodeLink = document.getElementById('qr-code-link');
    const cipherLinkMobile = document.getElementById('cipher-link-mobile');
    const galleryImage = document.getElementById('gallery-image');
    const prevPhotoButton = document.getElementById('prev-photo');
    const nextPhotoButton = document.getElementById('next-photo');
    const photoCounter = document.getElementById('photo-counter');
    const audioPlayer = document.getElementById('audio-player');
    const songTitle = document.getElementById('song-title');
    const prevSongButton = document.getElementById('prev-song');
    const playPauseButton = document.getElementById('play-pause-song');
    const nextSongButton = document.getElementById('next-song');
    const playPauseIcon = playPauseButton.querySelector('i');
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const totalDurationEl = document.getElementById('total-duration');
    const volumeContainer = document.getElementById('volume-container');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeIcon = document.querySelector('.volume-icon');
    const zoomButton = document.getElementById('zoom-button');
    const photoModal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    const lettersContainer = document.getElementById('letters-container');
    const letterModal = document.getElementById('letter-modal');
    const modalLetterClose = document.getElementById('modal-letter-close');
    const modalLetterTitle = document.getElementById('modal-letter-title');
    const modalLetterDate = document.getElementById('modal-letter-date');
    const modalLetterChar = document.getElementById('modal-letter-char');
    const modalLetterText = document.getElementById('modal-letter-text');

    // --- ESTADO INICIAL ---
    let currentPhotoIndex = 0;
    let currentSongIndex = 0;
    let photoInterval;

    // --- LÓGICA PRINCIPAL DE INICIALIZAÇÃO (AGORA COM CHECAGEM DO LOCALSTORAGE) ---
    // Verifica se o enigma já foi resolvido neste dispositivo
    const enigmaPreviouslySolved = localStorage.getItem(ENIGMA_SOLVED_KEY) === 'true';

    if (DEV_MODE || enigmaPreviouslySolved) {
        console.warn('MODO DE DESENVOLVIMENTO ou ENIGMA JÁ RESOLVIDO ATIVADO. O LOGIN FOI IGNORADO.');
        bypassLogin();
    } else {
        initializeLogin();
    }
    
    // --- FUNÇÕES DE LOGIN E TRANSIÇÃO ---
    function bypassLogin() {
        loginScreen.classList.add('hidden');
        contentScreen.classList.remove('hidden');
        initContentScreen();
    }

    function initializeLogin() {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userInput = passwordInput.value.toUpperCase();
            const correctPassword = stages[currentStage - 1].password;

            if (userInput === correctPassword) {
                currentStage++;
                if (currentStage > stages.length) {
                    // Se completou a última etapa, registra no localStorage
                    localStorage.setItem(ENIGMA_SOLVED_KEY, 'true');
                    showContent();
                } else {
                    goToNextStage();
                }
            } else {
                errorMessage.classList.remove('hidden');
                passwordInput.value = '';
                loginForm.parentElement.animate([
                    { transform: 'translateX(0)' }, { transform: 'translateX(-10px)' },
                    { transform: 'translateX(10px)' }, { transform: 'translateX(0)' }
                ], { duration: 300, iterations: 1 });
            }
        });

        hintButton.addEventListener('click', () => {
            hintText.classList.toggle('hidden');
        });
    }

    function goToNextStage() {
        const nextStageData = stages[currentStage - 1];
        transitionOverlay.classList.add('active');

        setTimeout(() => {
            stageTitle.textContent = nextStageData.title;
            stageSubtitle.textContent = nextStageData.subtitle;
            stageIndicator.textContent = `Etapa ${currentStage} de 4`;
            hintParagraph.textContent = nextStageData.hint;

            if (currentStage === 4) {
                qrCodeLink.classList.remove('hidden');
                cipherLinkMobile.classList.remove('hidden');
            } else {
                qrCodeLink.classList.add('hidden');
                cipherLinkMobile.classList.add('hidden');
            }

            passwordInput.value = '';
            errorMessage.classList.add('hidden');
            hintText.classList.add('hidden');
            passwordInput.focus();

            transitionOverlay.classList.remove('active');
        }, 500);
    }

    function showContent() {
        qrCodeLink.classList.add('hidden');
        cipherLinkMobile.classList.add('hidden');
        
        loginScreen.style.opacity = '0';
        setTimeout(() => {
            loginScreen.classList.add('hidden');
            contentScreen.classList.remove('hidden');
            contentScreen.style.opacity = '1';
            initContentScreen();
        }, 500);
    }

    // --- FUNÇÕES DA TELA DE CONTEÚDO ---
    function initContentScreen() {
        initMusicPlayer();
        playSong();
        setInterval(createHeart, 300);
        initGallery();
        generateLetterCards();
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        const size = Math.random() * 20 + 10;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        const beforeAfterSize = size + 'px';
        const beforeTop = -size / 2 + 'px';
        const afterLeft = -size / 2 + 'px';
        const styleSheet = document.styleSheets[0];
        const key = Math.random().toString(36).substring(2, 15);
        heart.dataset.key = key;
        styleSheet.insertRule(`[data-key="${key}"]::before, [data-key="${key}"]::after { width: ${beforeAfterSize}; height: ${beforeAfterSize}; }`, styleSheet.cssRules.length);
        styleSheet.insertRule(`[data-key="${key}"]::before { top: ${beforeTop}; }`, styleSheet.cssRules.length);
        styleSheet.insertRule(`[data-key="${key}"]::after { left: ${afterLeft}; }`, styleSheet.cssRules.length);
        document.getElementById('background-hearts').appendChild(heart);
        setTimeout(() => { heart.remove(); }, 5000);
    }

    // --- LÓGICA DAS CARTINHAS E MODAL ---
    function generateLetterCards() {
        lettersContainer.innerHTML = '';
        lettersData.forEach((letter, index) => {
            const cardHTML = `
                <div class="letter-card open-letter-btn" data-index="${index}">
                    <div class="letter-card-content">
                        <h3>${letter.title}</h3>
                        <i class="fa-solid fa-envelope envelope-icon"></i>
                    </div>
                    <div class="wax-seal">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                </div>
            `;
            lettersContainer.innerHTML += cardHTML;
        });
    }

    function openLetterModal(index) {
        const letter = lettersData[index];
        modalLetterTitle.textContent = letter.title;
        modalLetterDate.textContent = letter.date;
        modalLetterChar.textContent = letter.character;
        modalLetterText.innerHTML = letter.text;

        letterModal.classList.remove('hidden');
        body.classList.add('modal-open');
    }

    function closeLetterModal() {
        letterModal.classList.add('hidden');
        body.classList.remove('modal-open');
    }

    lettersContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.letter-card.open-letter-btn');
        if (card) {
            const index = card.getAttribute('data-index');
            openLetterModal(index);
        }
    });

    modalLetterClose.addEventListener('click', closeLetterModal);
    letterModal.addEventListener('click', (e) => {
        if (e.target === letterModal) {
            closeLetterModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !letterModal.classList.contains('hidden')) {
            closeLetterModal();
        }
    });

    // --- LÓGICA DA GALERIA DE FOTOS ---
    function initGallery() {
        updateGallery();
        nextPhotoButton.addEventListener('click', () => {
            showNextPhoto();
            resetPhotoInterval();
        });
        prevPhotoButton.addEventListener('click', () => {
            showPrevPhoto();
            resetPhotoInterval();
        });
        resetPhotoInterval();
        zoomButton.addEventListener('click', openModal);
        modalClose.addEventListener('click', closeModal);
        photoModal.addEventListener('click', (e) => {
            if (e.target === photoModal) { closeModal(); }
        });
        modalNext.addEventListener('click', () => {
            showNextPhoto();
            updateModalImage();
        });
        modalPrev.addEventListener('click', () => {
            showPrevPhoto();
            updateModalImage();
        });
        document.addEventListener('keydown', (e) => {
            if (photoModal.classList.contains('hidden')) { return; }
            if (e.key === 'Escape') { closeModal(); }
            if (e.key === 'ArrowRight') { showNextPhoto(); updateModalImage(); }
            if (e.key === 'ArrowLeft') { showPrevPhoto(); updateModalImage(); }
        });
    }
    
    function updateGallery() {
        galleryImage.style.opacity = 0; // 1. Inicia a transição para a imagem atual sumir (opacity de 1 para 0)

        // 2. Após o tempo total da transição de "sumir", trocamos a imagem e a fazemos aparecer
        setTimeout(() => {
            const newImageSrc = `images/${currentPhotoIndex + 1}.jpg`;
            
            // Pré-carrega a nova imagem em um elemento temporário para garantir que ela esteja pronta
            const tempImg = new Image();
            tempImg.src = newImageSrc;

            tempImg.onload = () => {
                // Quando a nova imagem estiver totalmente carregada, atualiza a imagem real da galeria
                galleryImage.src = newImageSrc;
                photoCounter.textContent = `${currentPhotoIndex + 1} / ${TOTAL_PHOTOS}`;
                galleryImage.style.opacity = 1; // 3. Faz a nova imagem (já carregada) aparecer suavemente (opacity de 0 para 1)
            };
            
            // Caso a imagem não carregue (erro), ainda tenta exibir e fazer o fade-in
            tempImg.onerror = () => {
                console.error(`Falha ao carregar a imagem: ${newImageSrc}`);
                galleryImage.src = newImageSrc;
                photoCounter.textContent = `${currentPhotoIndex + 1} / ${TOTAL_PHOTOS}`;
                galleryImage.style.opacity = 1;
            };

        }, 700); // CORREÇÃO: Este tempo deve ser o tempo COMPLETO da transição do CSS (0.7s = 700ms)
    }

    function showNextPhoto() {
        currentPhotoIndex = (currentPhotoIndex + 1) % TOTAL_PHOTOS;
        updateGallery();
    }

    function showPrevPhoto() {
        currentPhotoIndex = (currentPhotoIndex - 1 + TOTAL_PHOTOS) % TOTAL_PHOTOS;
        updateGallery();
    }

    function resetPhotoInterval() {
        clearInterval(photoInterval);
        photoInterval = setInterval(showNextPhoto, PHOTO_INTERVAL_MS);
    }

    function openModal() {
        clearInterval(photoInterval);
        updateModalImage();
        photoModal.classList.remove('hidden');
        body.classList.add('modal-open');
    }

    function closeModal() {
        photoModal.classList.add('hidden');
        body.classList.remove('modal-open');
        resetPhotoInterval();
    }

    function updateModalImage() {
        modalImage.src = `images/${currentPhotoIndex + 1}.jpg`;
    }

    // --- LÓGICA DO PLAYER DE MÚSICA E VOLUME ---
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || ('ontouchstart' in document.documentElement);
    if (isMobile) { document.body.classList.add('is-mobile'); }
    
    if (!isMobile) {
        volumeContainer.style.display = 'flex';
        audioPlayer.volume = 0.75;
        volumeSlider.value = 0.75;

        function updateVolumeIcon() {
            if (audioPlayer.muted || audioPlayer.volume === 0) {
                volumeIcon.classList.remove('fa-volume-high');
                volumeIcon.classList.add('fa-volume-xmark');
            } else {
                volumeIcon.classList.remove('fa-volume-xmark');
                volumeIcon.classList.add('fa-volume-high');
            }
        }
        volumeSlider.addEventListener('input', () => {
            audioPlayer.volume = parseFloat(volumeSlider.value);
            audioPlayer.muted = false; 
            updateVolumeIcon();
        });
        volumeIcon.addEventListener('click', () => {
            if (audioPlayer.muted || audioPlayer.volume === 0) {
                audioPlayer.muted = false;
                if (audioPlayer.volume === 0) {
                    audioPlayer.volume = 0.25;
                    volumeSlider.value = 0.25;
                }
            } else { audioPlayer.muted = true; }
            updateVolumeIcon();
        });
        updateVolumeIcon();
    }

    function initMusicPlayer() {
        loadSong(currentSongIndex);
        playPauseButton.addEventListener('click', () => {
            if (audioPlayer.paused) { playSong(); } else { pauseSong(); }
        });
        nextSongButton.addEventListener('click', playNextSong);
        prevSongButton.addEventListener('click', playPrevSong);
        audioPlayer.addEventListener('ended', playNextSong);
        audioPlayer.addEventListener('timeupdate', updateProgressBar);
        audioPlayer.addEventListener('loadedmetadata', setTotalDuration);
        progressContainer.addEventListener('click', setProgress);
    }

    function loadSong(songIndex) {
        const song = songs[songIndex];
        songTitle.textContent = song.title;
        audioPlayer.src = song.src;
    }

    function playSong() {
        if (audioPlayer.muted) { audioPlayer.muted = false; }
        const playPromise = audioPlayer.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                playPauseIcon.classList.remove('fa-play');
                playPauseIcon.classList.add('fa-pause');
            }).catch(() => {
                playPauseIcon.classList.remove('fa-pause');
                playPauseIcon.classList.add('fa-play');
});
        }
    }

    function pauseSong() {
        audioPlayer.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    }

    function playPrevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updateProgressBar(e) {
        const { duration, currentTime } = e.srcElement;
        if (duration) {
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            currentTimeEl.textContent = formatTime(currentTime);
        }
    }

    function setTotalDuration() {
        totalDurationEl.textContent = formatTime(audioPlayer.duration);
    }



    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        audioPlayer.currentTime = (clickX / width) * duration;
    }
});