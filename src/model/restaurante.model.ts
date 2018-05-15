import { Produto } from "./produto.model";

export interface Restaurante{

    id?: number;
    nomeEstabelecimento?: string;
    descricao?: string;
    cardapio?: Produto[];
}