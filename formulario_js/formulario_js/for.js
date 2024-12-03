document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioIngreso');
    
    formulario.addEventListener('submit', function(event) {
        
        event.preventDefault();

       
        const nombre = document.getElementById('txtNombre').value;
        const apellido = document.getElementById('txtApellido').value;
        const numero = document.getElementById('txtNumero').value;
        const email = document.getElementById('mail').value;

        
        if (!nombre || !apellido || !numero || !email) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        
        const mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!mail.test(mail)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        
        if (numero.length < 10) {
            alert("El número telefónico debe tener al menos 10 dígitos.");
            return;
        }

        
        const resultado = window.confirm("¿Estás seguro de que deseas enviar el formulario?");
        if (resultado) {
            alert("Formulario enviado correctamente.");
            formulario.submit(); 
        } else {
            alert("Formulario no enviado.");
        }
    });


    function valida_envia(){
        //valido el nombre
        if (document.fvalida.nombre.value.length==0){
               alert("Tiene que escribir su nombre")
               document.fvalida.nombre.focus()
               return 0;
        }
     
        //valido la edad. tiene que ser entero mayor que 18
        edad = document.fvalida.edad.value
        edad = validarEntero(edad)
        document.fvalida.edad.value=edad
        if (edad==""){
               alert("Tiene que introducir un número entero en su edad.")
               document.fvalida.edad.focus()
               return 0;
        }else{
               if (edad<18){
                      alert("Debe ser mayor de 18 años.")
                      document.fvalida.edad.focus()
                      return 0;
               }
        }
     
        //valido el interés
        if (document.fvalida.interes.selectedIndex==0){
               alert("Debe seleccionar un motivo de su contacto.")
               document.fvalida.interes.focus()
               return 0;
        }
     
        //el formulario se envia
        alert("Muchas gracias por enviar el formulario");
        document.fvalida.submit();
 }
});