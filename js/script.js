const STORE = {
  questions: {
    accessibility: [
      {
        question: "Qual é o site oficial da Saneago?",
        code: `Online`,
        answers: [
          "www.saneago.com.br",
          "www.segundaviacontasaneago.com",
          "www.saneago.gov.br",
          "www.contasaneago.net",
        ],
        correctAnswer: "www.saneago.com.br",
      },
      {
        question:
          "Qual o primeiro passo para solicitar a 2ª via de um documento no Saneago",
        code: `Online`,
        answers: [
          "Ligar para o Saneago",
          "Acessar o site do Saneago",
          "Ir diretamente ao banco",
          "Pedir ajuda em um despachante",
        ],
        correctAnswer: "Acessar o site do Saneago",
      },
      {
        question:
          "Qual documento é necessário para solicitar a 2ª via do Certificado de Registro e Licenciamento de Veículo (2ª Via)?",
        code: ``,
        answers: [
          "Título de eleitor",
          "Carteira de Trabalho",
          "RG e CPF do proprietário",
          "Contrato de compra do veículo",
        ],
        correctAnswer: "RG e CPF do proprietário",
      },
      {
        question:
          "Qual a principal forma de pagamento aceita para a 2ª via no Saneago",
        code: ``,
        answers: [
          "Dinheiro em espécie",
          "Transferência por aplicativo",
          "Guia emitida e paga no banco",
          "Pix direto ao Saneago",
        ],
        correctAnswer: "Pix direto ao Saneago",
      },
      {
        question:
          "Quais são os bancos autorizados para pagamento de taxas do Saneago",
        code: ``,
        answers: [
          "Bradesco, Santander e Itaú",
          "Banco do Brasil, Caixa e Sicoob",
          "Nubank e PagSeguro",
          "Qualquer banco nacional",
        ],
        correctAnswer: "Qualquer banco nacional",
      },
    ],
    arrays: [
      {
        question:
          "Qual é o valor médio da taxa para emitir a 2ª via do 2ª Via em MG?",
        code: `Calculo`,
        answers: [
          "Isento de cobrança",
          "Entre R$ 20 e R$ 40",
          "Entre R$ 50 e R$ 100",
          "Mais de R$ 150",
        ],
        correctAnswer: "Isento de cobrança",
      },
      {
        question:
          "Se o veículo tiver multas pendentes, o que acontece ao tentar solicitar a 2ª via?",
        code: `Online`,
        answers: [
          "A solicitação é bloqueada até que as multas sejam quitadas",
          "A 2ª via é emitida normalmente",
          "As multas são adicionadas à guia da 2ª via",
          "Um aviso de advertência é emitido",
        ],
        correctAnswer:
          "A solicitação é bloqueada até que as multas sejam quitadas",
      },
      {
        question:
          "É necessário agendamento para retirar a 2ª via do documento presencialmente?",
        code: `Online`,
        answers: [
          "Sim, o agendamento é obrigatório",
          "Não, basta comparecer ao Saneago",
          "Apenas para veículos registrados em Belo Horizonte",
          "Não, mas é recomendável para evitar filas",
        ],
        correctAnswer: "Sim, o agendamento é obrigatório",
      },
      {
        question: "Qual o site oficial para acessar serviços do Saneago",
        code: `Online`,
        answers: [
          "www.Saneago.gov.br",
          "www.Saneago.mg.gov.br",
          "www.servicos.mg.Saneago.br",
          "www.cnhmg.com.br",
        ],
        correctAnswer: "www.Saneago.mg.gov.br",
      },
      {
        question:
          "Para que tipo de documento pode ser solicitada a 2ª via pelo Saneago",
        code: `Motorista`,
        answers: [
          "Apenas CNH",
          "Somente o 2ª Via",
          "CNH e 2ª Via",
          "Apenas documentos de terceiros",
        ],
        correctAnswer: "CNH e 2ª Via",
      },
    ],
    elements: [
      {
        question: "É possível solicitar a 2ª via do 2ª Via de forma online?",
        code: ``,
        answers: [
          "Não, apenas presencialmente",
          "Sim, pelo site do Saneago",
          "Sim, por mensagem no WhatsApp",
          "Não, apenas por despachantes",
        ],
        correctAnswer: "Sim, pelo site do Saneago",
      },
      {
        question:
          "Após o pagamento da guia, quanto tempo demora para a emissão da 2ª via do 2ª Via?",
        code: ``,
        answers: [
          "Imediatamente após o pagamento",
          "1 a 3 dias úteis",
          "5 a 10 dias úteis",
          "15 dias úteis",
        ],
        correctAnswer: "Imediatamente após o pagamento",
      },
      {
        question:
          "Qual é o valor médio da taxa para emitir a 2ª via do 2ª Via em MG?",
        code: `Calculo`,
        answers: [
          "Isento de cobrança",
          "Entre R$ 20 e R$ 40",
          "Entre R$ 50 e R$ 100",
          "Mais de R$ 150",
        ],
        correctAnswer: "Isento de cobrança",
      },
      {
        question:
          "Onde retirar a 2ª via do documento após solicitar e pagar a taxa?",
        code: ``,
        answers: [
          "Na agência bancária onde pagou a taxa",
          "Em qualquer posto de gasolina autorizado",
          "Na unidade do Saneago escolhida durante a solicitação",
          "Entregue diretamente pelo carteiro",
        ],
        correctAnswer: "Na unidade do Saneago escolhida durante a solicitação",
      },
      {
        question:
          "Qual é a penalidade por dirigir sem portar o 2ª Via válido??",
        code: `Penalidade`,
        answers: [
          "Multa leve e apreensão do veículo",
          "Multa grave e pontos na carteira",
          "Apenas uma advertência",
          "Nenhuma penalidade",
        ],
        correctAnswer: "Multa grave e pontos na carteira",
      },
    ],
    flexbox: [
      {
        question:
          "Para solicitar a 2ª via de documentos de veículos, quem pode fazer a solicitação?",
        code: ``,
        answers: [
          "Apenas o proprietário registrado",
          "Qualquer pessoa com o RG do proprietário",
          "Somente despachantes autorizados",
          "O proprietário ou um procurador legalmente autorizado",
        ],
        correctAnswer: "O proprietário ou um procurador legalmente autorizado",
      },
      {
        question:
          "Qual o primeiro passo para solicitar a 2ª via de um documento no Saneago",
        code: `.flex-container {
 ...
}`,
        answers: [
          "Ligar para o Saneago",
          "Acessar o site do Saneago",
          "Ir diretamente ao banco",
          "Pedir ajuda em um despachante",
        ],
        correctAnswer: "Acessar o site do Saneago",
      },
      {
        question:
          "Qual o primeiro passo para solicitar a 2ª via de um documento no Saneago",
        code: `Acesso`,
        answers: [
          "Ligar para o Saneago",
          "Acessar o site do Saneago",
          "Ir diretamente ao banco",
          "Pedir ajuda em um despachante",
        ],
        correctAnswer: "Acessar o site do Saneago",
      },
      {
        question:
          "Para onde entram em contato caso haja problemas com a guia de pagamento?",
        code: ``,
        answers: [
          "Diretamente no banco autorizado",
          "No telefone da Ouvidoria do Saneago",
          "Por meio de um despachante",
          "No aplicativo do governo estadual",
        ],
        correctAnswer: "No telefone da Ouvidoria do Saneago",
      },
      {
        question:
          "Qual o nome do sistema que permite acessar o 2ª Via digital?",
        code: `-e`,
        answers: [
          "2ª Via-e",
          "SaneagoDigital",
          "CNH Digital",
          "CarteiraVeicular",
        ],
        correctAnswer: "2ª Via-e",
      },
    ],
    forms: [
      {
        question:
          "Onde encontrar o código RENAVAM necessário para emitir a 2ª via?",
        code: ``,
        answers: [
          "No 2ª Via antigo ou no site do Saneago",
          "Apenas no documento original",
          "No banco autorizado",
          "Na placa do veículo",
        ],
        correctAnswer: "No 2ª Via antigo ou no site do Saneago",
      },
      {
        question: "Quem deve pagar a taxa de emissão da 2ª via?",
        code: ``,
        answers: [
          "Apenas o proprietário registrado",
          "Qualquer pessoa que tenha o número do RENAVAM",
          "Apenas quem recebeu multas recentes",
          "Apenas motoristas profissionais",
        ],
        correctAnswer: "Apenas o proprietário registrado",
      },
      {
        question:
          "Caso o veículo tenha financiamento ativo, o que é necessário para solicitar a 2ª via do 2ª Via?",
        code: ``,
        answers: [
          "Documento do banco autorizando",
          "Apenas o RG e CPF do proprietário",
          "A 2ª via não pode ser solicitada",
          "Quitação antecipada do financiamento",
        ],
        correctAnswer: "Apenas o RG e CPF do proprietário",
      },
      {
        question:
          "Em caso de perda ou furto do documento do veículo, o que é necessário antes de solicitar a 2ª via?",
        code: ``,
        answers: [
          "Fazer um boletim de ocorrência",
          "Pedir autorização do banco financiador",
          "Consultar a validade da CNH",
          "Pagar a taxa sem necessidade de comprovação",
        ],
        correctAnswer: "Fazer um boletim de ocorrência",
      },
      {
        question:
          "Qual documento é exigido para comprovar a propriedade do veículo no Saneago",
        code: ``,
        answers: [
          "Nota fiscal do veículo",
          "Certificado de Registro de Veículo (CRV)",
          "CPF do antigo proprietário",
          "Comprovante de endereço atualizado",
        ],
        correctAnswer: "Certificado de Registro de Veículo (CRV)",
      },
    ],
    loops: [
      {
        question:
          "A 2ª via do 2ª Via digital pode ser acessada por qual aplicativo?",
        code: ``,
        answers: [
          "Saneago Digital",
          "Carteira Digital de Trânsito (CDT)",
          "Meu INSS",
          "Portal Gov.br",
        ],
        correctAnswer: "Carteira Digital de Trânsito (CDT)",
      },
      {
        question:
          "Qual é o prazo máximo para pagamento da guia emitida pelo Saneago",
        code: ``,
        answers: [
          "24 horas",
          "7 dias úteis",
          "Até a data de vencimento informada no boleto",
          "Não há prazo definido",
        ],
        correctAnswer: "Até a data de vencimento informada no boleto",
      },
      {
        question:
          "Em caso de dúvidas sobre a taxa, qual o canal mais indicado para obter informações?",
        code: ``,
        answers: [
          "Chat online no site do Saneago",
          "Ouvidoria da Prefeitura",
          "Central de atendimento do Saneago",
          "Aplicativo de mensagens do governo",
        ],
        correctAnswer: "Central de atendimento do Saneago",
      },
      {
        question:
          "É possível solicitar a 2ª via do 2ª Via para veículos com IPVA atrasado?",
        code: ``,
        answers: [
          "Sim, mas apenas presencialmente",
          "Sim, se o atraso for menor que 30 dias",
          "Não, é necessário regularizar o IPVA primeiro",
          "Depende do tipo de veículo",
        ],
        correctAnswer: "Não, é necessário regularizar o IPVA primeiro",
      },
      {
        question:
          "Em qual horário as unidades do Saneago geralmente funcionam para retirada de documentos?",
        code: ``,
        answers: [
          "Das 7h às 12h",
          "Das 8h às 17h",
          "Apenas no período da tarde",
          "Depende da unidade, mas geralmente das 9h às 16h",
        ],
        correctAnswer: "Das 8h às 17h",
      },
    ],
    methods: [
      {
        question: "Quem é responsável por emitir o 2ª Via-e?",
        code: ``,
        answers: [
          "Secretaria de Fazenda do Estado",
          "O proprietário, por meio do sistema digital",
          "O banco onde foi pago o boleto",
          "Saneago, após a confirmação do pagamento",
        ],
        correctAnswer: "Saneago, após a confirmação do pagamento",
      },
      {
        question:
          "O que deve ser feito se a guia de pagamento não for gerada corretamente no site do Saneago",
        code: ``,
        answers: [
          "Fazer login novamente e tentar gerar outra",
          "Procurar uma unidade presencialmente",
          "Entrar em contato com o suporte técnico do site",
          "Aguardar 48 horas para tentar novamente",
        ],
        correctAnswer: "Entrar em contato com o suporte técnico do site",
      },
      {
        question:
          "Qual é o principal motivo para que o pedido de 2ª via seja recusado?",
        code: ``,
        answers: [
          "Documentos do proprietário incompletos",
          "Pagamento feito fora do prazo",
          "Débitos ou restrições no veículo",
          "Solicitação feita em nome de terceiros",
        ],
        correctAnswer: "Débitos ou restrições no veículo",
      },
      {
        question:
          "Em qual seção do site do Saneago você pode solicitar a 2ª via do 2ª Via?",
        code: ``,
        answers: [
          "Renovação de CNH",
          "Veículos",
          "Consulta de Infrações",
          "Atendimento ao Cidadão",
        ],
        correctAnswer: "Veículos",
      },
      {
        question:
          "Qual é o principal meio de recebimento da 2ª via do 2ª Via em formato digital?",
        code: ``,
        answers: [
          "E-mail cadastrado no Saneago",
          "Aplicativo Carteira Digital de Trânsito (CDT)",
          "WhatsApp do Saneago",
          "Download direto do site do Saneago",
        ],
        correctAnswer: "Aplicativo Carteira Digital de Trânsito (CDT)",
      },
    ],
    CSS: [
      {
        question:
          "O que acontece se você não portar o 2ª Via durante uma fiscalização?",
        code: ``,
        answers: [
          "O veículo pode ser retido até a apresentação do documento",
          "Apenas um aviso será emitido",
          "O motorista será multado e o veículo removido",
          "Não há penalidade para casos de esquecimento",
        ],
        correctAnswer:
          "O veículo pode ser retido até a apresentação do documento",
      },
      {
        question:
          "É necessário fazer vistoria no veículo para solicitar a 2ª via do 2ª Via?",
        code: ``,
        answers: [
          "Sim, sempre",
          "Não, apenas em casos específicos",
          "Sim, mas somente para veículos com mais de 10 anos",
          "Não, a vistoria nunca é exigida",
        ],
        correctAnswer: "Não, apenas em casos específicos",
      },
      {
        question:
          "Qual o nome do documento que substitui o 2ª Via físico atualmente?",
        code: ``,
        answers: [
          "2ª Via Digital (2ª Via-e)",
          "Documento de Trânsito Nacional",
          "Registro Digital de Veículos",
          "CNH Provisória",
        ],
        correctAnswer: "2ª Via Digital (2ª Via-e)",
      },
      {
        question:
          "Quais são as formas de pagamento da taxa de 2ª via aceitas pelo Saneago",
        code: ``,
        answers: [
          "Apenas boleto bancário",
          "Boleto bancário e cartão de débito",
          "Boleto, Pix e cartão de crédito",
          "Apenas cartão de crédito",
        ],
        correctAnswer: "Boleto bancário e cartão de débito",
      },
      {
        question: "Solicite 2ª Via Saneago Online?",
        code: ``,
        answers: [
          "Pague Sua 2ª Via do 2ª Via Agora",
          "Resolva Multas e Emita o 2ª Via",
          "Guia Rápida para a 2ª Via do Saneago",
          "Evite Multas: 2ª Via Fácil e Rápido",
        ],
        correctAnswer: "Pague Sua 2ª Via do 2ª Via Agora",
      },
    ],
    conditionals: [
      {
        question: "Emissão Rápida do 2ª Via Digital?",
        code: ``,
        answers: [
          "Guia Completa para Documentos Saneago",
          "2ª Via do 2ª Via com Suporte Completo",
          "Renove Já Seus Documentos no Saneago",
          "Solicite 2ª Via Saneago Online",
        ],
        correctAnswer: "Solicite 2ª Via Saneago Online",
      },
      {
        question: "Resolva Multas e Emita o 2ª Via?",
        code: ``,
        answers: [
          "Guia Rápida para a 2ª Via do Saneago",
          "Evite Multas: 2ª Via Fácil e Rápido",
          "2ª Via de Documentos no Saneago",
          "Emissão Rápida do 2ª Via Digital",
        ],
        correctAnswer: "Emissão Rápida do 2ª Via Digital",
      },
      {
        question: "Guia Completa para Documentos Saneago?",
        code: ``,
        answers: [
          "2ª Via do 2ª Via com Suporte Completo",
          "Renove Já Seus Documentos no Saneago",
          "Resolva Multas e Emita o 2ª Via",
          "Guia Rápida para a 2ª Via do Saneago",
        ],
        correctAnswer: "Guia Rápida para a 2ª Via do Saneago",
      },
      {
        question: "Evite Multas: 2ª Via Fácil e Rápido?",
        code: ``,
        answers: [
          "2ª Via de Documentos no Saneago",
          "Emissão Rápida do 2ª Via Digital",
          "Guia Completa para Documentos Saneago",
          "2ª Via do 2ª Via com Suporte Completo",
        ],
        correctAnswer: "2ª Via do 2ª Via com Suporte Completo",
      },
      {
        question: "Renove Já Seus Documentos no Saneago?",
        code: ``,
        answers: [
          "Solicite 2ª Via Saneago Online",
          "Pague Sua 2ª Via do 2ª Via Agora",
          "Resolva Multas e Emita o 2ª Via",
          "Guia Rápida para a 2ª Via do Saneago",
        ],
        correctAnswer: "Guia Rápida para a 2ª Via do Saneago",
      },
    ],
    objects: [
      {
        question: "Evite Multas: 2ª Via Fácil e Rápido?",
        code: ``,
        answers: [
          "2ª Via de Documentos no Saneago",
          "Emissão Rápida do 2ª Via Digital",
          "Guia Completa para Documentos Saneago",
          "2ª Via do 2ª Via com Suporte Completo",
        ],
        correctAnswer: "2ª Via do 2ª Via com Suporte Completo",
      },
      {
        question: "Renove Já Seus Documentos no Saneago?",
        code: ``,
        answers: [
          "Solicite 2ª Via Saneago Online",
          "Pague Sua 2ª Via do 2ª Via Agora",
          "Resolva Multas e Emita o 2ª Via",
          "Guia Rápida para a 2ª Via do Saneago",
        ],
        correctAnswer: "Guia Rápida para a 2ª Via do Saneago",
      },
      {
        question: "Guia Rápida para a 2ª Via do Saneago?",
        code: ``,
        answers: [
          "Evite Multas: 2ª Via Fácil e Rápido",
          "2ª Via de Documentos no Saneago",
          "Emissão Rápida do 2ª Via Digital",
          "Guia Completa para Documentos Saneago",
        ],
        correctAnswer: "2ª Via do 2ª Via com Suporte Completo",
      },
      {
        question: "Renove Já Seus Documentos no Saneago?",
        code: ``,
        answers: [
          "Solicite 2ª Via Saneago Online",
          "Pague Sua 2ª Via do 2ª Via Agora",
          "Resolva Multas e Emita o 2ª Via",
          "Guia Rápida para a 2ª Via do Saneago",
        ],
        correctAnswer: "Guia Rápida para a 2ª Via do Saneago",
      },
      {
        question: "Evite Multas: 2ª Via Fácil e Rápido?",
        code: ``,
        answers: [
          "2ª Via de Documentos no Saneago",
          "Emissão Rápida do 2ª Via Digital",
          "Guia Completa para Documentos Saneago",
          "2ª Via do 2ª Via com Suporte Completo",
        ],
        correctAnswer: "Guia Completa para Documentos Saneago",
      },
    ],
  },
};

