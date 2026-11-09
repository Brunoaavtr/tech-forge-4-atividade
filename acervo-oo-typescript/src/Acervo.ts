import { ItemAcervo } from "./ItemAcervo";
import { Livro } from "./Livro";
import { JogoEletronico } from "./JogoEletronico";
import { RepositorioMemoria } from "./RepositorioMemoria";

export class Acervo {
  private static _contadorId: number = 1;
  private repositorio = new RepositorioMemoria<ItemAcervo>();

  private gerarId(): number {
    return Acervo._contadorId++;
  }

  public cadastrarLivro(titulo: string, ano: number, autor: string): Livro {
    const livro = new Livro(this.gerarId(), titulo, ano, autor);
    this.repositorio.adicionar(livro);
    return livro;
  }

  public cadastrarJogo(titulo: string, ano: number, plataforma: string): JogoEletronico {
    const jogo = new JogoEletronico(this.gerarId(), titulo, ano, plataforma);
    this.repositorio.adicionar(jogo);
    return jogo;
  }

  public listarItens(): readonly ItemAcervo[] {
    return this.repositorio.listar();
  }

  public buscarItem(id: number): ItemAcervo | undefined {
    return this.repositorio.buscarPorId(id);
  }

  public removerItem(id: number): boolean {
    const item = this.buscarItem(id);
    if (!item) return false;
    if (item.estaEmprestado) {
      throw new Error("Não é possível remover um item emprestado.");
    }
    return this.repositorio.remover(id);
  }
}