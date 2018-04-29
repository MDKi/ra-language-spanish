module.exports = {
    ra: {
        action: {
            delete: 'Eliminar',
            show: 'Mostrar',
            list: 'Listar',
            save: 'Guardar',
            create: 'Crear',
            edit: 'Editar',
            sort: 'Ordenar',
            cancel: 'Cancelar',
            undo: 'Deshacer',
            refresh: 'Actualizar',
            add: 'Añadir',
            remove: 'Retirar',
            add_filter: 'Añadir filtro',
            remove_filter: 'Eliminar este filtro',
            back: 'Atrás',
            bulk_actions: '%{smart_count} selected',
        },
        boolean: {
            true: 'Si',
            false: 'No',
        },
        page: {
            list: 'Listar %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Crear %{name}',
            dashboard: 'Panel de control',
            not_found: 'No encontrada',
            loading: 'Cargando',
        },
        input: {
            file: {
                upload_several:
                    'Suelte algunos archivos para cargar o haga clic para seleccionar uno.',
                upload_single: 'Suelte un archivo para cargarlo o haga clic para seleccionarlo.',
            },
            image: {
                upload_several:
                    'Suelte algunos imágenes para cargar o haga clic para seleccionar uno.',
                upload_single:
                    'Suelte un imagen para cargarlo o haga clic para seleccionarlo.',
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
            yes: 'Si',
            no: 'No',
            are_you_sure: 'Are you sure?',
            about: 'Acerca de',
            not_found:
                'O bien escribió una URL incorrecta o siguió un enlace incorrecto.',
            loading: 'La página se está cargando, solo un momento por favor',
            invalid_form: 'El formulario no es válido Por favor verifique si hay errores',
            delete_title: 'Eliminar %{name} #%{id}',
            delete_content: '¿Seguro que quieres eliminar este artículo?',
            bulk_delete_title:
                'Eliminar %{name} |||| Eliminar %{smart_count} %{name} artículos',
            bulk_delete_content:
                'Estás seguro que quieres eliminar esto %{name}? |||| ¿Seguro que quieres eliminar estos %{smart_count} artículos?',
        },
        navigation: {
            no_results: 'No se encontraron resultados',
            no_more_results:
                'La página %{page} está fuera del limite. Prueba la página anterior',
            page_out_of_boundaries: 'La página %{page} está fuera del limite.',
            page_out_from_end: 'No se puede ir después de la última página',
            page_out_from_begin: 'No se puede ir antes de la página 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
            next: 'Siguiente',
            Anterior: 'Prev',
        },
        auth: {
            username: 'Usuario',
            password: 'Contraseña',
            sign_in: 'Acceder',
            sign_in_error: 'Se ha producido un error en la autenticación.',
            logout: 'Cerrar sesión',
        },
        notification: {
            updated: 'Elemento actualizado |||| %{smart_count} elementos actualizados',
            created: 'Elemento eliminado',
            deleted: 'Element creado |||| %{smart_count} elements deleted',
            bad_item: 'Elemento incorrecto',
            item_doesnt_exist: 'El elemento no existe',
            http_error: 'Error de comunicación del servidor',
            canceled: 'Acción cancelada',
        },
        validation: {
            required: 'Necesario',
            minLength: 'Debe tener %{min} caracteres como mínimo',
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