// Make the quiz. Create a model for our app's state
function makeQuiz() {
  // Creating an object to store the app's state when beginning the quiz
  return {
    // Gathering a random question out of the available questions for each category
    questions: helpers.getRandomQuestions(STORE),
    // Boolean for if the quiz is in progress or not
    midQuiz: false,
    // Array of correct/incorrect answers to use for our progress bar
    progress: {
      progressBar: [],
      incorrectCategories: [],
    },
    // Boolean to determine if the end state should display
    completed: false,
    // Monitoring which question we are currently on
    currentQuestion: 0,
    // Keeps track of total correct answers
    correctAnswers: 0,
    // Keeps current selected answer
    currentAnswer: "",
    // Keeps track of % completed
    percCorrect: 0,
  };
}

// Apply fadeOut animations and set the stage for DOM text/element changes
function $fade(appState) {
  // This is the completed state of of a quiz
  if (appState.completed) {
    // Fade out elements with a promise to avoid choppy behavior
    $.when(
      $(".question-answer-wrapper, .question-wrapper, .answer-wrapper").fadeOut(
        500
      )
    ).done(function () {
      // Display results of the quiz
      $showResults(appState);
      $(".results-wrapper").hide().removeClass("hide");
      $(".question-answer-wrapper, .results-wrapper").fadeIn(500);
    });

    // This is if the app is just starting
  } else if (appState.midQuiz === false) {
    // Set a flag that the app has begun
    appState.midQuiz = true;
    // Fade out elements with a promise to avoid choppy behavior
    $.when(
      $(
        ".question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar"
      ).fadeOut(500)
    ).done(function () {
      // Remove any progress from a previous quiz (if any);
      helpers.updateProgressBar(appState);
      $(".progress-count").html("1 / 10");
      $(".progress-perc").html("");
      // Kill previous results
      $(".failures").remove();
      // Lots to do... mostly just setting up a new environment for a new quiz
      $updateQuestion(appState);
      $("progress-bar").empty();
      $("progress-fill").html(
        'Progress: <span class="progress-count">1 / 10</span><span class="progress-perc"></span>'
      );
      $(".question-answer-wrapper, .answer-wrapper").removeClass("begin");
      $(".submit-btn, .progress, .progress-bar").removeClass("hide");
      $(".progress, .progress-bar").hide();
      $(
        ".question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar"
      ).fadeIn(500);
      if (!$(".code").hasClass("hide")) {
        $(".code").fadeIn(500);
      }
    });

    // This is if the app is in the middle of execution
  } else if (appState.midQuiz) {
    $.when(
      $(".question-answer-wrapper, .question-wrapper, .answer-wrapper").fadeOut(
        500
      )
    ).done(function () {
      $updateQuestion(appState);
      $(".question-answer-wrapper, .question-wrapper, .answer-wrapper").fadeIn(
        500
      );
    });
  }
}

