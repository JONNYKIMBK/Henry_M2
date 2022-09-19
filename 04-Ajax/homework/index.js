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

    //let id= document.getElementById("input").value;
    let id= $("#input").val();
    $.get("http://localhost:5000/amigos/"+id,function(obj){

        //limpia el elemento para que no se dupliquen los span
        // $("#amigo").empty();
        //no necesita borrar como el anterior porque text sobreescribe el valor
        $("#amigo").text(obj.name);
        // let amigo= obj.name;
        // //se crea el elemento texto
        // let textamigo= document.createElement("h4");
        // textamigo.innerHTML=amigo;
        // $("#amigo").append(textamigo);
    })
})

//funcion de borrado
$("#delete").click(function(){
    //valor del input id
    // let id= document.getElementById("inputDelete").value;
    let id= $("#inputDelete").val();
    //elimina el objeto de ese id
    $.ajax({
        url: "http://localhost:5000/amigos/"+id,
        type: "DELETE"
    });

    //limpia el elemento para que no se dupliquen los span
    $("#success").empty();

    $("#success").text("El amigo " + id + " fue borrado con exito");
    // //se crea el elemento de texto
    // let borrado= document.createElement("h4");
    // borrado.innerHTML= ("El amigo " + id + " fue borrado con exito");
    // //se inserta el elemento como child
    // $("#success").append(borrado);
})