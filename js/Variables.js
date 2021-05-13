import { Medidor_de_Peso, Medidor_de_Volumen, Medidor_de_Temperatura } from "./Medidores.js";

/// Medidores de Volumen
export const mililitros = new Medidor_de_Volumen("mililitros", 1);
export const litros = new Medidor_de_Volumen("litros", 1000,);
export const tazas = new Medidor_de_Volumen("tazas", 250);
export const cucharadas = new Medidor_de_Volumen("cucharadas", 15);
export const unidades_de_volumen = [mililitros, litros, tazas, cucharadas];

/// Medidores de Peso///
export const miligramos = new Medidor_de_Peso("miligramos", 0.001);
export const gramos = new Medidor_de_Peso("gramos", 1,);
export const kilogramos = new Medidor_de_Peso("kilogramos", 1000);
export const libras = new Medidor_de_Peso("libras", 0.00220462);
export const unidades_de_peso = [miligramos, gramos, kilogramos, libras];

/// Medidores de Temperatura///
export const centigrados = new Medidor_de_Temperatura("centigrados", 1);
export const fahrenheit = new Medidor_de_Temperatura("fahrenheit", 33.8);
export const unidades_de_temperatura = [centigrados, fahrenheit];

/// Todos los Medidores
export const todas_unidades_de_medidas =[unidades_de_volumen, unidades_de_peso, unidades_de_temperatura]