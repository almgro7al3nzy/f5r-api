<?php if (isset($component)) { $__componentOriginal749747b3cad97a84caef38f50f9a7f98dfdbd64e = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\AdminAppLayout::class, []); ?>
<?php $component->withName('admin-app-layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withAttributes([]); ?>
    <div class="row justify-content-between">
        <div class="col-lg-12 col-md-12">
            <div class="card card-static-2 mt-30 mb-30">
                
                <div class="card-body-table">
                    <div class="col-12 table-responsive">
                        <table class="table ucp-table table-hover datatable">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" class="check-all"></th>
                                    <th><?php echo e(__('common.title')); ?></th>
                                    <th><?php echo e(__('common.last_updated')); ?></th>
                                    <th><?php echo e(__('common.status')); ?></th>
                                    <th><?php echo e(__('common.actions.apply')); ?></th>
                                </tr>
                            </thead>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal749747b3cad97a84caef38f50f9a7f98dfdbd64e)): ?>
<?php $component = $__componentOriginal749747b3cad97a84caef38f50f9a7f98dfdbd64e; ?>
<?php unset($__componentOriginal749747b3cad97a84caef38f50f9a7f98dfdbd64e); ?>
<?php endif; ?>
<script type="text/javascript">
    $(document).ready(() => {
        table = $('.datatable').DataTable({
            processing: true,
            serverSide: true,
            ajax: "<?php echo e(route('pages')); ?>",
            columns: [{
                    data: 'id',
                    name: 'id',
                    orderable: false
                },
                {
                    data: 'title',
                    name: 'title'
                },
                {
                    data: 'updated_at',
                    name: 'updated_at'
                },
                {
                    data: 'status',
                    name: 'status',
                    orderable: false,
                    searchable: false
                },
                {
                    data: 'action',
                    name: 'action',
                    orderable: false,
                    searchable: false
                },
            ]
        });

    });
</script><?php /**PATH F:\xampp\htdocs\justalk1\resources\views/admin/pages/index.blade.php ENDPATH**/ ?>