// Work in progress...
function $showResults(appState) {
  if (appState.correctAnswers === 10) {
    let endMsg = `Você está ${appState.percCorrect}% correct!
Continue tentando!
`;
  } else {
    $(".answer-btn").remove();
    let endMsg = `Você está ${appState.percCorrect}% correct!`;
    let endFeedback = ``;
    if (appState.progress.incorrectCategories.length === 0) {
      endFeedback = `You aced it! Good job!`;
    } else {
      endFeedback = `You may want to study up on the following categories:`;
    }

    $(".quiz-end-score").html(endMsg);
    let $failList = $('<ul class="failures"></ul>');
    appState.progress.incorrectCategories.map((cat) => {
      $failList.append("<li class='category'>" + cat + "</li>");
    });
    $(".quiz-end-feedback-p").html(endFeedback);
    $(".quiz-end-categories").append($failList);
    $(".results-wrapper").removeClass("hide").css("display", "flex");
    $(
      ".question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn"
    )
      .css("display", "flex")
      .fadeIn(500);
  }
}

// Update the question, code, answers, buttons in the DOM while we're in a faded out state
function $updateQuestion(appState) {
  $(".answer-btn").remove();

  // Update the question and code text with the current question
  $(".question").html(appState.questions[appState.currentQuestion].question);

  // This is a hack to hide/show the code portion
  // Only 1/3 of the questions contain code so we hide it if they aren't present
  if (appState.questions[appState.currentQuestion].code == ``) {
    $(".code").addClass("hide");
  } else {
    $(".code").removeClass("hide");
    $(".code").html(
      `<pre>${appState.questions[appState.currentQuestion].code}</pre>`
    );
  }

  // Change continue back to submit
  $(".continue-btn")
    .val("Submit")
    .removeClass("continue-btn")
    .addClass("submit-btn")
    .prop("disabled", true);

  // Add in available answers for the question
  let $answers = [];

  // Adding the answers to a temporary array
  for (
    let i = 0;
    i < appState.questions[appState.currentQuestion].answers.length;
    i++
  ) {
    // Add current question answers to an array
    let $answer = $('<button class="answer-btn" type="button"></button>');
    $answer.html(appState.questions[appState.currentQuestion].answers[i]);
    $answers.push($answer);
  }

  // Shuffle the answers
  helpers.shuffleAnswers($answers);

  // Push answers to the DOM
  $answers.forEach((answer) => {
    $(".answer-wrapper").prepend(answer);
  });
}

