export abstract class ItemAcervo {
  private _emprestado: boolean = false;

  constructor(
    public readonly id: number,
    private titulo: string,
    private anoPublicacao: number
  ) {
    if (!titulo.trim()) {
      throw new Error("O título não pode ser vazio.");
    }
    if (anoPublicacao <= 0) {
      throw new Error("O ano de publicação deve ser válido.");
    }
  }

  public getTitulo(): string {
    return this.titulo;
  }

  public getAnoPublicacao(): number {
    return this.anoPublicacao;
  }

  public get statusDisponibilidade(): string {
    return this._emprestado ? "Emprestado" : "Disponível";
  }

  public get estaEmprestado(): boolean {
    return this._emprestado;
  }

  public emprestar(): void {
    if (this._emprestado) {
      throw new Error(`"${this.titulo}" já está emprestado.`);
    }
    this._emprestado = true;
  }

  public devolver(): void {
    if (!this._emprestado) {
      throw new Error(`"${this.titulo}" não está emprestado.`);
    }
    this._emprestado = false;
  }

  public abstract calcularMulta(diasAtraso: number): number;

  public exibirDetalhes(): string {
    return `ID: ${this.id} | ${this.titulo} (${this.anoPublicacao}) | ${this.statusDisponibilidade}`;
  }
}