import { ItemAcervo } from "./ItemAcervo";

export class JogoEletronico extends ItemAcervo {
  constructor(
    id: number,
    titulo: string,
    anoPublicacao: number,
    private plataforma: string
  ) {
    super(id, titulo, anoPublicacao);
    if (!plataforma.trim()) {
      throw new Error("A plataforma não pode ser vazia.");
    }
  }

  public override calcularMulta(diasAtraso: number): number {
    if (!Number.isInteger(diasAtraso) || diasAtraso < 0) {
      throw new Error("Os dias de atraso devem ser um inteiro maior ou igual a zero.");
    }
    return diasAtraso * 3.0;
  }

  public override exibirDetalhes(): string {
    return `${super.exibirDetalhes()} | Jogo eletrônico | Plataforma: ${this.plataforma}`;
  }
}