// Simple class and enable/disable DOM selection when answer is selected
function selectAnswer(answer) {
  $(".answer-btn").removeClass("selected");
  answer.addClass("selected");
  $(".submit-btn").prop("disabled", false);
}

// Answer is selected and submitted
// Push a feedback state
function submitAnswer(appState) {
  // This will be returned true or false based on their answer
  let correct;

  // Add styles to the answers to show if their answer was correct or not
  $(".answer-btn").each(function () {
    if (
      $(this).html() ===
      appState.questions[appState.currentQuestion].correctAnswer
    ) {
      $(this).addClass("pass");
      // If answer is correct and selected...
      if ($(this).hasClass("selected")) {
        correct = "pass";
        appState.correctAnswers++;
        appState.questions[appState.currentQuestion];
      }

      // Handle correct answer if selected answer is incorrect
    } else if ($(this).hasClass("selected")) {
      $(this).addClass("fail dim-answer");
      correct = "fail";
      appState.progress.incorrectCategories.push(
        appState.questions[appState.currentQuestion].category
      );

      // Dim the other answers to make the correct one more prevalent
    } else {
      $(this).addClass("dim-answer");
    }
  });

  // Add a progress bar indicator to our appState object
  appState.progress.progressBar.push(
    `<div class="progress-indicator ${correct}"></div>`
  );

  // Update our percent correct (parse a float and set it to a fixed percentage)
  appState.percCorrect = parseFloat(
    (appState.correctAnswers / (appState.currentQuestion + 1)) * 100
  ).toFixed();

  // Update our current question VS total quiz length
  $(".progress-count").html(`
		${appState.currentQuestion + 1} / ${appState.questions.length}
	`);

  // Update our current correct percentage
  $(".progress-perc").html(`
		 // ${appState.percCorrect}% Correct
	`);

  // Change submit back to continue
  $(".submit-btn")
    .val("Continue")
    .removeClass("submit-btn")
    .addClass("continue-btn");

  // Disable selecting answers
  $(".answer-btn").prop("disabled", true);

  // Update our progress-bar DOM
  helpers.updateProgressBar(appState);

  // Continue to next question
  appState.currentQuestion++;

  // Verify if we're done or not
  if (appState.currentQuestion === appState.questions.length) {
    appState.completed = true;
  }
}

