scroll("contacto");
scroll("estudios");
scroll("cursos");
scroll("habilidades");
scroll("experiencia");

function scroll(id){
    document.getElementById(id).onclick = function(){
        var scrollDiv = document.getElementById(id+"-cuerpo").offsetTop;
        window.scrollTo({ top: scrollDiv-78, behavior: 'smooth'});
    };
};
