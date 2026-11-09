export interface Reservavel {
  reservar(nomePessoa: string): void;
  cancelarReserva(): void;
  get nomeReservante(): string | null;
}