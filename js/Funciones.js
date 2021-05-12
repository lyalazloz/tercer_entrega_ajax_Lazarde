import * as Vari from "./Variables.js"

export function captura_y_proceso_de_datos(){
    let boton = $('#btnConvertir');
    
    boton.click('click', function(){
        let medida_ini = $("#medida_ini").val();        
        let medida_fin = $("#medida_fin").val();
        let valor = $("#input").val();

        let Objeto1 = Vari.unidades_de_volumen.map(function(unidad_de_volumen){
            if (unidad_de_volumen.obtener_nombre_medida == medida_ini){
                medida_ini = unidad_de_volumen;                 
            }
        })
    
        let Objeto2 = Vari.unidades_de_volumen.map(function(unidad_de_volumen){
            if (unidad_de_volumen.obtener_nombre_medida == medida_fin){
                medida_fin = unidad_de_volumen;               
            }
        })
        
        let convertido =  (valor + " " + medida_ini.obtener_nombre_medida + " equivale(n) a " + medida_ini.convertir_a(medida_fin, valor) + " " + medida_fin.obtener_nombre_medida);  
        
               
        $(".resultado").prepend(`<h3> ${convertido}</h3>`).hide().fadeIn(2000);

    })   
        
}

export function guardarLocal(clave, valor) { localStorage.setItem(clave, valor) };

export function animacion(){

    $("#listas").hide()

    $("#titulo").prepend("<h1>Conversor de Medidas para Cocinar</h1><h2>Convierte fácilmente unas medidas para cocinar, en otras y consigue que tus recetas queden perfectas!!!</h2>");

    $("h1, h2").hide().fadeIn(1000,function(){ 
        $("#listas").show().animate({left: '1%'}, "fast");
    });
       
}

export function ajax(){
        
    const boton = document.getElementById("btnConsultar");

    boton.addEventListener("click", pedirNuevosDatos);


    function pedirNuevosDatos(e){

    const ajax = new XMLHttpRequest(); 
    ajax.open("GET", "dato.json");
    ajax.addEventListener("load", procesarRespuestaServidor);
    ajax.send(); 
    
}
    
    function procesarRespuestaServidor(e){
    const ajax = e.target; 
    let novedad = JSON.parse(ajax.response);

        for (let unidad in novedad){
            
            const ul = document.getElementById("consultarTabla");
            let li = document.createElement("li");
            li = (" 1 " + novedad[unidad].nombre_medida + " equivale(n) a " + novedad[unidad].valor_base + " " + novedad[unidad].nombre_medida_base)
            
            $("#consultarTabla").prepend(`<li> ${li}</li>`);
            
        }

    }
}
         