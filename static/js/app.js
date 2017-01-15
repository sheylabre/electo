$(document).ready(function(){
    $("#form").validate({
        rules: {
            nombre:{
                required: true,
                number: false,
                minlength: 6
            },
            correo:{
                required: true,
                email: true,
                minlength:5
            },
            num:{
                required: true,
                number:true,
                minlength:9
            },
            ruc:{
                required:true,
                number:true,
                minlength:11
            }
        },
        messages: {
            nombre: {
                require:"Porfavor ingrese su Nombre y Apellido",
                number:"Debe requerir solo letras",
                minlength:"Debe ser más de 5 letras"
            },
            correo: {
                required:"Porfavor ingrese su correo electronico",
                email:"Porfavor incluya el @",
                minlength:"Debe escribir su correo completo"
            },
            num: {
                required:"Por favor ingrese su numero telefonico",
                number:"Debe ser solo numeros",
                minlength:"Porfavor ingrese los 9 digitos "
            },
            ruc: {
                required:"Por favor ingrese su numero de RUC",
                number:"Debe ser solo numeros",
                minlength:"Porfavor ingrese los 11 digitos "
            }
        },
        submitHandler: function(form){
            form.submit();
        }
    })

});


