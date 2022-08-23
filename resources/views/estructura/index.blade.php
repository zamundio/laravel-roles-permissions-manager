@extends('layouts.admin')


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jstree/3.2.1/themes/default/style.min.css" />
@section('content')
@can('estructura_show')

    <form id="estructura">
        <div class="container-fluid">
            <div class="row">

                <!-- left column -->
                <div class="col">
                    <!-- general form elements -->
                    <div class="card card-primary">

                        <div class="card-header">
                            <h3 class="card-title">Estructura</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form id="estructura">
                            <div class="card-body">
                                <div class="input-group">
                                    <input type="text" class="form-control" id="busqueda_tree" autocomplete="off" autoplaceholder="Buscar..">
                                    <div class="input-group-append">
                                        <button class="btn btn-secondary" type="button">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                                <br>
                                <div id="tree-container" class="demo" style="width:100px;">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-md-9">
                    <!-- general form elements -->
                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title">Datos</h3>
                        </div>

                        <!-- /.card-header -->
                        <!-- form start -->

                        <div id="content2">

                        </div>
                        <!-- /.card -->

                    </div>
                    <!-- /.row -->
                </div><!-- /.container-fluid -->
    </form>

@endcan
@endsection

@section('scripts')

{{-- <script src="https://cdn.datatables.net/buttons/1.6.5/js/dataTables.buttons.min.js" type="text/javascript"></script> --}}
{{-- <script src="{{ asset('js/jquery.slimscroll.js') }}"></script> --}}



<script src="{{ asset('js/estructura/index.js') }}"></script>


<script>
    var load_urlTree = "{{ route('ajaxFillStructTree.get') }}";

    $('#estructura').submit(function (e) {
        e.preventDefault();
        //do something
    });

</script>
@endsection