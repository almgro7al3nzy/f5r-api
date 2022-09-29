<?php if (isset($component)) { $__componentOriginal8e2ce59650f81721f93fef32250174d77c3531da = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\AppLayout::class, []); ?>
<?php $component->withName('app-layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withAttributes([]); ?>

  <?php echo $__env->make('front.customers.sidebar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

  <div class="col-md-6 col-lg-8">

    <div id="snav-content2" class="side-contents">
      <h3><?php echo e(__('common.meeting_history')); ?></h3>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th><?php echo e(__('common.meeting_code')); ?></th>
            <th><?php echo e(__('common.title')); ?></th>
            <th><?php echo e(__('common.meeting_purpose')); ?></th>
            <th><?php echo e(__('common.joined_date')); ?></th>
          </tr>
        </thead>
        <tbody>
          <?php if(count($meeting_history) > 0): ?>
          <?php $__currentLoopData = $meeting_history; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $m): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <tr>
            <td><?php echo e($m->id); ?></td>
            <td><?php echo e($m->meeting_code); ?></td>
            <td><?php echo e($m->meeting_title); ?></td>
            <td><?php echo e($m->remarks); ?></td>
            <td></td>
          </tr>
          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
          <?php endif; ?>
        </tbody>
      </table>
    </div>

  </div>

  </div>

  </div>
  </div>
  </section><!-- #content end -->


 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal8e2ce59650f81721f93fef32250174d77c3531da)): ?>
<?php $component = $__componentOriginal8e2ce59650f81721f93fef32250174d77c3531da; ?>
<?php unset($__componentOriginal8e2ce59650f81721f93fef32250174d77c3531da); ?>
<?php endif; ?><?php /**PATH F:\xampp\htdocs\justalk1\resources\views/front/customers/meeting_history.blade.php ENDPATH**/ ?>