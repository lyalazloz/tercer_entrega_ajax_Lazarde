import { Medidor_de_Volumen } from "./Medidores.js";

export const mililitros = new Medidor_de_Volumen("mililitros", 1);
export const litros = new Medidor_de_Volumen("litros", 1000,);
export const tazas = new Medidor_de_Volumen("tazas", 250);
export const cucharadas = new Medidor_de_Volumen("cucharadas", 15);
export const unidades_de_volumen = [mililitros, litros, tazas, cucharadas];
