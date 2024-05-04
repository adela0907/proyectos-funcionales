/* declara una funcion con parametros y un atributo (play) */

function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}


/* declara una constante seleccionando la clase */ 
const listaDeTeclas = document.querySelectorAll ('.tecla')


for ( let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function(){
        playSonido(idAudio);
    }; 
    tecla.onkeydown = function(evento){ 

        if(evento.code ==='Enter' || evento.code ==='Space'  ){
             tecla.classList.add('ativa');
        }
        console.log(evento.code ==='Space' || evento.code === 'Enter')
       
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
   }

}










/*
let contador = 0;

while (contador < 9){
    const tecla = listaDeTeclas[contador];
/* la constante instrumento llama de la lista de teclas a su segunda clase */
//    const instrumento = tecla.classList[1];

/*en esta constante usamos Template Strings para incluir variables a un cadena de texto */
/*    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

   tecla.onclick = function(){
    playSonido(idAudio);

   }; 
   contador = contador + 1;
   console.log('vuelta'+ contador);

}
*/







