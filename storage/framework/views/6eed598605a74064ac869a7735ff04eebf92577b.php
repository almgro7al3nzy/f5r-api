<?php if (isset($component)) { $__componentOriginal749747b3cad97a84caef38f50f9a7f98dfdbd64e = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\AdminAppLayout::class, []); ?>
<?php $component->withName('admin-app-layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withAttributes([]); ?>
<div class="row">
    <div class="col-xl-3 col-md-6">
        <div class="dashboard-report-card purple">
            <div class="card-content">
                <span class="card-title"><?php echo e(__('common.total_customers')); ?></span>
                <span class="card-count"><?php echo e($total_users); ?></span>
            </div>
            <div class="card-media">
                <i class="fab fa-rev"></i>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="dashboard-report-card red">
            <div class="card-content">
                <span class="card-title"><?php echo e(__('common.total_meetings')); ?></span>
                <span class="card-count"><?php echo e($total_meetings); ?></span>
            </div>
            <div class="card-media">
                <i class="far fa-times-circle"></i>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="dashboard-report-card info">
            <div class="card-content">
                <span class="card-title"><?php echo e(__('common.total_meeting_histories')); ?></span>
                <span class="card-count"><?php echo e($total_meetings_history); ?></span>
            </div>
            <div class="card-media">
                <i class="fas fa-sync-alt rpt_icon"></i>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="dashboard-report-card success">
            <div class="card-content">
                <span class="card-title"><?php echo e(__("common.todays_meetings")); ?></span>
                <span class="card-count"><?php echo e($todays_meetings); ?></span>
            </div>
            <div class="card-media">
                <i class="fas fa-money-bill rpt_icon"></i>
            </div>
        </div>
    </div>
   
    <div class="col-xl-12 col-md-12">
        <div class="card card-static-2 mb-30">
            <div class="card-title-2">
                <h4><?php echo e(__('common.recent_meetings')); ?></h4>
                <a href="<?php echo e(route('meetingHistory')); ?>" class="view-btn hover-btn"><?php echo e(__('common.actions.view_all')); ?></a>
            </div>
            <div class="card-body-table">
                <div class="table-responsive">
                    <table class="table ucp-table table-hover">
                        <thead>
                            <tr>
                                <th style="width:130px"><?php echo e(('common.code')); ?></th>
                                <th style="width:130px"><?php echo e(('common.title')); ?></th>
                                <th style="width:130px"><?php echo e(('common.remark')); ?></th>
                                <th style="width:130px"><?php echo e(('common.host')); ?></th>
                                <th style="width:130px"><?php echo e(('common.date')); ?></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if(count($recent_meetings) > 0): ?>
                                <?php $__currentLoopData = $recent_meetings; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $rm): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <tr>
                                        <td><?php echo e($rm['meeting_code']); ?></td>
                                        <td><?php echo e($rm['meeting_title']); ?></td>
                                        <td><?php echo e($rm['remarks']); ?></td>
                                        <td><?php echo e($rm['user_name']); ?></td>
                                        <td><?php echo e($rm['status']); ?></td>
                                    </tr>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <?php else: ?>
                            <tr>
                                <td colspan="4"><?php echo e(__('common.no_data_found')); ?></td>
                            </tr>
                            <?php endif; ?>
                            
                        </tbody>
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
<?php endif; ?><?php /**PATH F:\xampp\htdocs\justalk1\resources\views/admin/dashboard/index.blade.php ENDPATH**/ ?>