export interface IOrder {
  number: string;
  cliente: {
    nome: string;
  };
  quantidadePessoas: number;
  tempoTotal: number;
  isLate?: boolean;
}
