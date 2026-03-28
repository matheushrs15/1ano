document.addEventListener('DOMContentLoaded', () => {

    // --- MODO DE DESENVOLVIMENTO ---
    const DEV_MODE = false;

    // --- NOVO: CHAVE PARA ARMAZENAMENTO LOCAL ---
    const ENIGMA_SOLVED_KEY = 'enigmaSolved';

    // --- DADOS DAS CARTINHAS ---
    const lettersData = [
        {
            title: 'O Início de Tudo',
            character: 'G',
            date: '28 de Maio de 2025',
            text: `<p>Amor da minha vida,</p>
<p>Hoje completamos 2 meses de namoro. Lembro como se fosse ontem aquela sexta-feira… o frio na barriga enquanto preparava tudo para o pedido, o momento em que fui na loja do Jaime escolher nossas alianças, o dia em que fui à casa dos seus pais pedir a permissão deles para começarmos uma vida juntos, a surpresinha que eu queria fazer junto com as alianças, o que eu iria dizer pra você… Enfim, lembro de tudo como se fosse ontem. Ao mesmo tempo, parece que você está presente na minha vida há muito mais tempo. Hoje, já não me vejo sem você. Você se tornou parte essencial da minha vida.</p>
<p>É sempre bom lembrar do que deu início à nossa história, como aquele stories que você postou nos melhores amigos, e eu estava lá. Respondi, começamos a conversar sem parar, como se fôssemos grandes amigos de longa data. Logo pegamos intimidade e nossas conversas ficaram bobas e leves.</p>
<p>E aquele dia do Garage? Que incrível! Saímos todo mundo junto, aproveitamos e comemos bem. No fim da noite, te dei carona até a casa dos seus avós, mas você não foi embora direto. Ficamos ali no carro, em frente à casa deles, conversando mais um tempinho... até que nos beijamos pela primeira vez. Que dia memorável.</p>
<p>E o acampamento? Aqueles dias foram dos mais importantes da minha vida. Uma grande virada de chave, foi ali que percebi que algo grande estava acontecendo comigo. Foi lá que eu decidi que você seria MINHA. Como muitos diziam: tivemos um acampamento à parte, pra mim, só você importava, e pra você, só eu importava.</p>
<p>E o dia do sushi, logo depois do acampamento… foi naquela noite que tivemos nosso primeiro encontro. Lembro do frio na barriga para ter coragem de segurar sua mão. Quando finalmente segurei, lembro do seu rosto até hoje, o rosto mais feliz, junto com o meu.</p>
<p>E no pós-acampamento, na igreja, a gente sentados lado a lado, disfarçando um toque físico da maneira que conseguíamos, sem deixar muito exposto, porque naquele momento ainda não tínhamos nada sério.</p>
<p>Depois disso, fomos nos encontrando, nos apaixonando mais e mais, conversando a todo momento... até o dia 28 de março de 2025.</p>
<p>E como eu te disse naquele dia: "e toda história precisa de um começo", aquele foi o nosso. E hoje estamos aqui, comemorando 2 meses de namoro.</p>
<p>Hoje eu te entrego essa cartinha, para o amor da minha vida, pra relembrar um pouco do nosso começo. Que você guarde ela para o resto de nossas vidas, para sempre lembrarmos da nossa trajetória juntos.</p>
<p>Essa cartinha é uma declaração do meu amor por você, mesmo sem conseguir expressar tudo em palavras, e do quanto você significa pra mim.</p>
<p>Eu te amo.</p>`
        },
        {
            title: 'O Valor dos Detalhes',
            character: 'T',
            date: '28 de Julho de 2025',
            text: `<p>Amor da minha vida,</p>
<p>Nessa cartinha eu queria dizer um pouquinho de como é rico os detalhes do nosso relacionamento, há grandes coisas que acontece que percebemos o quão bom são as coisas, mas o real valor é nos mínimos detalhes, pequenos detalhes fortalece um relaciomento por completo.</p>
<p>Sabe... eu fico imaginando o quanto grato sou por ter alguém como você do meu lado, a maneira como eu faço uma gracinha(muitas vezes totalmente sem graça) e você sempre solta um sorriso, é que sorriso mais encantador , sou fascinado no seu sorrido. O seu jeitinho de olhar para mim, é notório o amor que você sempre por mim, da para perceber na maneira que você olha, e eu me sinto muito acolhido e amado com esse tratamento.</p>
<p>Amor, você é uma mulher que eu jamais imaginei que teria ter, você sempre está tão preocupada comigo e querendo o meu bem, isso diariamente, mas um exemplo claro foi quando o boi me acertou e eu fui parar na UPA, incrível a maneira que você se preocupou e cuidou de mim, na hora que eu te contei você fez questão de contar sua chefe e ir correndo me visitar, você é assim sempre, sempre querendo o meu bem.</p>
<p>Não tem como esquecer dos nossos momentos de conexão profunda, como a gente no acampamento que estávamos tão conectados um com outros, naquele momento que você estava maquiando o fucinho em meu nariz.... que momento mágico, pensar que naquele momento ja estávamos tendo nossas conexões, algo tão simples virou um marco tão significativo para nós. A nossa primeira viagem para algum lugar distante(Uberaba), como foi incrível passar aqueles dias ao seu lado, aproveitar o shopping e ver um filme que queriamos ver juntos a muito tempo, mas o melhor de tudo foi a gente dormir juntos, que marco em nossa vida, perceber que é aquela sensação de dormir com o amor da sua vida, e naquele momento eu estava dormindo abraçado com o amor da minha vida, juntos e grudados por toda a noite, perto um do outro. É em momento que temos gargalhadas sem motivo e nexo que eu percebo que estar com você deixa o meu dia mais leve, eu esqueço de todos os outros problemas que existe no momento, tudo ja nao importa mais, o que importa é um estar na presença do outro rindo que nem dois palhaços a ponto de não conseguir fazer mais nada, e pensar que vai ser assim por toda minha vida.</p>
<p>Há momento tão inesquecíveis como acompanhar de perto mudança de uma casa para outra, aquele momento teve muito o que refletir se parar para pensar, primeiro que conheci como era sua casa antiga e pude perceber o quão grande foi a evolução de uma casa para a outra, aquilo foi um marco na vida de todos vocês e eu consegui acompanhar de pertinho desde a vontade de pegar aquela casa, para depois tudo dar certo, começar as reformas, ver cada passo se alinhando para finalmente a mudança e o novo cantinho de vocês. Foi tão bom ver todos entusiasmos, principalmente seus pais pois foram eles que deram a oportunidade de ter essa vida, isso me fez perceber que um dia seremos nós conquistando a nosso própria casa, escolhando cada mobília, cada cor de tinta, cada cômodo... estou animado para chegar esse momento.</p>
<p>Momento inesquecíveis como ir na roça pela primeira vez juntos, carregando o nosso chaveirinho sempre(João), e posteriormente seus pais irem juntos com a gente e tendo uma tarde maravilhosa e muito aproveitosa. Ir para patos e conhecer a vovó Jaine, que sempre está preocupada com o nosso bem, sempre querendo agradar e deixa a gente o mais alegre possível, e o vovô João que sempre quer uma conversa distraida, seja uma conversa sobre futebol, onde ele vai pegar seu rádio, me levar para o quartinho onde o sinal pega melhor e escutar o jogo do Cruzeiro, eu sinto que eles foram meus avos a vida inteira , que sensação mágica. Aquele momento incríveis indo na vovó Abadia sempre querendo agradar ao máximo, oferecendo uma boa comida e um açaí delicioso de sobremesa, e o vovô Aladim sempre querendo ter um bom diálogo sobre algo que aconteceu, sobre um acontecimento do passado.</p>
<p>Algo que não sai da minha cabeça é quando eu disse que iria ver minha princesa cantar em Patos na UNIPAM, e você me perguntou se eu ia sair aqui do Carmo e ir para Patos so para ver você cantar, e sim , obvio que eu iria porque é isso que realmente há valor, é isso que quero para minha vida, acompanhar cada passo seu na faculdade de pertingo , ser seu fã número 1, além disso escutar seu taleto. Eu rodaria o mundo inteiro para te ver 1 segundo que seja.</p>
<p>São 4 meses mas já vivemos tantos momentos bons juntos, como passar o dia dos namorados juntos numa programação feita pela sua familia, ja percebeu isso? Somos um casal oficial da sua familia, se algum dia você olhava para seus tios , avos e via como grande casais unidos, saiba que fazemos parte disso agora, e não so na sua familia, passamos o dia dos namorados da nossa igreja também. E falando em igreja, como é bom ir na igreja ao seu lado, ir aos cultos, programações e na escola dominical juntos, isso fortalece nossa relação junto com Jesus, um dia seremos uma so carne e sempre vamos estar unidos com o amor de Cristo. Aqueles momentos quando eu quero assistir futebol e você me faz uma boa companhia, você quer ir la ver os jogos de vôlei e te faço um boa companhia, e apesar do nosso principalmente esporte favorito nao ser igual, a gente nao vai assistir por obrigação, a gente assiste juntos se divertindo e curtindo o momento.</p>
<p>Preciso dizer de detalhe que me deixar tão feliz quando aconteceu, era aniversário da yasmin e foi o momento que ia começar os ensaios, a entrada e tudo mais, naquele momento que nos levantamos para ver você se segurou em mim pelo o meu braço, pelo meu biceps, foi a primeira vez que você me segurava daquela maneira, foi uma sensação incrível que senti naquele momento, e toda vez que você me segura dessa maneira eu me encho de felicidade.</p>
<p>Esses dias eu estava pensando, sabe quando programamos uma grande viagem? Como ir para caldas novas. Então, sempre nós preparamos dias antes para a viagem, da uma ansiedade e para que não chega nunca. Pois é, é assim que eu me sinto toda vez que vou te ver, e não falo da boca para fora, é de verdade, parece que sempre é um ansiedade doida para te ver, parece que demora tanto para esse momento de tanto que fiquei aguardando, você percebe que é bom quando esta aproveitando o momento e bate uma tristeza de saber que uma hora terei que me despedir, e quando me despeço volta aquela sensação de viagem marcada novamente, porque fico ansioso para te ver. Isso me faz uma pergunta que você me fez caso você não pudesse ter ido lada uberaba aquele dia, você me perguntou como eu ia me sentir la em uberaba sem você, meu amor .... de verdade, saiba que eu nunca trocaria sua companhia por alguma viagem, e de verdade mesmo, eu não iria ter peso na consciência, é porque além de um bom lugar, o mais importante é estar com o amor da minha vida.</p>
<p>Enfim, não consigo expressar tudo o que eu sinto, so queria reflitir e pensar que sim... por trás de momento incríveis e tão memoráveis há algo ainda mais profundo, o detalhe das coisas, pensar que você sempre está me mimando e me presenteando, mais se for olhar mais profundamente o presente é o de menos, o maior valor é que você pensou em me dar algo, você pensou em me agradar, isso me fez lembrar de você me dizer "foi so 5 reais" pela camisa do bazar, mas meu amor ... o verdadeiro significado esta na intenção, e se intenção tivesse valor não teria dinheiro suficiente no mundo que te pagasse. Eu amo nossos detalhes, eu amo o nosso jeitinho de ser, nossa alma se velhos e caseiros, eu amo poder apenas relaxar na sua companhia depois de dias cansativos, apenas ver um filminho junto e acabar dormindo. Esse é quem somos, são nossos detalhes, que de detalhe em detalhe forma um relacionamento forte e saudável como o nosso.</p>
<p>Eu te amo meu amor!!!!!</p>`
        },
        {
            title: 'A Escolha Consciente',
            character: '7',
            date: '28 de Outubro de 2025',
            text: `<p>Amor da minha vida,</p>
<p>Nessa cartinha, queria refletir sobre como um verdadeiro amor não se procura, ele se encontra.</p>
<p>A gente se conheceu no acampamento de 2024, no início do ano, e só fomos conversar de fato no final do ano, quando começamos a falar muito, sem parar. Depois disso, comecei até a te visitar no seu trabalho. Saímos em turma pela primeira vez no dia 26 de dezembro (acho que é essa data kkkk), no amigo oculto dos nossos amigos. Mas, naquela época, já estávamos muito próximos de uma forma amigável. A gente já se falava todos os dias e estava cada vez mais conectado.</p>
<p>Foi no dia 23 de janeiro que ficou marcado para sempre como um dia único pra nós. Foi nesse dia que fomos ao Garage, eu te dei carona na ida e na volta. Na volta, parei o carro na frente da casa do seu avô, conversamos até rolar aquela química e acabamos (finalmente!) nos beijando pela primeira vez. Foi simplesmente incrível.</p>
<p>Depois disso, cada dia que passava a gente conversava mais e mais. Queríamos nos encontrar de novo, pra reviver o que aconteceu naquela noite.</p>
<p>Mas havia uma preocupação: eu era católico e você presbiteriana. Isso, de fato, costuma ser uma barreira em muitos relacionamentos, o casal se ama, mas por causa das diferenças acaba não dando certo. Essa preocupação começou a tomar conta de mim, porque naquele momento a gente já estava bem próximo, mas ainda não era algo sério. Eu tinha receio de continuar até nos tornarmos namorados e essa diferença acabar atrapalhando tudo.</p>
<p>Vejamos… imagina como é para um casal ter costumes diferentes: programações da sua igreja? Só um dos dois vai. Domingo? Um vai à missa e o outro vai ao culto. Por mais que existam milhares de casais de religiões diferentes, acho que dificilmente dá certo quando ambos são praticantes ativos. E o pior é quando isso já vem da família, todos são daquela igreja e te ensinaram desde sempre a ir. Como ficaria isso? O que seus pais pensariam? Com certeza, não achariam bom, e muitos se sentiriam até traídos.</p>
<p>Foi no dia 11 de fevereiro que te chamei pra conversar. Falei de todas as minhas preocupações e receios. Disse que, como estávamos nos aproximando muito, poderiamos criar grandes expectativas, e não queria magoar nenhum de nós dois. Porque, se continuássemos daquele jeito e depois não desse certo por causa disso, seria muito sofrido pra ambos. Quis conversar 100% aberto e sincero com você, saber o seu ponto de vista e o que você achava. Você entendeu o que eu quis dizer. No final da conversa, percebemos a pedra que estava no nosso caminho. Você finalizou dizendo que era pra cada um de nós orar, pra que tudo desse certo.</p>
<p>Depois daquele dia, as coisas naturalmente foram esfriando. Não que a gente tenha parado de conversar, continuamos falando do mesmo jeito, como amigos. Mas aquela química que existia antes já não acontecia mais. A parte romântica tinha sumido, aquelas indiretas (às vezes bem diretas kkk) de flerte já não rolavam mais. E foi assim até o acampamento deste ano.</p>
<p>No dia 1º de março, início do acampamento, eu não sabia o que esperar. Já sabia que seria bom, por causa da experiência do ano anterior, mas não sabia como a gente ia passar aquele tempo juntos. E, meu Deus, foi o momento perfeito para acontecer! Tenho certeza de que foi tudo planejado por Deus, porque era justamente quando mais precisávamos que algo assim acontecesse entre nós.</p>
<p>Foram quatro dias juntos com todo mundo, e o tempo todo havia um espírito de união, todos juntos no mesmo propósito. Mas, entre nós, as coisas foram diferentes. Parecia que ignoramos todos os receios e preocupações. Nada mais importava naquele momento, apenas o propósito do acampamento e o fato de estarmos aproveitando um ao outro. Eu queria estar perto de você o tempo todo. Naqueles dias, percebi o quão bom é estar ao seu lado, conversar com você… eu esperava ansiosamente pra te ver, pra te procurar e ficar conversando. Como disseram sobre nós: tivemos nosso “acampamento à parte”, um só nosso.</p>
<p>Foi naquele momento que percebi que você era o amor da minha vida.</p>
<p>O amor não se procura, ele se encontra.</p>
<p>Quando estamos sozinhos, pensamos: “Será que algum dia vou encontrar alguém que me faça feliz? Quando vai acontecer?”. Mas nada acontece, e ficamos preocupados. Tentamos achar esse amor nas pessoas, procuramos, insistimos. Mas o verdadeiro amor não é assim, ele simplesmente passa diante dos seus olhos. E, muitas vezes, ele não vem “resolvido”, como o nosso, que começou com tantos receios.</p>
<p>E foi naquele acampamento que vi o amor da minha vida passando diante dos meus olhos. Você não escolhe, você sente. É algo dentro de você, não é consciente. Naquele momento, fiz a minha maior escolha: não iria deixar o amor da minha vida ir embora. Eu estava disposto a tentar de todas as formas, mesmo que isso significasse mudar quem eu fui por toda a vida.</p>
<p>Não acho que aquela conversa difícil que tivemos foi besteira. Na verdade, foi muito importante. Não é um assunto bobo, e fizemos certo em levar isso em conta. Tenho certeza de que é por isso que sempre damos tão certo. Um relacionamento não se sustenta apenas pela emoção de amar. Amor não é só um sentimento, é uma escolha. É escolher cuidar, respeitar e se comunicar claramente com o seu parceiro todos os dias.</p>
<p>O sentimento é importante, é como a chama de um fogo, a chama que me fez enxergar o amor da minha vida. Mas são as decisões e atitudes que mantêm esse fogo aceso. E, desde o início, sempre tivemos conversas sinceras e claras um com o outro, mesmo quando eram delicadas ou sensíveis.</p>
<p>E veja só, meu amor… tudo foi perfeitamente planejado por Deus. A gente encarou a pedra no caminho e venceu ela. Hoje, estamos completando 7 meses de namoro, juntos, para toda uma vida.</p>
<p>Me dá muito orgulho ver como foi o nosso começo, o que passamos pra chegar até aqui. Sempre fomos claros um com o outro, sempre cuidamos um do outro, sem magoar, sempre com amor. Eu te amo tanto, meu bem. Obrigado por ser essa pessoa tão incrível na minha vida.</p>
<p>Hoje escrevo essa cartinha de 7 meses, e sei que um dia vamos rir de emoção ao ver as futuras… a de 1 ano, 2 anos, 7 anos… se Deus quiser!</p>`
        },
        {
            title: 'Os Sonhos que Sonhamos',
            character: 'W',
            date: '28 de Janeiro de 2026',
            text: `<p>Meu amor,</p>
<p>Como é bom viver uma vida ao seu lado. Todos os dias acordo e penso que privilégio é tê-la aqui comigo. Mais um mês se passou, dessa vez pertinho do seu aniversário, por dois dias… então esse mês é mais especial ainda, pois falarei mais um pouco sobre nosso relacionamento e como é passar esse seu aniversário junto também.</p>
<p>Primeiramente, gostaria de dizer que foi tudo incrível, desde o meu aniversário, onde passei bem do jeitinho que gosto: um dia tranquilo, sem nada de muito especial como uma festa dedicada que chama todos os conhecidos. Não… gosto de coisas tranquilas. Por muitos anos foi assim, mas dessa vez tinha você para passar o dia comigo. Agora que já passaram alguns dias do meu aniversário, pude refletir e pensar melhor. Pude ver que foi o melhor aniversário da minha vida, sem exagero. Você pode pensar que não, pois não teve nada de tão especial, mas foi do jeito que eu queria, e você esteve comigo desde o momento em que ficou disponível até o final da noite. Não poderia exigir algo melhor. Tenho só o que agradecer a Deus por me dar essa oportunidade, essa vivência. Sua presença sempre me faz melhor.</p>
<p>Os dias se passaram, a gente foi aproveitando, até que chegou o seu dia. Seu aniversário foi na segunda, mas fomos aproveitá-lo mesmo no sábado, quando à noite resolvemos ir comer no Mr. Doug, um lugar especial que você sempre gosta de ir. Foi simplesmente incrível. Pedimos uns sanduíches muito diferenciados e gostosos, depois fomos ver as mudanças que teve no lugar, as novas atrações e decorações, quando de repente… <em>música épica dos Vingadores…</em> ao olhar pro lado… estavam lá kkkkkkkkk os cosplays dos Vingadores. Tiramos fotos com eles e foi incrível. Depois disso, veio sua sobremesa especial de aniversariante, e todo o estabelecimento cantou junto os parabéns. E não acabou por aí, pois depois demos a doida de ir no videogame de dança e queimamos umas boas calorias. Depois fomos embora e percebemos o quão incrível é estar em um bom lugar, com uma causa especial, mas principalmente com as pessoas que importam. Isso é o que tem mais valor.</p>
<p>No domingo, almoçamos a comida incrível que é na casa da vovó Jaine. Sua mãe já tinha me contado que ia fazer uma surpresinha com bolo de aniversário e cantar mais uma vez os parabéns. Apesar de você ter descoberto do bolo, foi incrível. Me peguei pensando depois, e aquilo teve mais significado ainda, pois estávamos comemorando seu aniversário em Patos, na casa dos seus avós, da vovó Jaine e do vovô João, com o tio Júlio. O que deixa ainda mais especial é que, por eles morarem em outra cidade, não temos contato presencial direto como com a família da nossa própria cidade. Então, estar lá com eles, em um momento especial desse, torna tudo ainda melhor. Memórias que vão estar sempre conosco. Como é bom aproveitar esses momentos quando é possível.</p>
<p>Bom… hoje é mais um mês do nosso namoro: 10 meses. Uau, como o tempo passa, meu amor. Vivemos tantas coisas juntos nesse tempo. Parece que estamos juntos há uma eternidade. De modo resumido, falei apenas sobre dois dias de nossas vidas e escrevi tudo isso. Imagina se fosse falar tudo o que vivemos de forma detalhada… essa é a dimensão.</p>
<p>O amor não é apenas um sentimento. Sentimento é a paixão, é o afeto. O amor é uma escolha todos os dias. Você luta pelo amor, é o agir de cada um, é respeitar e ser respeitado, cuidar de um bem precioso que temos. Assumimos uma responsabilidade do hoje e do amanhã, pois quem ama de verdade decide viver de constância. E quem decide viver isso, decide criar planos, desejos e sonhos.</p>
<p>Já falei isso várias vezes antes, mas é engraçada a percepção que tenho sobre o futuro agora. Antes, eu sentia insegurança e medo do futuro: “como vai ser?”, “meu Deus, uma hora vou ter que assumir essa responsabilidade”. Depois que estamos juntos, esses pensamentos sumiram. Tudo virou “se isso for acontecer, é apenas questão de tempo”. Cada dia que passo ao seu lado me dá mais conforto e paz sobre com quem vou passar o resto da minha vida, pois tenho certeza de que você vai ser uma mulher de verdade, onde cada um vai fazer sua parte, juntos, para um lar agradável.</p>
<p>Quando fazemos coisas aqui em casa ou na sua casa, me vem ao pensamento como tudo vai ser mais leve, pois entendemos um ao outro quando o outro está com a bateria mais esgotada. Sempre queremos pegar as responsabilidades juntos, pois assim não desgasta nenhum de nós dois. Além de que, toda vez que fazemos essas coisas juntos é como se fosse um evento kkkkk, sempre fazemos cantando ou fazendo uma gracinha com o outro. É como se fosse um date divertido.</p>
<p>Isso me deixa tão animado com o nosso futuro, pois um dia vamos estar mais estabelecidos: você com seus estudos na faculdade, nós nas nossas batalhas diárias no serviço com o objetivo de um futuro juntos. E um dia ficaremos noivos, uma corrida pelo casamento e pelo nosso lar, e posteriormente casados, uma só carne, nossa responsabilidade, nossa vida, donos de nós mesmos. É engraçado que antigamente eu trabalhava por mim, apenas por mim. Hoje eu trabalho por nós. Gosto de ter minhas coisas, mas não penso só em mim, penso que estou fazendo por nós.</p>
<p>E quando tivermos nosso lar, tudo o que mais almejo… não há mais nada que eu queira nesse mundo além de você. Não importa como ou onde, sendo com você é o que mais importa. E veja, nós nos entendemos tão bem, pois há coisas aqui em casa que vejo e só não posso fazer nada a respeito, pois não tenho esse poder de mudar. O mesmo com você. E quando tivermos nosso lar, vai ser do nosso jeito, pois conversamos e tentamos entender um ao outro sempre.</p>
<p>Sempre achei que a maioria dos desgastes em relações é a falta de comunicação. Casais vivem brigando por não terem uma conversa clara e objetiva, e casais se separam pelo mesmo motivo. Em muitos casos, os filhos viram intermediadores de conversa dos pais, onde os pais, que deveriam conversar entre si, ficam falando para os filhos passarem recados para a mãe ou para o pai, como um telefone sem fio, ao invés de evitar exposição aos filhos e resolver entre si. E meu grande desejo é sempre manter nosso diálogo sincero e saudável, pois foi por esse mesmo motivo que nos unimos, onde lá no começo parecia ser tão difícil da gente dar certo, e deu no que deu: estamos juntos hoje, de um jeito que não me vejo mais sem você.</p>
<p>Fico imaginando como vai ser nossa vida de casados, quão bela será. Tê-la todos os dias, sem despedidas para nos vermos apenas no outro dia… não. Despedidas de “mais tarde eu te vejo”. Ter com quem dormir e abraçar todos os dias, fortalecer ainda mais nossa relação, aproveitar nossa vida de casados sozinhos o máximo possível, só a gente. E quando for o momento certo, criar nossa família, um dos maiores propósitos: criar nossos filhos e viver ainda mais felizes, ser pais presentes e cuidadosos, que vão lutar para ter a melhor vivência possível, com propósito e virtudes.</p>
<p>E quando for a hora deles voarem, como vamos voar ainda… estaremos lá, eu e você novamente. Tê-la em minha vida todos os dias, como sempre foi. Nossos filhos nos visitando e vivendo uma vida em paz, até quando Deus quiser.</p>
<p>Não sou vidente, não sei do futuro, sou apenas um sonhador. Não sei se essas coisas vão se realizar e se vai ser exatamente assim, mas é bom pensar no futuro. Gosto de pensar em como seremos no futuro, mas até lá vamos viver todos os momentos que acontecerem e Deus permitir, como os que citei no começo dessa cartinha e milhares de outros momentos que não citei. Porque estou no momento mais feliz de toda a minha vida. Não sei como é ser mais feliz. Se Deus permitir a gente viver coisas ainda mais belas, que bom. Se não, está tudo bem, pois já estou com quem eu mais amo na minha vida. Estou com quem mais desejo: o amor da minha vida, você!!!</p>
<p>Eu te amo, meu amor, e vou lutar para cultivar esse amor, que é uma flor que floresce todos os dias!!!!</p>`
        },
        {
            title: 'O Nosso Hoje',
            character: 'K',
            date: '28 de Março de 2026',
            text: `<p>Meu amor,</p>
<p>Hoje finalmente chegou o dia... o nosso dia! Passamos por tantas coisas durante esse tempo. Cada momento que vivemos, cada abraço, cada beijo... são tantos detalhes lindos.</p>
<p>Durante este ano, te entreguei cinco cartinhas com uma parte de uma senha. Fico me perguntando se você não desconfiou em nenhum momento, se não olhou para o papel e pensou: "Mas por que isso está escrito aqui?". Foram 5 cartas, 5 códigos, 4 enigmas e agora essa surpresa, onde mostro algumas de nossas fotos, nossas músicas preferidas e as cartas que escrevi ao longo do ano.</p>
<p>Tudo foi pensado desde o começo. Quando eu estava fazendo a primeira carta para te entregar em 28/05/2025, eu tinha algumas ideias, mas tudo era mais simples. Não envolvia o desenvolvimento de um site exclusivo para isso. Mas, mesmo assim, tive a ideia de colocar uma parte da senha em cada carta. O tempo foi passando e a ideia foi se desenvolvendo mais e mais, tomando forma até virar tudo isso que você está vendo agora.</p>
<p>Gosto de escrever cartinhas temáticas porque cada uma mostra uma fase da nossa relação, cada carta é uma reflexão.</p>
<p><strong>"O Início de Tudo"</strong>: Começamos refletindo sobre como foi antes de "algo sério" de fato começar. O preparativo indo ao Jaime escolher nossas alianças, a visita à casa dos seus pais para pedir a autorização e aceitação deles, o frio na barriga pensando no que dizer... "Toda história precisa de um começo", e foi ali que o nosso começou.</p>
<p><strong>"O Valor dos Detalhes"</strong>: Depois, refletimos sobre como cada detalhe é um tijolinho de uma relação saudável. As gracinhas diárias que te fazem sorrir, os olhares que trocamos, o fato de nos sentirmos amados e acolhidos. As gargalhadas de tirar o fôlego, as viagens, as idas à roça e a Patos, nossas famílias unidas, nosso compromisso com a igreja e as programações... São muitos detalhes ricos que tornam nossa base sólida.</p>
<p><strong>"A Escolha Consciente"</strong>: Foi bom lembrar que nem sempre tínhamos certeza de tudo, mas as coisas foram acontecendo de forma linda. Tudo se encaixou no momento certo e se alinhou para ficarmos juntos. Conversamos sobre tudo desde o princípio, criando nossa base sem decisões precipitadas, mas com muita seriedade, fé em Deus e confiança um no outro.</p>
<p><strong>"Os Sonhos que Sonhamos"</strong>: Refletimos sobre a diferença entre paixão e amor, primeiramente. A paixão é o afeto, o interesse, o que chama a atenção. Já o amor é uma escolha diária, todos os dias eu escolho você para mim. Já vivemos coisas incríveis, mas ainda há tanto por vir! Temos uma vida inteira pela frente, com muitos planos, mas sem esquecer de viver o presente, que também é lindo.</p>
<p>E hoje escrevo <strong>"O Nosso Hoje"</strong>, a junção dessas reflexões em uma só: a celebração de 12 meses de relacionamento. É uma data tão incrível e significativa! É realmente emocionante ter chegado até aqui.</p>
<p>Durante este primeiro ano, sinto que nosso sentimento continua intenso como no começo (ou até mais). Aquela vontade de estar grudados o tempo todo, a necessidade do toque físico, a prioridade que damos um ao outro... nossas risadas, nossa intimidade como um casal maduro e os pequenos agradecimentos pelas coisas simples. Você está presente sempre, mesmo quando estamos longe. Temos um diálogo saudável, sem joguinhos ou mistérios. São coisas que faço questão de alimentar, e espero que seja assim por toda a vida!</p>
<p>​É tão bom reler nossas lembranças. Na terceira cartinha, eu escrevi: <em>"Hoje escrevo essa cartinha de 7 meses, e sei que um dia vamos rir de emoção ao ver as futuras… a de 1 ano, 2 anos, 7 anos… se Deus quiser!"</em>. Naquele momento, estávamos celebrando os 7 meses e projetando o futuro. Hoje, o "1 ano" chegou! E que venham os 2, os 7, os 10 anos... a vida toda!</p>
<p>Obrigado, meu amor, por estar aqui comigo. Você é a mulher dos meus sonhos, o amor da minha vida. Você é tudo que eu preciso e tudo que eu mais quero. Eu anseio por você todos os dias!</p>
<p><strong>Feliz 1 ano de namoro!</strong></p>`
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
            hint: 'A ordem mudou! Agora, organize as letras e o número em ordem crescente. Pense na sequência numérica e no alfabeto. 🔢🔡'
        },
        {
            password: '7WKGT',
            title: 'Impressionante! Você chegou longe.',
            subtitle: 'Agora o enigma se aprofunda. A ordem não é mais tão óbvia.',
            hint: 'O tempo foi a chave para as primeiras senhas, mas agora, o segredo está no valor de cada dia. Pegue a data completa de cada um dos cinco momentos especiais. Some cada dígito que forma o dia, o mês e o ano para encontrar seu verdadeiro valor numérico. A sequência correta é uma escalada: comece pelo símbolo com o menor valor e suba até o maior. Você está quase lá. O último enigma é uma prova do quanto cada momento conta. ✨'
        },
        {
            password: 'BXCNO',
            title: 'O Enigma Final',
            subtitle: 'Todas as peças, memórias e momentos levaram a isto.',
            hint: 'A lógica da soma foi a chave, e ela retorna para o desafio final. Desta vez, as datas não estão no papel, mas em cinco memórias que formaram nossa história: nosso primeiro olhar, nossa primeira conversa no whatsapp, nosso primeiro beijo, nosso primeiro encontro a sós e a data de partida da nossa melhor viagem juntos. A ordem da senha segue a linha do tempo desses momentos. Some os dígitos de cada data para encontrar seu valor numérico. Mas o que fazer com esses números? Eles são a matéria-prima, mas falta a ferramenta para dar-lhes forma.👀'
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
    const galleryImageWrapper = document.querySelector('.gallery-image-wrapper');
    const slidesContainer = document.getElementById('slides-container');
    const gallerySlideImages = slidesContainer.querySelectorAll('.gallery-slide-image');
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
    let isSliding = false; // Flag para evitar cliques rápidos durante a transição

    // --- LÓGICA PRINCIPAL DE INICIALIZAÇÃO (AGORA COM CHECAGEM DO LOCALSTORAGE) ---
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

            // REMOVIDO: Lógica de mostrar/esconder QR code/botão mobile (já feito)

            passwordInput.value = '';
            errorMessage.classList.add('hidden');
            hintText.classList.add('hidden');
            passwordInput.focus();

            transitionOverlay.classList.remove('active');
        }, 500);
    }

    function showContent() {
        // REMOVIDO: Lógica de esconder QR code/botão mobile (já feito)
        
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
        // NOVO: Adiciona um estado ao histórico do navegador
        history.pushState({ modal: 'letter' }, '');
    }

    function closeLetterModal() {
        letterModal.classList.add('hidden');
        body.classList.remove('modal-open');
        // NÃO faz history.back() aqui. O popstate já lidou com isso.
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
        if (!slidesContainer || gallerySlideImages.length === 0) {
            console.error('Erro: Elementos do carrossel não encontrados no HTML.');
            return;
        }

        updateSlideImages(currentPhotoIndex);
        slidesContainer.style.transform = 'translateX(-33.33%)';
        slidesContainer.style.transition = 'none';

        nextPhotoButton.addEventListener('click', () => {
            if (!isSliding) {
                showNextPhoto();
                resetPhotoInterval();
            }
        });
        prevPhotoButton.addEventListener('click', () => {
            if (!isSliding) {
                showPrevPhoto();
                resetPhotoInterval();
            }
        });

        resetPhotoInterval();

        zoomButton.addEventListener('click', openModal);
        modalClose.addEventListener('click', closeModal);
        photoModal.addEventListener('click', (e) => {
            if (e.target === photoModal) { closeModal(); }
        });

        modalNext.addEventListener('click', () => {
            showNextPhoto();
            modalImage.src = `images/${currentPhotoIndex + 1}.jpg`;
        });
        modalPrev.addEventListener('click', () => {
            showPrevPhoto();
            modalImage.src = `images/${currentPhotoIndex + 1}.jpg`;
        });

        document.addEventListener('keydown', (e) => {
            if (!photoModal.classList.contains('hidden')) {
                if (e.key === 'Escape') { closeModal(); }
                if (e.key === 'ArrowRight') { showNextPhoto(); modalImage.src = `images/${currentPhotoIndex + 1}.jpg`; }
                if (e.key === 'ArrowLeft') { showPrevPhoto(); modalImage.src = `images/${currentPhotoIndex + 1}.jpg`; }
            }
        });
    }

    function updateSlideImages(index) {
        const getPhotoSrc = (idx) => {
            if (idx < 0) idx = TOTAL_PHOTOS - 1;
            if (idx >= TOTAL_PHOTOS) idx = 0;
            return `images/${idx + 1}.jpg`;
        };

        gallerySlideImages[0].src = getPhotoSrc(index - 1);
        gallerySlideImages[1].src = getPhotoSrc(index);
        gallerySlideImages[2].src = getPhotoSrc(index + 1);

        photoCounter.textContent = `${index + 1} / ${TOTAL_PHOTOS}`;
    }

    function showNextPhoto() {
        if (isSliding) return;
        isSliding = true;

        currentPhotoIndex = (currentPhotoIndex + 1) % TOTAL_PHOTOS;

        slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        slidesContainer.style.transform = 'translateX(-66.66%)';

        setTimeout(() => {
            updateSlideImages(currentPhotoIndex);
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = 'translateX(-33.33%)';
            isSliding = false;
        }, 500);
    }

    function showPrevPhoto() {
        if (isSliding) return;
        isSliding = true;

        currentPhotoIndex = (currentPhotoIndex - 1 + TOTAL_PHOTOS) % TOTAL_PHOTOS;

        slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        slidesContainer.style.transform = 'translateX(0%)';

        setTimeout(() => {
            updateSlideImages(currentPhotoIndex);
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = 'translateX(-33.33%)';
            isSliding = false;
        }, 500);
    }

    function resetPhotoInterval() {
        clearInterval(photoInterval);
        photoInterval = setInterval(showNextPhoto, PHOTO_INTERVAL_MS);
    }

    function openModal() {
        clearInterval(photoInterval);
        modalImage.src = `images/${currentPhotoIndex + 1}.jpg`;
        photoModal.classList.remove('hidden');
        body.classList.add('modal-open');
        // NOVO: Adiciona um estado ao histórico do navegador
        history.pushState({ modal: 'photo' }, '');
    }

    function closeModal() {
        photoModal.classList.add('hidden');
        body.classList.remove('modal-open');
        resetPhotoInterval();
        // NÃO faz history.back() aqui. O popstate já lidou com isso.
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
            const isPlaying = audioPlayer.paused;
            if (isPlaying) {
                playSong();
            } else {
                pauseSong();
            }
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

    // --- NOVO: Listener global para o botão "Voltar" do navegador ---
    window.addEventListener('popstate', (event) => {
        // Prioriza fechar o modal de cartinha se estiver aberto
        if (!letterModal.classList.contains('hidden')) {
            closeLetterModal();
            // Empurra um novo estado para o histórico para "anular" o popstate original
            // e evitar que o navegador tente ir mais para trás.
            history.pushState(null, '', location.href); 
        } 
        // Senão, verifica se o modal de foto está aberto e o fecha
        else if (!photoModal.classList.contains('hidden')) {
            closeModal();
            // Empurra um novo estado para o histórico pelo mesmo motivo.
            history.pushState(null, '', location.href);
        }
    });

});