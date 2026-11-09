import { ItemAcervo } from "./ItemAcervo";
import { Reservavel } from "./Reservavel";

export class Livro extends ItemAcervo implements Reservavel {
  private _nomeReservante: string | null = null;

  constructor(
    id: number,
    titulo: string,
    anoPublicacao: number,
    private autor: string
  ) {
    super(id, titulo, anoPublicacao);
    if (!autor.trim()) {
      throw new Error("O autor não pode ser vazio.");
    }
  }

  public get nomeReservante(): string | null {
    return this._nomeReservante;
  }

  public reservar(nomePessoa: string): void {
    if (!nomePessoa.trim()) {
      throw new Error("Informe o nome de quem fará a reserva.");
    }
    if (this.estaEmprestado) {
      throw new Error("Não é possível reservar um livro já emprestado.");
    }
    if (this._nomeReservante !== null) {
      throw new Error("Este livro já possui uma reserva.");
    }
    this._nomeReservante = nomePessoa;
  }

  public cancelarReserva(): void {
    if (this._nomeReservante === null) {
      throw new Error("Este livro não possui reserva.");
    }
    this._nomeReservante = null;
  }

  public override calcularMulta(diasAtraso: number): number {
    this.validarDiasAtraso(diasAtraso);
    return diasAtraso * 1.5;
  }

  public override exibirDetalhes(): string {
    return `${super.exibirDetalhes()} | Livro | Autor: ${this.autor} | Reserva: ${this._nomeReservante ?? "Nenhuma"}`;
  }

  private validarDiasAtraso(dias: number): void {
    if (!Number.isInteger(dias) || dias < 0) {
      throw new Error("Os dias de atraso devem ser um inteiro maior ou igual a zero.");
    }
  }
}