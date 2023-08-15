class Filme {
    constructor(titulo, ano, genero, duracao) {
      this.titulo = titulo;
      this.ano = ano;
      this.genero = genero;
      this.duracao = duracao;
      this.assistido = false;
      this.avaliacao = null;
    }
  
    exibirDetalhes() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Ano: ${this.ano}`);
      console.log(`Gênero: ${this.genero}`);
      console.log(`Duração: ${this.duracao} minutos`);
      console.log(`Assistido: ${this.assistido ? 'Sim' : 'Não'}`);
      if (this.assistido && this.avaliacao !== null) {
        console.log(`Avaliação: ${this.avaliacao}`);
      }
    }
  
    marcarComoAssistido() {
      this.assistido = true;
    }
  
    avaliarFilme(avaliacao) {
      if (this.assistido) {
        this.avaliacao = avaliacao;
      } else {
        console.log('Você só pode avaliar um filme depois de assisti-lo.');
      }
    }
  }
  
  const filme1 = new Filme('Cinderela', 1950, 'Musical/Fantasia', 76);
  const filme2 = new Filme('Bambi', 1942, 'Infantil/Fantasia', 70);
  const filme3 = new Filme('Branca de Neve e os Sete Anões', 1937, 'Fantasia/Musical', 83);
  
  console.log('Detalhes dos filmes antes de marcar como assistidos ou avaliar:');
  filme1.exibirDetalhes();
  console.log('---------------');
  filme2.exibirDetalhes();
  console.log('---------------');
  filme3.exibirDetalhes();
  console.log('---------------');
  
  filme1.marcarComoAssistido();
  filme1.avaliarFilme(7.0);
  
  filme2.marcarComoAssistido();
  filme2.avaliarFilme(8.0);
  
  console.log('Detalhes dos filmes após marcar como assistidos e avaliar:');
  filme1.exibirDetalhes();
  console.log('---------------');
  filme2.exibirDetalhes();
  console.log('---------------');
  filme3.exibirDetalhes();
  