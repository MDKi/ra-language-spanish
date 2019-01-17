module.exports = {
    ra: {
        action: {
            add_filter: 'Añadir filtro',
            add: 'Añadir',
            back: 'Atrás',
            bulk_actions: '1 ítem seleccionado |||| %{smart_count} ítems seleccionados',
            cancel: 'Cancelar',
            clear_input_value: 'Blanquear valor',
            clone: 'Clonar',
            confirm: 'Confirmar',
            create: 'Crear',
            delete: 'Eliminar',
            edit: 'Editar',
            export: 'Exportar',
            list: 'Listar',
            refresh: 'Actualizar',
            remove_filter: 'Eliminar este filtro',
            remove: 'Remover',
            save: 'Guardar',
            search: 'Buscar',
            show: 'Mostrar',
            sort: 'Ordenar',
            undo: 'Deshacer',
        },
        boolean: {
            true: 'Sí',
            false: 'No',
        },
        page: {
            create: 'Crear %{name}',
            dashboard: 'Panel de control',
            edit: '%{name} #%{id}',
            error: 'Algo salió mal',
            list: 'Lista de %{name}',
            loading: 'Cargando',
            not_found: 'No encontrado',
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several:
                    'Suelte algunos archivos para cargar o haga clic para seleccionar uno.',
                upload_single: 'Suelte un archivo para cargarlo o haga clic para seleccionarlo.',
            },
            image: {
                upload_several:
                    'Suelte algunas imágenes para cargar o haga clic para seleccionar uno.',
                upload_single:
                    'Suelte una imagen para cargarla o haga clic para seleccionarla.',
            },
            references: {
                all_missing: 'No se pueden encontrar datos de referencias.',
                many_missing:
                    'Al menos una de las referencias asociadas ya no parece estar disponible.',
                single_missing:
                    'La referencia asociada ya no parece estar disponiblee.',
            },
        },
        message: {
            about: 'Acerca de',
            are_you_sure: '¿Está seguro(a)?',
            bulk_delete_content:
                '¿Está seguro que desea eliminar este(a) %{name}? |||| ¿Está seguro que desea eliminar estos %{smart_count} artículos?',
            bulk_delete_title:
                'Eliminar %{name} |||| Eliminar %{smart_count} %{name} ítems',
            delete_content: '¿Está eguro que desea eliminar este ítem?',
            delete_title: 'Eliminar %{name} #%{id}',
            details: 'Detalles',
            error: 'Se produjo un error en el cliente y su solicitud no pudo ser completada.',
            invalid_form: 'El formulario no es válido. Por favor verifique si hay errores',
            loading: 'Un momento por favor, la página se está cargando',
            no: 'No',
            not_found:
                'O bien escribió una URL incorrecta o siguió un enlace incorrecto.',
            yes: 'Sí',
        },
        navigation: {
            no_results: 'No se encontraron resultados',
            no_more_results:
                'La página %{page} está fuera del limite. Prueba la página anterior',
            page_out_of_boundaries: 'La página %{page} está fuera del limite.',
            page_out_from_end: 'No se puede ir después de la última página',
            page_out_from_begin: 'No se puede ir antes de la página 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
            next: 'Siguiente',
            prev: 'Anterior',
        },
        auth: {
            user_menu: 'Perfil',
            username: 'Usuario',
            password: 'Contraseña',
            sign_in: 'Acceder',
            sign_in_error: 'Se ha producido un error en la autenticación.',
            logout: 'Cerrar sesión',
        },
        notification: {
            updated: 'Elemento actualizado |||| %{smart_count} elementos actualizados',
            created: 'Elemento creado',
            deleted: 'Elemento eliminado |||| %{smart_count} elementos eliminados',
            bad_item: 'Elemento incorrecto',
            item_doesnt_exist: 'El elemento no existe',
            http_error: 'Error de comunicación con el servidor',
            data_provider_error: 'Error en el dataProvider. Mirar la consola para más detalles.',
            canceled: 'Acción cancelada',
            logged_out: 'Su sesión ha finalizado, por favor inicie sesión nuevamente.',
        },
        validation: {
            required: 'Requerido',
            minLength: 'Debe tener al menos %{min} caracteres',
            maxLength: 'Debe tener %{max} caracteres o menos',
            minValue: 'Debe ser al menos %{min}',
            maxValue: 'Debe ser %{max} o menos',
            number: 'Tiene que ser un número',
            email: 'Debe ser un correo electrónico válido',
            oneOf: 'Debe ser uno de: %{options}',
            regex: 'Debe coincidir con un formato específico (regexp): %{pattern}',
        },
    },
};
