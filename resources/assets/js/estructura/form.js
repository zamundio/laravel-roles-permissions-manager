$(function() {


    var linea;
    var $terminal;
    var $tableAmpl;
    var $lineadatos;
    // $('.datepicker').datepicker({
    //     language: "es",
    //     autoclose: true
    // });
    /*   Datatable Lineas *********************************************/

    $tarjetas_usuario_id = "";

    $table = new $('.yajra-datatable-Lineas').DataTable({
        fnInitComplete: function() {
            rw = $table.row(0).data();
            nummovil = rw.id;
            linea = rw.id;

            // DatatableHistoricoTerminales(nummovil);
            // DatatableTarjetas(nummovil);
            // DatatableAmpliaciones(nummovil);
            // DatatableTerminales(nummovil);

            // document.getElementById('Apellidos').value = nummovil
        },
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
        "drawCallback": function(settings) {

            var hasRows = this.api().rows().data().length > 0;

            if (!hasRows) {
                $(this).DataTable().button(2).disable();
            } else {
                $(this).DataTable().button(2).enable();
            }


        },
        columnDefs: [{
                targets: 0,
                data: null,
                defaultContent: '',
                "width": "1%",
                render: function(data, type, full, meta) {
                    if (meta.row == 0) {
                        return '<input type="checkbox" name="checkbox" checked <div/>';
                    } {
                        return '<input type="checkbox" name="checkbox" uncheked  <div />';
                    }
                }
            },
            {
                "width": "1%",
                "targets": [1]
            },
            {
                "width": "20%",
                "targets": [2]
            },
            {
                "width": "2%",
                "targets": [3]
            },
            {
                "width": "1%",
                "targets": [4]
            }
        ],
        select: {
            style: 'single',
            selector: 'td:first-child'
        },
        bInfo: false,
        lengthChange: false,
        bPaginate: false,
        bFilter: false,
        processing: false,
        serverSide: true,
        dom: 'Bfrtip',
        bautoWidth: false,


        "ajax": {
            "url": 'LineasDatatable',
            "type": "get",
            "data": {
                "user_id": $cod
            }
        },
        buttons: [{
                text: 'Añadir Linea',
                className: 'btn btn-primary btn-sm btn-rounded',
                action: function(e, dt, node, config) {

                    $(".print-error-msg").find("ul").html('');
                    $(".print-error-msg").css('display', 'none');
                    $modal = $('#LineaModal_Nuevo');
                    $modal.find('form')[0].reset();
                    $('#linea_nuevo_form').parsley().reset();
                    $("#LineaModal_Nuevo").modal("show");
                },

            }, {

                text: '<i class="fas fa-sync"></i>',
                titleAttr: 'Refresh',
                className: 'btn btn-info',
                action: function(e, dt, node, config) {


                    dt.clear().draw();
                    dt.ajax.reload();
                },
                enabled: false
            },
            {

                text: 'Editar Linea',
                titleAttr: 'Editar Linea',
                enabled: false,
                className: 'btn btn-success ',
                action: function(e, dt, node, config) {
                    $(".print-error-msg").find("ul").html('');
                    $(".print-error-msg").css('display', 'none');
                    $.ajax({
                        "url": 'lineas/' + nummovil + '/editar',
                        type: 'get',

                        success: function(data) {
                            document.querySelector('#num_mo_editar').value = data.id;
                            document.querySelector('#num_mo_editar_original_text').value = data.id;
                            document.querySelector('#Observ_editar').value = data.Observaciones;
                            document.querySelector('#Observ_editar_original_text').value = data.Observaciones;
                            if (data.ListadoXLS == "SI") {
                                document.querySelector('#LXLS_editar').checked = true;
                            } else {
                                document.querySelector('#LXLS_editar').checked = false;
                            }
                            document.querySelector('#LXLS_editar_original_text').value = data.ListadoXLS;
                            $("#LineaModal_Editar").modal("show");
                        },
                        error: function() {

                        }
                    });

                },

            }

        ],

        order: [
            [1, "desc"]
        ],
        columns: [{
                data: 'Checkbox',
                name: 'Checkbox',

            },
            {
                data: 'id',
                name: 'num_movil'
            },
            {
                data: 'Observaciones',
                name: 'Observaciones'
            },
            {
                data: 'XLS',
                name: 'XLS'
            },
            {
                data: 'action',
                name: 'action',
                orderable: true,
                searchable: true
            },
        ],


    });







});