// Silly easter egg for saying you don't want to do the quiz
function killQuiz() {
  $(".start-quiz, .quit-quiz").hide();
  let failureMsg =
    "Você não cresceu. Você não melhorou. Você pegou um atalho e não ganhou nada. Você experimentou uma vitória vazia. Nada foi arriscado e nada foi ganho. É triste que você não saiba a diferença...";
  let msgSplit = failureMsg.split(" ");
  let counter = 0;
  $(".question").empty();
  let startTroll = setInterval(function () {
    $(".question").append(msgSplit[counter] + " ");
    counter++;
    if (counter > msgSplit.length - 1) {
      clearInterval(startTroll);
      $(".start-quiz").text("You can do it! Start Quiz").fadeIn(500);
    }
  }, 250);
}

// These are simple algorithms to modify data that don't need an individual function
let helpers = {
  // Pick a random question from the available ones
  pickRandomQ: function (obj, section) {
    return Math.floor(Math.random() * obj.questions[section].length);
  },
  // Gather a random question from every category
  getRandomQuestions: function (obj) {
    let questions = [];
    let categories = Object.keys(obj.questions);
    categories.forEach((cat) => {
      let randomQ = this.pickRandomQ(obj, cat);
      let question = obj.questions[cat][randomQ];
      question.category = cat;
      questions.push(question);
    });
    return questions;
  },
  // Shuffle the answers so they don't appear in the same order
  shuffleAnswers: function (arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  },
  // Update progress bar DOM element
  updateProgressBar: function (appState) {
    $(".progress-bar").empty();
    appState.progress.progressBar.forEach((progInd) => {
      $(".progress-bar").append(progInd);
    });
  },
};

// Lets start the show
$(function () {
  // Kill any form refresh
  $(".answer-wrapper").on("submit", function (e) {
    e.preventDefault();
  });

  // Storage for quiz app state
  let quizData;

  // Start quiz
  $(".start-quiz, .retry-btn").on("click", function () {
    quizData = makeQuiz();
    $fade(quizData);
  });

  // Select an answer
  $(".question-answer-wrapper").on("click", ".answer-btn", function () {
    selectAnswer($(this));
  });

  // Submit your answer to display feedback and advance question counter
  $(".question-answer-wrapper").on("click", ".submit-btn", function (e) {
    submitAnswer(quizData);
  });

  // Submit your answer to display feedback and advance question counter
  $(".question-answer-wrapper").on("click", ".continue-btn", function () {
    $fade(quizData);
  });

  // Easter egg to chastize the user
  $(".quit-quiz").on("click", function () {
    killQuiz();
  });
});
