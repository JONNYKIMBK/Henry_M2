//se pone un evento en el boton con id "boton"
let vacio = 0;
$("#boton").click(function(){

    
    //get toma como primer parametro la ubicacion de lo que queremos acceder y despues una funcion
    $.get("http://localhost:5000/amigos", function(datos){

        if(vacio!==datos.length){
            vacio=0;
            $("#lista").empty();
        }

        if(vacio!==datos.length){
            //la funcion each itera en cada objeto del array devuelto en datos
            $.each(datos, function(index, obj){
                //se crea un elemento "li"
                let item = document.createElement("li");
                //dentro del li ponemos la informacion que esta en cada objeto en la propiedad name
                item.append(obj.name + " X");
                //insertamos el "li" en el "ul" con id lista
                $("#lista").append(item);
                vacio++;
                
        })
        }    
            
    })
})

//busca el id del amigo y escribe el nombre
$("#search").click(function(){

    let id= document.getElementById("input").value;
    $.get("http://localhost:5000/amigos/"+id,function(obj){
        //limpia el elemento httml para que no se reinprima el contenido
        $("#amigo").empty();
        let amigo= obj.name;
        //se crea el elemto texto
        let textamigo= document.createElement("h4");
        textamigo.innerHTML=amigo;
        $("#amigo").append(textamigo);
    })
})


$("#delete").click(function(){

    let id= document.getElementById("inputDelete").value;
    $.ajax({
        url: "http://localhost:5000/amigos/"+id,
        type: "DELETE"
    });

    $("#success").empty();
    let borrado= document.createElement("h4");
    borrado.innerHTML= ("El amigo " + id + " fue borrado con exito");
    $("#success").append(borrado);
})