Los patrones de diseño de diseño no se aplican al html. 
Se aplican a la problematica que tienes. A los objetos y elementos que conforman la casuistica actual

El html lo maneja el sistema de templates
Los patrones manejan la casuistica.

Tres secciones
DATA - Manage data from DDBB
FUNCTIONS - Manage casuistry
TEMPLATES - Manage DOM interactions

Ej.
Pestaña perfiles
Listado de perfiles de usuarios
    Datos
        - Foto, titular, nombre, apellidos, tipo cliente, mensaje, datos extra


var KPMG_DATA = (function(){
    get_tab_profile_list_items = function(){
        var data = {
            img        : '/img/profile.png',
            title      : 'Cliente',
            name       : 'Pepe',
            last_name  : 'Santos',
            client_type: 'Empresa',
            message    : 'Faltan algunos campos',
            extra_data : ''
        }
    };

    return {
        get_tab_profile_list_items : get_tab_profile_list_items
    }
})();

var  KPMG_FUNCTIONS = (function(){
    var tab_profile = {
        items_elements : {
            btn_show_more : '#Configuration_textFilter'
        },
        show_data : function(){
            $(document).on('click', tab_profile.items_elements.btn_show_more,function(){
                console.log('OK!!');
            })
        }
    };

    return {
        tab_profile : tab_profile
    }
})();

$(function() {
    KPMG_FUNCTIONS.tab_profile.show_data();
});