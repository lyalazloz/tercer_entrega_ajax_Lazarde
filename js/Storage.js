import * as Vari from "./Variables.js"
import { guardarLocal } from "./Funciones.js";


for (let unidad_de_volumen of Vari.unidades_de_volumen) {
guardarLocal(unidad_de_volumen.obtener_nombre_medida, JSON.stringify(Vari.unidades_de_volumen));
}

export let unidades_de_volumen_enJSON = JSON.stringify(Vari.unidades_de_volumen);

guardarLocal("Unidades_enJSON", unidades_de_volumen_enJSON)


export let unidades_de_volumen_parseJSON = JSON.parse(localStorage.getItem("Unidades_enJSON"));

export function unidad_parseada (){
    for (let unidad in unidades_de_volumen_parseJSON){
        console.log(unidades_de_volumen_parseJSON[unidad].nombre_medida);
    }
}