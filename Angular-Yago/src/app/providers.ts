import {Product} from "./products";

export interface Provider {
    id: number;
    nombre: string;
    pais: string;
    products: Product[];
}