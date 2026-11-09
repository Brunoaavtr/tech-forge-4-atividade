import { Acervo } from "./Acervo";

function executarExemplo(): void {
  const acervo = new Acervo();

  console.log("=== SISTEMA DE GERENCIAMENTO DE ACERVO ===\n");

  const livro = acervo.cadastrarLivro("O Hobbit", 1937, "J. R. R. Tolkien");
  const jogo = acervo.cadastrarJogo("The Legend of Zelda: Breath of the Wild", 2017, "Nintendo Switch");

  console.log("Itens cadastrados:");
  acervo.listarItens().forEach((item) => console.log(item.exibirDetalhes()));

  console.log("\n--- Empréstimo e reserva ---");
  livro.emprestar();
  console.log(livro.exibirDetalhes());

  try {
    livro.reservar("Maria");
  } catch (erro) {
    console.log(`Reserva não realizada: ${(erro as Error).message}`);
  }

  livro.devolver();
  livro.reservar("Maria");
  console.log(`Livro reservado para: ${livro.nomeReservante}`);

  console.log("\n--- Cálculo de multas ---");
  console.log(`Multa do livro por 4 dias: R$ ${livro.calcularMulta(4).toFixed(2)}`);
  console.log(`Multa do jogo por 4 dias: R$ ${jogo.calcularMulta(4).toFixed(2)}`);

  console.log("\n--- Busca no repositório genérico ---");
  const encontrado = acervo.buscarItem(jogo.id);
  console.log(encontrado ? encontrado.exibirDetalhes() : "Item não encontrado.");

  console.log(`\nTotal de itens no acervo: ${acervo.listarItens().length}`);
}

try {
  executarExemplo();
} catch (erro) {
  console.error("Erro na aplicação:", (erro as Error).message);
}