<div id="content2">
    <?php $js = rand(1, 10000); ?>
    <meta name="csrf-token" content="{{ csrf_token() }}">






<script src="{{ asset('js/estructura/form.js?v=') }}" .$js></script>
    {{-- <script src="{{ asset('assets/pages/scripts/estructura/form.js?v=') }}" .$js type="text/javascript"></script> --}}
    {{-- <script src="{{ asset('js/handlebars.js') }}"></script> --}}
    <script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.1/moment-with-locales.min.js"></script>
    <script src="https://cdn.datatables.net/plug-ins/1.10.19/dataRender/datetime.js"></script>

    {{-- <script id="details-template" type="text/x-handlebars-template">
        @verbatim
            <table class="table">
                <tr>
                    <td>N Serie:</td>
                    <td>{{ NSerie }}</td>
                </tr>
                <tr>
                    <td>IMEI:</td>
                    <td>{{ IMEI }}</td>
                </tr>
                <tr></tr>
                    <td>Estado:</td>
                    <td>{{ Estado }}</td>
                </tr>
            </table>
@endverbatim
    </script>
    <script>
        var template = Handlebars.compile($("#details-template").html());

    </script> --}}
    <style>
.btn-sml { height: 2vh; } /* change the value according to your need. */

    </style>
    <form class="form" id="formdatos" name="formdatos">
    <div class="card-body">


        <div class="form-row">
            <div class="form-group col-md-1">
                <label for="Codigo">Codigo</label>
                <input type="text" class="form-control" id="Codigo" name="Codigo" placeholder="" VALUE={{ $estructuras->EMP_CODE }}>

            </div>
            <div class="form-group col-md-2">
                <label for="Nombre">Nombre</label>
                <input type="text" class="form-control" id="Nombre" placeholder="" value={{ $estructuras->FIRST_NAME }}>
            </div>

            <div class="form-group col-md-3">
                <label for="Apellidos">Apellidos</label>
                <input type="text" class="form-control" id="Apellidos" name="Apellidos" placeholder="" value="{{ old('nombre', $estructuras->LAST_NAME ?? '') }}">
            </div>
            <div class="form-group col-md-1">
                <label for="fechaalta">Fecha Alta</label>

                <input id="fechaalta" name="fechaalta" type="text" class="form-control" value="{{ old('nombre', $estructuras->HIRE_DATE ?? '') }}">

            </div>
            <div class="form-group col-md-1">
                <label for="fechaalta">Fecha Baja</label>

                <input id="fechabaja" name="fechabaja" type="text" class="form-control" value="{{ old('nombre', $estructuras->ACTUAL_LEAVE_DATE ?? '') }}">

            </div>
            <div class="form-group col-md-1">
                <label for="dni">DNI</label>
                <input type="text" class="form-control" id="dni" value="{{ old('nombre', $estructuras->EMP_GLOBAL_CODE ?? '') }}">
            </div>
            <div class="form-group col-lg-2">
                <label for="direccion">Email</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="Email" value="{{ old('nombre', $estructuras->EMAIL ?? '') }}">
                    <span class="input-group-btn">
                        <button class="btn btn-default" id="botonmail" type="button" data-toggle="modal" data-target="#modalMail"> <i class="fas fa-envelope" aria-hidden="true"></i></button>
                    </span>

                </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->


        </div>



        <div class="form-row">

            <div class="form-group col-md-1">
                <label for="telefono">Teléfono</label>
                <input type="text" class="form-control" id="telefono" value="{{ old('nombre', $estructuras->PHONE ?? '') }}">
            </div>

            <div class="form-group col-lg-4">
                <label for="direccion">Dirección</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="direccion" value="{{ old('nombre', $estructuras->HOME_ADDRESS ?? '') }}">



                </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->

            <div class="form-group col-md-2">
                <label for="poblacion">Poblacion</label>
                <input type="text" class="form-control" id="poblacion" value="{{ old('nombre', $estructuras->HOME_CITY ?? '') }}">
            </div>
            <div class="form-group col-md-1">
                <label for="cp">CP</label>
                <input type="text" class="form-control" id="cp" value="{{ old('nombre', $estructuras->HOME_POSTAL_CODE ?? '') }}">
            </div>
            <div class="form-group col-md-2">
                <label for="provincia">Provincia</label>
                <input type="text" class="form-control" id="provincia" value="{{ old('nombre', $estructuras->HOME_STATE_CODE ?? '') }}">
            </div>
            <div class="form-group col-md-1">
                <br>
                {{-- <a href="{{ route('mostrar_personal', ['id' => $estructuras->EMP_CODE]) }}" class="btn btn-info" role="button">Mas Datos</a> --}}
            </div>
            <div class="form-group col-md-4">
                <label for="posicion">Posición</label>
                <input type="text" class="form-control" id="posicion" value="{{ old('nombre', $estructuras->POSITION_TITLE ?? '') }}">
            </div>


            @if($estructuras->SUBAREA2 != null)
                <div class="form-group col-md-2">
                    <label for="abrev">linea</label>
                    <input type="text" class="form-control" id="linea" value="{{ old('nombre', $estructuras->GLOBAL_POS_CODE ?? '') }}">
                </div>
                <div class="form-group col-md-1">
                    <label for="zona">Zona</label>
                    <input type="text" class="form-control" id="zona" value="{{ old('nombre', $estructuras->SUBAREA2 ?? '') }}">
                </div>
                <div class="form-group col-md-2">
                    <label for="wp">Workplace</label>
                    <input type="text" class="form-control" id="wp" value="{{ old('nombre', $estructuras->SUBAREA3 ?? '') }}">
                </div>

            @endif
            @if($estructuras->parent!=null)
                <div class="form-group col-md-3">
                    <label for="wp">Responsable</label>
                    <input type="text" class="form-control" id="wp" value="{{ old('nombre', $estructuras->parent->LAST_NAME . ', ' . $estructuras->parent->FIRST_NAME ?? '') }}">
                </div>
            @endif


        </div>

        <div class="form-row">
            {{-- <div class="container-fluid"> --}}
            <div class="col-md-4">
                <table class="table  table-striped table-bordered dt-responsive table-hover yajra-datatable-Lineas" id="TablaLineas">
                    <thead>
                        <h3> Lineas </h3>

                        <th width="5px"></th>
                        <th width="5px">Numero Movil</th>
                        <th width="10px">Observaciones</th>
                        <th width="5px">XLS</th>
                        <th width="10px"></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            {{-- <div class="container-fluid"> --}}
            <div class="col-md-8">
                <table class="table  table-striped table-bordered dt-responsive table-hover yajra-datatable-Tarjetas" id="TablaTarjetas">
                    <thead>
                        <h3> Tarjetas </h3>
                        <tr>

                            <th width="10px"></th>
                            <th width="10px">Obs</th>
                            <th width="10px">Abrev</th>
                            <th width="10px">Num SIM</th>
                            <th width="10px">PIN</th>
                            <th width="10px">PUK</th>
                            <th data-toggle="tooltip" title="" data-placement="top" data-original-title="Principal" width="10px">PR</th>
                            <th data-toggle="tooltip" title="" data-placement="top" data-original-title="Solo Datos" width="10px">DA</th>
                            <th data-toggle="tooltip" title="" data-placement="top" data-original-title="Fecha Activación" width="10px">F Act.</th>
                            <th width="10px"></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

            {{-- </div> --}}
            {{-- </div> --}}
            {{-- <div class="container-fluid"> --}}
            <div class="col-md-4">
                <table class="table  table-striped table-bordered dt-responsive table-hover yajra-datatable-Ampliaciones" id="TablaAmpliaciones">
                    <thead>
                        <h3> Ampliaciones GB </h3>
                        <tr>

                            <th width="10px"></th>
                            <th width="10px">Fecha</th>
                            <th width="10px">Plan </th>
                            <th width="13px">Coste </th>
                            <th width="10px">Obs</th>
                            <th width="10px"></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="col-md-8">
                <table class="table  table-striped table-bordered dt-responsive table-hover yajra-datatable-Terminales" id="TablaTerminales">
                    <thead>
                        <h3> Terminales </h3>
                        <tr>

                            <th width="10px"></th>
                            <th width="10px"></th>
                            <th width="10px">Terminal</th>
                            <th data-toggle="tooltip" title="" data-placement="top" data-original-title="Fecha Alta o Cambio" width="10px">Fecha</th>
                            <th width="10px">Motivo</th>
                            <th width="10px">Observaciones</th>
                            <th width="10px">Actual</th>
                            <th data-toggle="tooltip" title="" data-placement="top" data-original-title="Devuelve Anterior?" width="10px">Devo?</th>

                        </tr>
                    </thead>
                    <tbody>
                    </tbody>

                </table>
            </div>
            <div class="col-md-4">
            </div>
            <div class="col-md-8">
                <table class="table  table-striped table-bordered dt-responsive table-hover yajra-datatable-HistTerminales" id="TablaHistTerminales">
                    <thead>
                        <h3> Historico Terminales </h3>
                        <tr>



                            <th width="10px">Terminal</th>
                            <th width="10px">N Serie</th>
                            <th width="10px">IMEI</th>
                            <th data-toggle="tooltip" title="" data-placement="top" data-original-title="Fecha Alta o Cambio" width="10px">Fecha</th>
                            <th data-toggle="tooltip" title="" data-placement="top" data-original-title="Fecha Baja del Usuario" width="15px">Fecha B</th>
                            <th width="10px">Motivo</th>
                            <th width="10px">Observaciones</th>
                            {{-- <th width="10px">Actual</th>
                 <th data-toggle="tooltip" title="" data-placement="top" data-original-title="Devuelve Anterior?" width="10px">Devo?</th> --}}

                        </tr>
                    </thead>
                    <tbody>
                    </tbody>

                </table>
            </div>


            {{-- </div> --}}

            </form>





        </div>
        {{-- @include('estructura.modales_abreviados.ShowRed')

        @include('estructura.modales_tarjetas.Nuevo')
        @include('estructura.modales_tarjetas.Editar')
        @include('estructura.modales_linea.Nuevo')
        @include('estructura.modales_linea.Editar')
        @include('estructura.modales_terminales.Nuevo')
        @include('estructura.modales_terminales.Editar')
        @include('estructura.modales_terminales.Estado')
        @include('estructura.modales_ampliaciones.Nuevo')
        @include('estructura.modales_terminales.contacto')

        @include('estructura.modales_ampliaciones.Editar') --}}



        {{-- @include('estructura.modales_tarjetas.Editar') --}}