/********Se cargan las tarjetas en el evento fnInitComplete de Las Lineas******************************** */
function DatatableTarjetas(numm) {


    $table = $('.yajra-datatable-Tarjetas').DataTable({
        fnInitComplete: function() {
            $("[data-toggle='tooltip']").tooltip();
            rw = $table.row('#TablaTerminales tbody tr:eq(0)').data();


        },
        "drawCallback": function(settings) {

            var hasRows = this.api().rows().data().length > 0;

            if (!hasRows) {
                $(this).DataTable().button(2).disable();
            } else {
                var rows = this.api().rows(0).data();
                $tarjetas_usuario_id = rows[0].id;
                $(this).DataTable().button(2).enable();
            }


        },
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
        columnDefs: [{
                "width": "1%",
                "targets": [0],
                data: null,
                defaultContent: '',
                render: function(data, type, full, meta) {
                    if (meta.row == 0) {
                        return '<input type="checkbox" name="checkbox" checked <div/>';
                    } {
                        return '<input type="checkbox" name="checkbox" uncheked  <div />';
                    }
                }
            },
            {
                "width": "2%",
                "targets": [1],

            },
            {
                "width": "3%",
                "targets": [2]
            },
            {
                "width": "25%",
                "targets": [3]
            },
            {
                "width": "1%",
                "targets": [4]
            },
            {
                "width": "2%",
                "targets": [5]
            },
            {
                "width": "2%",
                "targets": [6]
            },
            {
                "width": "1%",
                "targets": [7]
            },
            {
                "width": "1%",
                "targets": [8]
            },
            {
                "width": "1%",
                "targets": [9]
            },

        ],
        fixedColumns: true,
        select: {
            style: 'single',
            selector: 'td:first-child'
        },
        bInfo: false,
        lengthChange: false,
        bPaginate: false,
        bFilter: false,
        processing: false,
        serverSide: false,
        cache: false,
        bDestroy: true,
        dom: 'Bfrtip',
        bautoWidth: false,

        "ajax": {
            "url": 'TarjetasDatatable?linea_usuario_id=' + numm,
            "type": "get",

        },
        buttons: [{
                text: 'Añadir Tarjeta',
                action: function(e, dt, node, config) {
                    $(".print-error-msg").find("ul").html('');
                    $(".print-error-msg").css('display', 'none');
                    $('#tarjetas_nuevo_form')[0].reset();
                    $('#tarjetas_nuevo_form').parsley().reset();
                    $('#submit_crear_tarj').attr('disabled', false);
                    $('#submit_crear_tarj').val('Enviar');
                    $('#toggle-principal_tarj').bootstrapToggle('on');
                    $('#toggle-solodatos_tarj').bootstrapToggle('on');
                    $("#TarjetaLineaModal_Nuevo").modal("show");
                },

            }, {

                text: '<i class="fas fa-sync"></i>',
                titleAttr: 'Refresh',
                action: function(e, dt, node, config) {


                    dt.clear().draw();
                    dt.ajax.reload();
                },

            },
            {

                text: 'Editar Tarjeta',
                titleAttr: 'Editar Tarjeta',
                action: function(e, dt, node, config) {
                    $(".print-error-msg").find("ul").html('');
                    $(".print-error-msg").css('display', 'none');

                    $.ajax({
                        "url": 'tarjetasusuarios/' + $tarjetas_usuario_id + "/editar",
                        type: 'get',

                        success: function(data) {
                            document.querySelector('#abrev_tarj_editar').value = data.Abrev;
                            document.querySelector('#imei_tarj_editar').value = data.id;
                            document.querySelector('#pin_tarj_editar').value = data.PIN;
                            document.querySelector('#puk_tarj_editar').value = data.PUK;
                            console.log(data.Principal);
                            if (data.Principal == 1) {
                                $('#toggle-principal_tarj_editar').bootstrapToggle('on');
                            } else {
                                $('#toggle-principal_tarj_editar').bootstrapToggle('off');
                            }
                            if (data.Datos == 1) {
                                $('#toggle-solodatos_tarj_editar').bootstrapToggle('on');
                            } else {
                                $('#toggle-solodatos_tarj_editar').bootstrapToggle('off');
                            }
                            document.querySelector('#fecha_asig_tarj_editar').value = data.Fecha_Activacion;
                            document.querySelector('#obs_tarj_editar').value = data.Observaciones;
                            $("#TarjetaLineaModal_Editar").modal("show");
                        },
                        error: function() {

                        }
                    });

                },

            }

        ],

        // order: [
        //     [6, "desc"]
        // ],
        columns: [{
                data: 'Checkbox',
                name: 'Checkbox'
            },
            {
                "data": 'Observaciones',
                "render": function(data, type, full, meta) {
                    if (data != '' &&
                        data != null) {
                        $ob = "<a class='btn btn-primary btn-circle ' data-toggle='hover'  title='" + 'Observaciones' + "' data-content='" + data + "'><i class='fas fa-info'></i></a>";
                        $obpop = "<a class='btn btn-primary btn-circle' data-toggle='hover'  title='" + 'Observaciones' + "' data-content='" + data + "'><i class='fas fa-info'></i></a>";
                        return $obpop;
                    } else {
                        return "";
                    }

                }
            },
            {
                data: 'Abrev',
                name: 'Abrev'
            },
            {
                data: 'id',
                name: 'num_sim'
            },
            {
                data: 'PIN',
                name: 'PIN'
            },
            {
                data: 'PUK',
                name: 'PUK'
            },
            {
                data: 'Principal',
                name: 'Principal'
            },
            {
                data: 'Datos',
                name: 'Datos'
            },
            {
                data: 'Fecha_Activacion',
                name: 'Fecha_Activacion'
            },
            {
                data: 'action',
                name: 'action',
                orderable: true,
                searchable: true
            },
        ],


    });



};

