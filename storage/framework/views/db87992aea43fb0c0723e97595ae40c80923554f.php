<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>" dir="<?php echo e($currentLang['direction']); ?>">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description-songalaxy" content="">
    <meta name="author-songalaxy" content="">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title><?php echo e(config('app.name', 'JusTalk')); ?> | <?php echo e($title); ?></title>
    <link rel="stylesheet" type="text/css" href="<?php echo e(asset('admin_assets/css/styles.css')); ?>">

    <!-- Vendor Stylesheets -->
    <link rel="stylesheet" type="text/css" href="<?php echo e(asset('admin_assets/css/plugins.css')); ?>">
    <link href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css" rel="stylesheet">

    <?php if($currentLang['direction'] == 'rtl'): ?>
        <link rel="stylesheet" type="text/css" href="<?php echo e(asset('admin_assets/css/rtl.css')); ?>">
    <?php endif; ?>
    

</head>

<body class="sb-nav-fixed">
    <?php echo $__env->make('admin.layouts.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <div id="layoutSidenav">


        <?php echo $__env->make('admin.layouts.sidebar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid">
                    <h2 class="mt-30 page-title"><?php echo e($title); ?></h2>
                    <ol class="breadcrumb mb-20">
                        <li class="breadcrumb-item"><?php echo e(__('common.dashboard')); ?></li>
                        <li class="breadcrumb-item active"><?php echo e($title); ?></li>
                    </ol>
                    <?php echo e($slot); ?>

                </div>
            </main>

            <?php echo $__env->make('admin.layouts.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        </div>
    </div>
    <!-- <script src="js/jquery-3.4.1.min.js"></script> -->
    <script src="<?php echo e(asset('admin_assets/js/jquery-3.4.1.min.js')); ?>"></script>
    <script src="<?php echo e(asset('admin_assets/js/plugins.js')); ?>"></script>
    <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
    <!-- <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/chart/highcharts.js"></script>
    <script src="vendor/chart/exporting.js"></script>
    <script src="vendor/chart/export-data.js"></script>
    <script src="vendor/chart/accessibility.js"></script> -->
    <script type="text/javascript">
        const languages = {
            'delete_confirm': "<?php echo e(__('common.messages.delete_confirm')); ?>",
            'bulk_action_confirm': "<?php echo e(__('common.messages.bulk_actions_confirm')); ?>",
            'select_action':"<?php echo e(__('common.messages.select_action')); ?>",
            'select_record':"<?php echo e(__('common.messages.select_record')); ?>"
        };
        var table;
    </script>
    <script src="<?php echo e(asset('admin_assets/js/scripts.js')); ?>"></script>
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
         "sProcessing": "<?php echo e(__('common.datatable.proccessing')); ?>",
         "sLengthMenu": "<?php echo e(__('common.datatable.lenght_menu', ['menu' => '_MENU_'])); ?>",
         "sZeroRecords": "<?php echo e(__('common.datatable.no_matching_records_found')); ?>",
         "sEmptyTable": "<?php echo e(__('common.datatable.no_data_available_in_table')); ?>",
         "sInfo": "<?php echo e(__('common.datatable.sInfo', ['start' => '_START_', 'end'=>'_END_' , 'total'=>'_TOTAL_'])); ?>",
         "sInfoFiltered": "(<?php echo e(__('common.datatable.filtered_entries', ['max' => '_MAX_'])); ?>)",
        "sInfoPostFix": "",
        "sSearch": "<?php echo e(__('common.datatable.search')); ?>",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": "<?php echo e(__('common.datatable.loading_records')); ?>",
        "oPaginate": {
            "sFirst": "<?php echo e(__('common.datatable.first')); ?>",
            "sLast": "<?php echo e(__('common.datatable.last')); ?>",
            "sNext": "<?php echo e(__('common.datatable.next')); ?>",
            "sPrevious": "<?php echo e(__('common.datatable.previous')); ?>"
        },
        // "oAria": {
        //     "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        //     "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        // }
    }
});

})(jQuery, jQuery.fn.dataTable);
    </script>
    <?php if(session('error')): ?>
        <script type="text/javascript">
            showToastMessage("<?php echo e(session('error')); ?>");
        </script>
    <?php endif; ?>
    <?php if(session('success')): ?>
        <script type="text/javascript">
            showToastMessage("<?php echo e(session('success')); ?>", 'Success', 'f96868');
        </script>
    
    <?php endif; ?>
</body>

</html><?php /**PATH F:\xampp\htdocs\justalk1\resources\views/admin/layouts/app.blade.php ENDPATH**/ ?>