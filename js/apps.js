import * as Funciones from "./Funciones.js"
import * as Guardar from "./Storage.js"

Funciones.captura_y_proceso_de_datos()

console.log("\nunidades de volumen enJSON:")
console.log(Guardar.unidades_de_volumen_enJSON)

console.log("\nunidades de volumen parseJSON desde el local Storage:")
Guardar.unidad_parseada()

Funciones.animacion()
Funciones.ajax()