/********Se cargan las ampliciones de GB en el evento fnInitComplete de Las Lineas******************************** */
function DatatableAmpliaciones(numm) {


    $table = $('.yajra-datatable-Ampliaciones').DataTable({
        "drawCallback": function(settings) {

            var hasRows = this.api().rows().data().length > 0;

            if (!hasRows) {
                $(this).DataTable().button(2).disable();
            } else {
                $(this).DataTable().button(2).enable();
            }


            var api = this.api();

            // Output the data for the visible rows to the browser's console

            $rw = api.rows(0).data();
            var myObj = new Object(),
                myObj = $rw[0];

            for (var i in myObj) {
                // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
                if (myObj.hasOwnProperty(i)) {

                    if (i = 'id') {
                        $ampliaciones_id = myObj[i];
                    }

                    // console.log(i + " valor: " + myObj[i])
                }
            }

        },
        fnInitComplete: function() {
            $("[data-toggle='tooltip']").tooltip();

            rw = $table.row('#TablaAmpliaciones tbody tr:eq(0)').data();
            if ($(this).find('tbody tr').length == 0) {
                $(this).DataTable().button(2).disable();
            }

        },


        footerCallback: function(row, data, start, end, display) {
            var api = this.api(),
                data;

            // converting to interger to find total
            var intVal = function(i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // computing column Total of the complete result
            var monTotal = api
                .column(3)
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            // console.log(monTotal);
            $(api.column(0).footer()).html('');
            $(api.column(1).footer()).html('');
            $(api.column(2).footer()).html('Total');
            $(api.column(3).footer()).html(monTotal + " €");
            $(api.column(4).footer()).html('');
            $(api.column(5).footer()).html(' ');
        },

        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
        columnDefs: [{
                "width": "1%",
                "targets": [0],
                data: null,
                defaultContent: '',
                render: function(data, type, full, meta) {
                    if (meta.row == 0) {
                        return '<input type="checkbox" name="checkbox" checked <div/>';
                    } {
                        return '<input type="checkbox" name="checkbox" uncheked  <div />';
                    }
                }
            },
            {
                "width": "40%",
                "targets": [1],
                render: function(d) {
                    moment.locale('es-ES');
                    if (d != null) {

                        return moment(d).format('DD/MM/YYYY', 'es');
                    }
                },
            },
            {
                "width": "10%",
                "targets": [2]
            },
            {
                "width": "25%",
                "targets": [3]
            }, {
                "width": "15%",
                "targets": [4]
            },
            {
                "width": "15%",
                "targets": [5]
            }

        ],
        fixedColumns: true,
        select: {
            style: 'single',
            selector: 'td:first-child'
        },
        pageLength: 5,
        bInfo: false,
        lengthChange: true,
        bFilter: false,
        processing: false,
        serverSide: false,
        cache: false,
        bDestroy: true,
        dom: 'Bfrtip',
        bautoWidth: false,

        "ajax": {
            "url": 'AmpliacionesDatatable?linea_usuario_id=' + numm,
            "type": "get",

        },
        buttons: [{
                text: 'Añadir Ampliación',
                action: function(e, dt, node, config) {
                    $(".print-error-msg").find("ul").html('');
                    $(".print-error-msg").css('display', 'none');
                    $("#numeromovil").html(nummovil);
                    $("#fecha_amp").val('');
                    $("#plangb").html('');
                    $("#obs_amp").html('')
                    $("#Ampliaciones_Nuevo").modal("show");

                },

            },
            {

                text: '<i class="fas fa-sync"></i>',
                titleAttr: 'Refresh',
                action: function(e, dt, node, config) {


                    dt.clear().draw();
                    dt.ajax.reload();
                },

            },
            {

                text: 'Editar Ampliación',
                titleAttr: 'Editar Ampliación',
                action: function(e, dt, node, config) {
                    $(".print-error-msg").find("ul").html('');
                    $(".print-error-msg").css('display', 'none');
                    $.ajax({
                        "url": 'ampliaciongb/' + $ampliaciones_id + '/editar',
                        type: 'get',

                        success: function(data) {
                            // console.log(data.get_plan.GB);

                            $('#Ampliaciones_Editar').find('#numeromovil_editar').html(data.linea_usuario_id);

                            $('#plangb_editar')
                                .empty()
                                .append('<option selected value="' + data.get_plan.Id + '">' + data.get_plan.GB + '</option>');
                            $('#plangb_editar').select2('data', {
                                id: data.get_plan.Id,
                                label: data.get_plan.GB
                            });
                            $('#plangb_editar').trigger('change');
                            document.querySelector('#plangb_editar_original').value = data.get_plan.Id;
                            document.querySelector('#plangb_editar_original_text').value = data.get_plan.GB;
                            document.querySelector('#fecha_amp_editar_original').value = moment(data.FECHA).format('DD/MM/YYYY', 'es');

                            document.querySelector('#fecha_amp_editar').value = moment(data.FECHA).format('DD/MM/YYYY', 'es');

                            document.querySelector('#obs_amp_editar_original').value = data.Observaciones;
                            document.querySelector('#obs_amp_editar').value = data.Observaciones;

                            $("#Ampliaciones_Editar").modal("show");
                        },
                        error: function() {

                        }
                    });

                },

            }

        ],

        // order: [
        //     [6, "desc"]
        // ],
        columns: [{
                data: 'Checkbox',
                name: 'Checkbox'
            },

            {
                data: 'FECHA',
                name: 'FECHA'
            },
            {
                data: 'plan',
                name: 'Plan'
            }, {
                data: 'precio',
                name: 'Coste'
            },
            {
                "data": 'Observaciones',
                "render": function(data, type, full, meta) {
                    if (data != "" & data != null) {
                        $ob = "<a class='btn btn-primary btn-circle ' data-toggle='hover'  title='" + 'Observaciones' + "' data-content='" + data + "'><i class='fas fa-info'></i></a>";
                        $obpop = "<a class='btn btn-primary btn-circle' data-toggle='hover'  title='" + 'Observaciones' + "' data-content='" + data + "'><i class='fas fa-info'></i></a>";
                        return $obpop;
                    } else {
                        return "";
                    }

                }
            },
            {
                data: 'action',
                name: 'action',
                orderable: true,
                searchable: true
            },
        ],


    });





};

function DatatableTerminales(numm) {


    $table = $('.yajra-datatable-Terminales').DataTable({

        "drawCallback": function(settings) {

            var hasRows = this.api().rows().data().length > 0;

            if (!hasRows) {
                $(this).DataTable().button(2).disable();
                $(this).DataTable().button(3).disable();
            } else {
                $(this).DataTable().button(2).enable();
                $(this).DataTable().button(3).enable();
            }
            var api = this.api();

            // Output the data for the visible rows to the browser's console

            $rw = api.rows(0).data();

            var myObj = new Object(),
                myObj = $rw[0];

            for (var i in myObj) {
                // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
                if (myObj.hasOwnProperty(i)) {

                    if (i = 'id') {
                        $terminal = myObj[i];
                    }
                    if (i = 'Modelo') {
                        $modelo = myObj[i];
                    }
                    // console.log(i + " valor: " + myObj[i])
                }
            }

        },
        InitComplete: function() {
            $("[data-toggle='tooltip']").tooltip();




        },
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
        columnDefs: [{
                "width": "1%",
                "targets": [0],
                data: null,
                defaultContent: '',
                render: function(data, type, full, meta) {
                    if (meta.row == 0) {
                        return '<input type="checkbox" name="checkbox" checked <div/>';
                    } {
                        return '<input type="checkbox" name="checkbox" uncheked  <div />';
                    }
                }
            },
            {
                "width": "40%",
                "targets": [1]
            },
            {
                "width": "40%",
                "targets": [2]
            },
            {
                "width": "15%",
                "targets": [3],
                render: function(d) {
                    moment.locale('es-ES');
                    if (d != null) {
                        return moment(d).format('DD/MM/YYYY', 'es');
                    } else {
                        return ''
                    }
                },
            },
            {
                "width": "25%",
                "targets": [4],

            },
            {
                "width": "20%",
                "targets": [4]
            },
            {
                "width": "25%",
                "targets": [5]
            },
            {
                "width": "10%",
                "targets": [6]
            },


        ],
        fixedColumns: true,
        select: {
            style: 'single',
            selector: 'td:first-child'
        },
        bInfo: false,
        lengthChange: false,
        bPaginate: false,
        bFilter: false,
        processing: false,
        serverSide: false,
        cache: false,
        bDestroy: true,
        dom: 'Bfrtip',
        bautoWidth: false,

        "ajax": {
            "url": 'TerminalesDatatable?linea_usuario_id=' + numm,
            "type": "get",

        },
        buttons: [{
                text: 'Añadir Terminal',
                action: function(e, dt, node, config) {
                    $(".print-error-msg").find("ul").html('');
                    $(".print-error-msg").css('display', 'none');
                    $('#terminales_nuevo_form')[0].reset();
                    $('#terminales_nuevo_form').parsley().reset();

                    $('#HiddenFields').hide();
                    $('#HiddenFields2').hide();
                    $('#HiddenFields2').hide();
                    $("#type").html("");
                    $("#type").select2();
                    $("#type").select2({
                        // Activamos la opcion "Tags" del plugin
                        width: 'resolve',
                        language: "es",
                        ajax: {
                            dataType: 'json',
                            url: 'GetPoolModelos',
                            delay: 250,
                            processResults: function(data) {

                                return {

                                    results: $.map(data, function(item) {

                                        return {
                                            text: item.Terminal,
                                            id: item.id
                                        }
                                    })
                                };
                            },
                            cache: true
                                // processResults: function (data, page) {

                            //     return {
                            //         results: data
                            //     };
                            // },
                        }
                    });
                    $('#subtype').select2();

                    $("#TerminalUser_Nuevo").modal("show");
                },

            }, {

                text: '<i class="fas fa-sync"></i>',
                titleAttr: 'Refresh',
                action: function(e, dt, node, config) {


                    dt.clear().draw();
                    dt.ajax.reload();
                },

            },
            {

                text: 'Editar Terminal',
                titleAttr: 'Editar Terminal',
                action: function(e, dt, node, config) {
                    $(".print-error-msg").find("ul").html('');
                    $(".print-error-msg").css('display', 'none');
                    $('#btn-submit-editar-terminal').val('Enviar')
                    $('#btn-submit-editar-terminal').attr('disabled', false);
                    $.ajax({
                        "url": 'terminalesusuarios/' + $terminal + '/editar',
                        type: 'get',

                        success: function(data) {

                            if (typeof data.term['Nserie'] === 'undefined' ||
                                data.term['N erie'] === null) {

                                document.querySelector('#ns_terminal').innerHTML = "";
                            } else {
                                document.querySelector('#ns_terminal').innerHTML = "N Serie:   " + data.term['Nserie'];

                            }
                            if (typeof data.term.IMEI === 'undefined' ||
                                data.term.IMEI === null) {
                                document.querySelector('#imei_terminal').innerHTML = "";
                            } else {
                                document.querySelector('#imei_terminal').innerHTML = "IMEI:   " + data.term.IMEI
                            }
                            document.querySelector('#modelo_terminal').innerHTML = $modelo;

                            document.querySelector('#motivo_editar').value = data.Motivo;
                            document.querySelector('#motivo_editar_original_text').value = data.Motivo;
                            document.querySelector('#Observ_term_editar').value = data.Observaciones;
                            document.querySelector('#Observ_term_editar_original_text').value = data.Observaciones;
                            document.querySelector('#toggle-termactual_editar_original_text').value = data.Actual;

                            document.querySelector('#toggle-devant_editar_original_text').value = data.Devuelve_Anterior;
                            if (data.Actual == "1") {
                                $('#toggle-termactual_editar').bootstrapToggle('on');
                            } else {
                                $('#toggle-termactual_editar').bootstrapToggle('off')
                            }
                            if (data.Devuelve_Anterior == "1") {
                                $('#toggle-devant_editar').bootstrapToggle('on');
                            } else {
                                $('#toggle-devant_editar').bootstrapToggle('off')
                            }



                            $("#TerminalModal_Editar").modal("show");
                        },
                        error: function() {

                        }
                    });

                },

            }, {
                text: 'Reasignar Terminal',
                action: function(e, dt, node, config) {
                    $('#TerminalModal_Estado').parsley().reset();
                    $('#submit_estado_term').val('Enviar')
                    $('#submit_estado_term').attr('disabled', false);
                    $('#HiddenFieldsEstado').hide();

                    $('#estado').empty();
                    $('#persona_estado').empty();
                    $('#linea_estado').empty()
                    $('#estado').select2({
                        // Activamos la opcion "Tags" del plugin
                        width: 'resolve',
                        ajax: {
                            dataType: 'json',
                            url: 'GetEstadosTerminales',
                            delay: 250,
                            processResults: function(data) {

                                return {
                                    results: $.map(data, function(item) {

                                        return {
                                            text: item.Estado,
                                            id: item.Id
                                        }
                                    })
                                };
                            },
                            cache: true
                                // processResults: function (data, page) {

                            // return {
                            // results: data
                            // };
                            // },
                        }
                    });





                    $.ajax({
                        "url": 'terminalesusuarios/' + $terminal + '/editar',
                        type: 'get',

                        success: function(data) {

                            document.querySelector('#ns_terminal_estado').innerHTML = data.f_cambio_alta;
                            document.querySelector('#linea_original').value = data.linea_usuario_id;
                            console.log(document.querySelector('#linea_original').value);
                            // console.log(data.Devuelve_Anterior);
                            if (typeof data.term['Nserie'] === 'undefined' ||
                                data.term['Nserie'] === null) {

                                document.querySelector('#ns_terminal_estado').innerHTML = "";
                            } else {
                                document.querySelector('#ns_terminal_estado').innerHTML = "N Serie:   " + data.term['Nserie'];

                            }
                            if (typeof data.term.IMEI === 'undefined' ||
                                data.term.IMEI === null) {
                                document.querySelector('#imei_terminal_estado').innerHTML = "";
                            } else {
                                document.querySelector('#imei_terminal_estado').innerHTML = "IMEI:   " + data.term.IMEI
                            }
                            document.querySelector('#modelo_terminal_estado').innerHTML = $modelo;

                            document.querySelector('#motivo_estado').value = data.Motivo;
                            document.querySelector('#motivo_editar_original_text').value = data.Motivo;
                            document.querySelector('#Observ_term_estado').value = data.Observaciones;
                            document.querySelector('#Observ_term_editar_original_text').value = data.Observaciones;
                            document.querySelector('#toggle-termactual_editar_original_text').value = data.Actual;

                            document.querySelector('#toggle-devant_editar_original_text').value = data.Devuelve_Anterior;
                            if (data.Actual == "1") {
                                $('#termactual_estado').bootstrapToggle('on');
                            } else {
                                $('#termactual_estado').bootstrapToggle('off')
                            }
                            if (data.Devuelve_Anterior == "1") {
                                $('#devant_estado').bootstrapToggle('on');
                            } else {
                                $('#devant_estado').bootstrapToggle('off')
                            }



                            $('#TerminalModal_Estado').modal("show");
                        },
                        error: function() {

                        }
                    });



                },

            }

        ],

        // order: [
        //     [6, "desc"]
        // ],
        columns: [{
                data: 'Checkbox',
                name: 'Checkbox'
            }, {
                "className": 'details-control',
                "orderable": false,
                "searchable": false,
                "data": null,
                "defaultContent": ''
            },

            {
                data: 'Modelo',
                name: 'Modelo'
            },
            {
                data: 'pivot.f_cambio_alta',
                name: 'pivot.f_cambio_alta'
            },

            {
                data: 'pivot.Motivo',
                name: 'pivot.Motivo'
            },
            {
                data: 'pivot.Observaciones',
                name: 'pivot.Observaciones'
            },
            {
                data: 'Actual',
                name: 'Actual'
            },
            {
                data: 'Devuelve Anterior',
                name: 'Devuelve Anterior'
            }


        ],


    });



};


function DatatableHistoricoTerminales(numm) {


    $table = $('.yajra-datatable-HistTerminales').DataTable({


        InitComplete: function() {
            $("[data-toggle='tooltip']").tooltip();




        },
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
        columnDefs: [

            {
                "width": "40%",
                "targets": [0]
            },
            {
                "width": "40%",
                "targets": [1]
            },
            {
                "width": "40%",
                "targets": [2]
            },
            {
                "width": "15%",
                "targets": [3],
                render: function(d) {
                    moment.locale('es-ES');
                    if (d != null) {
                        return moment(d).format('DD/MM/YYYY', 'es');
                    } else {
                        return ''
                    }
                },
            },
            {
                "width": "25%",
                "targets": [4],
                render: function(d) {
                    moment.locale('es-ES');
                    if (d != null) {
                        return moment(d).format('DD/MM/YYYY', 'es');
                    } else {
                        return ''
                    }
                },
            },
            {
                "width": "20%",
                "targets": [5]
            },



        ],
        fixedColumns: true,
        select: {
            style: 'single',
            selector: 'td:first-child'
        },
        bInfo: false,
        lengthChange: false,
        bPaginate: false,
        bFilter: false,
        processing: false,
        serverSide: false,
        cache: false,
        bDestroy: true,
        bautoWidth: false,

        "ajax": {
            "url": 'TerminalesHistDatatable?linea_usuario_id=' + numm,
            "type": "get",

        },


        order: [
            [3, "desc"]
        ],
        columns: [{
                data: 'Modelo',
                name: 'Modelo'
            },
            {
                data: 'Nserie',
                name: 'Nserie'
            },
            {
                data: 'IMEI',
                name: 'IMEI'
            },
            {
                data: 'pivot.f_cambio_alta',
                name: 'pivot.f_cambio_alta'
            },
            {
                data: 'pivot.f_baja',
                name: 'pivot.f_baja'
            },
            {
                data: 'pivot.Motivo',
                name: 'pivot.Motivo'
            },
            {
                data: 'pivot.Observaciones',
                name: 'pivot.Observaciones'
            },


        ],


    });



};


$("#TablaLineas").on('submit', '.form-eliminar', function() {
    event.preventDefault();
    const form = $(this);
    $table = $('.yajra-datatable-Lineas').DataTable();
    swal({
        title: '¿ Está seguro que desea eliminar el registro ?',
        text: "Esta acción no se puede deshacer!",
        icon: 'warning',
        buttons: {
            cancel: "Cancelar",
            confirm: "Aceptar"
        },
    }).then((value) => {
        if (value) {

            ajaxRequest(form);





        }
    });
});
// $("#TablaTerminales").on('submit', '.form-eliminar', function() {
//     event.preventDefault();
//     const form = $(this);

//     $('.btn-submit-estado-terminal').val('Enviar');
//     $('.btn-submit-estado-terminal').attr('disabled', false);
//     $(".print-error-msg").find("ul").html('');
//     $(".print-error-msg").css('display', 'none');
//     $('#terminales_editar_form')[0].reset();
//     $('#terminales_estado_form').parsley().reset();
//     $("#estado").html("");
//     $("#terminales_editar_form").modal("show");
//     $('#estado').select2();
//     $('#estado').select2({
//         // Activamos la opcion "Tags" del plugin
//         width: 'resolve',
//         ajax: {
//             dataType: 'json',
//             url: 'GetEstadosTerminales',
//             delay: 250,
//             processResults: function(data) {

//                 return {
//                     results: $.map(data, function(item) {

//                         return {
//                             text: item.Estado,
//                             id: item.Id
//                         }
//                     })
//                 };
//             },
//             cache: true
//                 // processResults: function (data, page) {

//             // return {
//             // results: data
//             // };
//             // },
//         }
//     });
//     $.ajax({
//         "url": 'terminalesusuarios/' + $terminal + '/editar',
//         type: 'get',

//         success: function(data) {






//         },
//         error: function() {

//         }
//     });

// });

$("#TablaAmpliaciones").on('submit', '.form-eliminar', function() {
    event.preventDefault();
    const form = $(this);
    swal({
        title: '¿ Está seguro que desea eliminar el registro ?',
        text: "Esta acción no se puede deshacer!",
        icon: 'warning',
        buttons: {
            cancel: "Cancelar",
            confirm: "Aceptar"
        },
    }).then((value) => {
        if (value) {

            ajaxRequest(form);
        }
    });
});


$("#TablaTarjetas").on('submit', '.form-eliminar', function() {
    event.preventDefault();
    const form = $(this);
    swal({
        title: '¿ Está seguro que desea eliminar el registro ?',
        text: "Esta acción no se puede deshacer!",
        icon: 'warning',
        buttons: {
            cancel: "Cancelar",
            confirm: "Aceptar"
        },
    }).then((value) => {
        if (value) {

            ajaxRequest(form);
        }
    });
});












function printErrorMsg(msg) {
    $(".print-error-msg").find("ul").html('');
    $(".print-error-msg").css('display', 'block');
    $.each(msg, function(key, value) {
        $(".print-error-msg").find("ul").append('<li>' + value + '</li>');
    });
}




/********Se recargan todas las datatables al cambiar de linea******************************** */

$('#TablaLineas tbody').on('click', 'tr', function() {


    var tableData = $(this).children("td").map(function() {
        return $(this).text();
    }).get();

    nummovil = tableData[1];
    linea = nummovil;
    $('#TablaLineas tbody > tr').removeClass('markrow');
    $(this).addClass('markrow');
    var table = $('#TablaLineas').DataTable();
    table.$("input[type=checkbox]").prop("checked", false);


    $(this).find('input[type=checkbox]').prop('checked', true);

    // var url = `TarjetasDatatable?linea_usuario_id=${nummovil}`;
    // $('.yajra-datatable-Tarjetas').DataTable().ajax.url(url).load();
    // $('.yajra-datatable-Tarjetas').DataTable().draw();
    // var url = `AmpliacionesDatatable?linea_usuario_id=${nummovil}`;
    // $('.yajra-datatable-Ampliaciones').DataTable().ajax.url(url).load();
    // $('.yajra-datatable-Ampliaciones').DataTable().draw();
    // var url = `TerminalesDatatable?linea_usuario_id=${nummovil}`;
    // $('.yajra-datatable-Terminales').DataTable().ajax.url(url).load();
    // $('.yajra-datatable-Terminales').DataTable().draw();

});


$('#TablaTarjetas tbody').on('click', 'tr', function() {


    var tableData = $(this).children("td").map(function() {
        return $(this).text();
    }).get();


    var table = $('#TablaTarjetas').DataTable();

    $tarjetas_usuario_id = table.row(this).data().id;

    console.log($tarjetas_usuario_id);

    table.$("input[type=checkbox]").prop("checked", false);


    $(this).find('input[type=checkbox]').prop('checked', true);



});

/********Se guarda el valor id de la linea seleccionada para editar o eliminar******************************** */
$('#TablaAmpliaciones tbody').on('click', 'tr', function() {

    var table = $('#TablaAmpliaciones').DataTable();
    $ampliaciones_id = table.row(this).data().id;

    // console.log($ampliaciones_id);


    table.$("input[type=checkbox]").prop("checked", false);

    $(this).find('input[type=checkbox]').prop('checked', true);

});

$('#TablaTerminales tbody').on('click', 'td.details-control', function() {

    var tr = $(this).closest('tr');
    var row = $table.row(tr);

    if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    } else {
        // Open this row
        row.child(template(row.data())).show();
        tr.addClass('shown');
    }
});

