function formulario(){
  let div = $('frmAlta');        
  let frmAlta = document.createElement('form');  
  let divTitulo = document.createElement('div');
  let divAnimales = document.createElement('div'); 
  let divDescripcion = document.createElement('div');
  let divPrecio = document.createElement('div');
  let divRaza = document.createElement('div');
  let divFecha = document.createElement('div');    
  let divBotones = document.createElement('div');  

  /**
   COMPONENTES
   */
  
  let titulo = document.createElement('input');
  let perro = document.createElement('input');
  let gato = document.createElement('input');
  let descripcion = document.createElement('input');
  let precio = document.createElement('input');
  let raza = document.createElement('input');
  let fecha = document.createElement('input');
  
    
  let btnGuardar = document.createElement('input');
  let btnCancelar = document.createElement('input');
  let btnEliminar = document.createElement('input');
 
  /** ETIQUETAS */

  let idTxt = document.createElement('label');
  let tituloTxt = document.createElement('label');
  let animalTxt = document.createElement('label');
  let perroTxt = document.createElement('label');
  let gatoTxt = document.createElement('label');
  let descripcionTxt = document.createElement('label');
  let precioTxt = document.createElement('label');
  let razaTxt = document.createElement('label');
  let fechaTxt = document.createElement('label');
  let cantidadDormitoriosTxt = document.createElement('label');
    

  /** TIPOS DE COMPONENTES */
    
    titulo.type = 'text';   
    perro.type = 'radio';
    perro.value = 'perro';    
    gato.type = 'radio';
    gato.value= 'gato';      
    descripcion.type = 'text';
    precio.type = 'text';    
    raza.type = 'text';    
    fecha.type = 'date';    
    
    btnGuardar.type = 'button';    
    btnCancelar.type = 'button';  
    btnEliminar.type = 'button';

    /* ID DE COMPONENTES */
    
    titulo.id = 'titulo';
    perro.id = 'perro';
    gato.id = 'gato';
    descripcion.id = 'descripcion';
    precio.id = 'precio';
    raza.id = 'raza';
    fecha.id = 'fecha';    
    btnGuardar.id = 'btnGuardar';
    btnCancelar.id = 'btnCancelar';
    btnEliminar.id = 'btnEliminar';

    /** NOMBRE DE COMPONENTES */

    perro.name = "animal";
    
    gato.name = "animal";
    titulo.name = "titulo";
    descripcion.name = "descrippion"; 
    precio.name = "precio";
    raza.name = "raza";
    fecha.name = "fecha";
    
    btnGuardar.name = 'btnGuardar';
    btnCancelar.name = 'btnCancelar';
    btnEliminar.name = 'btnEliminar';

   /** PLACEHOLDER DE COMPONENTES */

   titulo.placeholder= 'Titulo';
   descripcion.placeholder = 'Descripcion';
   precio.placeholder = 'Precio';
   raza.placeholder = 'Raza';
   fecha.placeholder = 'Autos';


  /** VALOR DE LAS ETIQUETAS */ 

    idTxt.innerText = 'Id';
    tituloTxt.innerText = 'Titulo';
    animalTxt.innerText = 'Animal:';
    perroTxt.innerText = 'Perro';
    gatoTxt.innerText = 'Gato'; 
    descripcionTxt.innerText = 'Descripcion';
    precioTxt.innerText = 'Precio';
    razaTxt.innerText = 'Raza';
    fechaTxt.innerText = 'Fecha';
    cantidadDormitoriosTxt.innerText = 'Cantidad de Dormitorios';

   /** CLASES DE LOS COMPONENTES    */
   
   divTitulo.className = 'form-group col-md-10';    
   titulo.className = 'form-control';
   divAnimales.className = 'form-group inline';
   divAnimales.classList.add('spaceLeft');
   divAnimales.classList.add('spaceBottom');
   perro.className = 'radio';
   gato.className= 'spaceLeft';
   
   divDescripcion.className = 'form-group col-md-10';
   descripcion.className = 'form-control';
   divPrecio.className = 'form-group col-md-10';
   precio.className = 'form-control';
   divRaza.className = 'form-group col-md-5';
   raza.className = 'form-control';
   divFecha.className = 'form-group col-md-5';
   fecha.className = 'form-control';
   
    
   divBotones.className = 'form-group';   
   btnGuardar.className = 'botones';   
   btnCancelar.className = 'botones';
   btnEliminar.className = 'botones';  
   /* VALORES DE BOTONES */
   btnGuardar.value = "Guardar";
   btnCancelar.value = "Cancelar";
   btnEliminar.value = "Eliminar";
   
   
   

   




   



  /**  * CLASES DE ETIQUETAS */
 
    tituloTxt.className = 'whiteLabel';
    gatoTxt.className = 'form-check-label';
    gatoTxt.classList.add('spaceLeft');
    animalTxt.className = 'form-check-label';
    animalTxt.classList.add('whiteLabel');
    animalTxt.classList.add('spaceTop');    
    perroTxt.className = 'form-check-label';    
    perroTxt.classList.add('whiteLabel');
    gatoTxt.className = 'form-check-label';   
    gatoTxt.classList.add('whiteLabel');
    
    descripcionTxt.className = 'whiteLabel';
    precioTxt.className = 'whiteLabel';
    razaTxt.className = 'whiteLabel';
    fechaTxt.className = 'whiteLabel';
    cantidadDormitoriosTxt.className = 'whiteLabel';
    
    

    /** ASOCIA EL FORM AL DOM */

    divTitulo.appendChild(tituloTxt);
    divTitulo.appendChild(titulo);    
    frmAlta.appendChild(divTitulo);
    divDescripcion.appendChild(descripcionTxt);
    divDescripcion.appendChild(descripcion);
    divDescripcion.appendChild(animalTxt);
    frmAlta.appendChild(divDescripcion);
    divAnimales.appendChild(perroTxt);
    divAnimales.appendChild(perro);
    divAnimales.appendChild(gatoTxt);
    divAnimales.appendChild(gato);    
    frmAlta.appendChild(divAnimales);   
    divPrecio.appendChild(precioTxt);
    divPrecio.appendChild(precio);
    frmAlta.appendChild(divPrecio);
    divRaza.appendChild(razaTxt);
    divRaza.appendChild(raza);
    frmAlta.appendChild(divRaza);
    divFecha.appendChild(fechaTxt);
    divFecha.appendChild(fecha);    
    frmAlta.appendChild(divFecha);   
    
    
    divBotones.appendChild(btnGuardar);
    divBotones.appendChild(btnEliminar);
    divBotones.appendChild(btnCancelar);
    frmAlta.appendChild(divBotones);     
    div.appendChild(frmAlta);
}

