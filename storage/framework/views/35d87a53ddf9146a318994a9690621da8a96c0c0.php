<?php if (isset($component)) { $__componentOriginal749747b3cad97a84caef38f50f9a7f98dfdbd64e = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\AdminAppLayout::class, []); ?>
<?php $component->withName('admin-app-layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withAttributes([]); ?>
    <div class="row justify-content-between">
        <div class="col-lg-12 col-md-12">
            <div class="card card-static-2 mt-30 mb-30">
                <div class="card-title-2 row">

                    <div class="col-lg-3 col-md-4">
                        <div class="bulk-section mt-20">
                            <div class="input-group">
                                <select id="action" name="action" class="form-control">
                                <option selected><?php echo e(__('common.actions.bulk_actions')); ?></option>
                                    <option value="1"><?php echo e(__('common.actions.active')); ?></option>
                                    <option value="0"><?php echo e(__('common.actions.inactive')); ?></option>
                                    <option value="9"><?php echo e(__('common.actions.delete')); ?></option>
                                </select>
                                <div class="input-group-append">
                                    <button class="status-btn hover-btn bulk_actions" data-action="<?php echo e(route('bulkMeetings')); ?>" type="button"><?php echo e(__('common.actions.apply')); ?></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 text-right">
                        <a href="javascript:void(0)" data-toggle="modal" data-target="#modalForm" class="add-btn hover-btn add_new_button"><?php echo e(__('Add New Meeting')); ?></a>
                    </div>
                </div>
                <div class="card-body-table">
                    <div class="col-12 table-responsive">
                        <table class="table ucp-table table-hover datatable">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" class="check-all"></th>
                                    <th><?php echo e(__('Meeting Code')); ?></th>
                                    <th><?php echo e(__('Title')); ?></th>
                                    <th><?php echo e(__('Host Date/Time')); ?></th>
                                    <th><?php echo e(__('Hosted By')); ?></th>
                                    <th><?php echo e(__('Status')); ?></th>
                                    <th><?php echo e(__('Action')); ?></th>
                                </tr>
                            </thead>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form method="POST" action="<?php echo e(route('addMeeting')); ?>">
                    <input type="hidden" name="meeting_id" id="meeting_id"/>
                    <?php echo csrf_field(); ?>
                    <div class="modal-header text-center">
                        <h4 class="modal-title w-100 font-weight-bold"><?php echo e(__('Add/Update Meeting')); ?></h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body mx-3">
                        <div class="form-group">
                            <label class="form-label"><?php echo e(__('Meeting Code')); ?>*</label>
                            <input type="text" class="form-control" name="meeting_code" id="meeting_code" placeholder="<?php echo e(__('Enter meeting code')); ?>" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label"><?php echo e(__('Meeting Title')); ?>*</label>
                            <input type="text" name="meeting_title" class="form-control" id="meeting_title" placeholder="<?php echo e(__('Enter meeting title')); ?>" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label"><?php echo e(__('Remarks')); ?></label>
                            <textarea name="remarks" id="remarks" class="form-control" placeholder="<?php echo e(__('Enter meeting remark')); ?>"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="form-label"><?php echo e(__('Status')); ?>*</label>
                            <select id="status" name="status" class="form-control" required>
                                <option selected value="1"><?php echo e(__('Active')); ?></option>
                                <option value="0"><?php echo e(__('Inactive')); ?></option>
                            </select>
                        </div>

                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button class="save-btn hover-btn mt-0" type="submit"><?php echo e(__('Save/Update')); ?></button>
                    </div>
                </form>
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
            ajax: "<?php echo e(route('meetings')); ?>",
            columns: [{
                    data: 'id',
                    name: 'id',
                    orderable: false
                },
                {
                    data: 'meeting_code',
                    name: 'meeting_code'
                },
                {
                    data: 'meeting_title',
                    name: 'meeting_title'
                },
                {
                    data: 'created_at',
                    name: 'created_at'
                },
                {
                    data: 'host_name',
                    name: 'host_name'
                },
                {
                    data: 'status',
                    name: 'status'
                },
                {
                    data: 'action',
                    name: 'action',
                    orderable: false,
                    searchable: false
                },
            ]
        });

        $(document).on('click', '.update_data', function(e) {
            var id = $(this).attr('data-id');
            $('#meeting_id').val(id);
            $.ajax('<?= url('admin/meeting/view') ?>/' + id, // request url
                {
                    success: function(data) { // success callback function
                        $('#meeting_code').val(data.meeting_code);
                        $('#meeting_title').val(data.meeting_title);
                        $('#remarks').val(data.remarks);
                        $('#status').val(data.status);

                    }
                });

        });
        $(document).on('click', '.add_new_button', function() {
            $('#meeting_id').val('');
        })
    });
</script><?php /**PATH F:\xampp\htdocs\justalk1\resources\views/admin/meetings/index.blade.php ENDPATH**/ ?>