$('#TablaTerminales tbody').on('click', 'tr', function() {


    var tableData = $(this).children("td").map(function() {
        return $(this).text();
    }).get();
    var table = $('#TablaTerminales').DataTable();
    $terminal = table.row(this).data().id;

    var table = $('#TablaTerminales').DataTable();
    table.$("input[type=checkbox]").prop("checked", false);

    $(this).find('input[type=checkbox]').prop('checked', true);

});


$("table").on('change', 'input', function(e) {
    e.preventDefault();
    var table = $('#TablaLineas').DataTable();
    table.$("input[type=checkbox]").prop("checked", false);
    $(this).prop("checked", true);

});

$('#TablaAmpliaciones').on('init.dt', function(evt, settings) {
    if (settings.fnRecordsTotal() < settings._iDisplayLength) {
        // hide pagination controls, fewer records than minimum length
        // console.log(settings._iDisplayLength);
        // console.log(settings.aLengthMenu[0]);
        // console.log(settings.fnRecordsTotal());
        $(settings.nTableWrapper).find('.dataTables_paginate, .dataTables_length, .dataTables_info').hide();
    }
})
$(document).popover({
    selector: '[data-toggle=hover]',
    html: true,
    trigger: 'hover'

});




$('.datpick').datetimepicker({

    todayHighlight: true,
    todayBtn: "linked",
    language: "es",
    autoclose: true,
    format: {
        toDisplay: function(date, format, language) {
            var date = new Date(date),
                month = '' + (date.getMonth() + 1),
                day = '' + date.getDate(),
                year = date.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [day, month, year].join('/');
        },
        toValue: function(date, format, language) {
            var date = new Date(date),
                month = '' + (date.getMonth() + 1),
                day = '' + date.getDate(),
                year = date.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');
        }
    }
});




function ajaxRequest(form) {
    $check = "";
    return $.ajax({
        url: form.attr('action'),
        type: 'POST',
        data: form.serialize(),
        success: function(respuesta) {
            if (respuesta.mensaje == "ok") {
                form.parents('tr').remove();

                Helper.notificaciones('El registro fue eliminado correctamente', 'Telefonia', 'success');

            } else {;
                Helper.notificaciones('El registro no pudo ser eliminado, hay recursos usandolo', 'Telefonia', 'error');

            }


        },
        error: function() {

        }

    });
}