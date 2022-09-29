<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{$currentLang['direction']}}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description-songalaxy" content="">
    <meta name="author-songalaxy" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'JusTalk') }} | {{ $title }}</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('admin_assets/css/styles.css') }}">

    <!-- Vendor Stylesheets -->
    <link rel="stylesheet" type="text/css" href="{{ asset('admin_assets/css/plugins.css') }}">
    <link href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css" rel="stylesheet">

    @if($currentLang['direction'] == 'rtl')
        <link rel="stylesheet" type="text/css" href="{{ asset('admin_assets/css/rtl.css') }}">
    @endif
    

</head>

<body class="sb-nav-fixed">
    @include('admin.layouts.header')
    <div id="layoutSidenav">


        @include('admin.layouts.sidebar')

        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid">
                    <h2 class="mt-30 page-title">{{ $title }}</h2>
                    <ol class="breadcrumb mb-20">
                        <li class="breadcrumb-item">{{ __('common.dashboard') }}</li>
                        <li class="breadcrumb-item active">{{ $title }}</li>
                    </ol>
                    {{ $slot }}
                </div>
            </main>

            @include('admin.layouts.footer')
        </div>
    </div>
    <!-- <script src="js/jquery-3.4.1.min.js"></script> -->
    <script src="{{ asset('admin_assets/js/jquery-3.4.1.min.js') }}"></script>
    <script src="{{ asset('admin_assets/js/plugins.js') }}"></script>
    <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
    <!-- <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/chart/highcharts.js"></script>
    <script src="vendor/chart/exporting.js"></script>
    <script src="vendor/chart/export-data.js"></script>
    <script src="vendor/chart/accessibility.js"></script> -->
    <script type="text/javascript">
        const languages = {
            'delete_confirm': "{{ __('common.messages.delete_confirm') }}",
            'bulk_action_confirm': "{{ __('common.messages.bulk_actions_confirm') }}",
            'select_action':"{{ __('common.messages.select_action') }}",
            'select_record':"{{__('common.messages.select_record')}}"
        };
        var table;
    </script>
    <script src="{{ asset('admin_assets/js/scripts.js') }}"></script>
    <script type="text/javascript">
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            error: function (error) {
                showToastMessage(error.responseJSON.message);
            }
        });
        (function ($, DataTable) {

// Datatable global configuration
$.extend(true, DataTable.defaults, {
    language: {
         "sProcessing": "{{ __('common.datatable.proccessing')}}",
         "sLengthMenu": "{{ __('common.datatable.lenght_menu', ['menu' => '_MENU_']) }}",
         "sZeroRecords": "{{ __('common.datatable.no_matching_records_found')}}",
         "sEmptyTable": "{{ __('common.datatable.no_data_available_in_table')}}",
         "sInfo": "{{ __('common.datatable.sInfo', ['start' => '_START_', 'end'=>'_END_' , 'total'=>'_TOTAL_']) }}",
         "sInfoFiltered": "({{ __('common.datatable.filtered_entries', ['max' => '_MAX_']) }})",
        "sInfoPostFix": "",
        "sSearch": "{{ __('common.datatable.search')}}",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": "{{ __('common.datatable.loading_records')}}",
        "oPaginate": {
            "sFirst": "{{ __('common.datatable.first')}}",
            "sLast": "{{ __('common.datatable.last')}}",
            "sNext": "{{ __('common.datatable.next')}}",
            "sPrevious": "{{ __('common.datatable.previous')}}"
        },
        // "oAria": {
        //     "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        //     "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        // }
    }
});

})(jQuery, jQuery.fn.dataTable);
    </script>
    @if(session('error'))
        <script type="text/javascript">
            showToastMessage("{{session('error') }}");
        </script>
    @endif
    @if(session('success'))
        <script type="text/javascript">
            showToastMessage("{{session('success') }}", 'Success', 'f96868');
        </script>
    
    @endif
</body>

</html>