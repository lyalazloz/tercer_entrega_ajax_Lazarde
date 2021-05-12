class Medidor {

    constructor(nombre_medida, valor_base) {
        this.nombre_medida  = nombre_medida;
        this.valor_medida = 1;
        this.valor_base = parseFloat(valor_base);
        this.nombre_medida_base = " ";
    }

    get obtener_nombre_medida() {
        return this.nombre_medida;
    }

    get obtener_valor_medida() {
        return this.valor_medida;
    }

    set cambiar_valor_medida(nuevo_valor_medida) {
        this.valor_medida = nuevo_valor_medida;
    }

    get obtener_valor_base() {
        return this.valor_base;
    }

    get obtener_nombre_medida_base() {
        return this.nombre_medida_base;
    } 
    
    convertirBase(nombre_medida, valor_medida) {       
        if (this.nombre_medida == this.nombre_medida_base) {
            let base = this.valor_medida
           return  base 
        } 
        else {
            let base = this.valor_medida * this.valor_base;
            return base
        }
    }

    convertir_a (medida_fin, valor) {
        let medida_ini = this.obtener_nombre_medida
        let transformacion = ((this.convertirBase (medida_ini) / medida_fin.convertirBase())) * valor
        return transformacion
    }
    
    comparar (medida_html) {
        if (medida_html == this.obtener_nombre_medida) {
            let medida_html = this.obtener_nombre_medida
            return medida_html
        }
    }
}

export class Medidor_de_Volumen extends Medidor {
    constructor(nombre_medida, valor_medida, valor_base) {
        super(nombre_medida, valor_medida, valor_base);
        this.nombre_medida_base = "mililitros"
    }
}

export class Medidor_de_Peso extends Medidor {
    constructor(nombre_medida, valor_medida, valor_base) {
        super(nombre_medida, valor_medida, valor_base);
        this.nombre_medida_base = "miligramos"
    }
}

export class Medidor_de_Temperatura extends Medidor {
    constructor(nombre_medida, valor_medida, valor_base) {
        super(nombre_medida, valor_medida, valor_base);
        this.nombre_medida_base = "centígrados"
    }
}

