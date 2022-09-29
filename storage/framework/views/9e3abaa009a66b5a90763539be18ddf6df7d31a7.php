

<?php $__env->startSection('template_title'); ?>
    <?php echo e(trans('installer_messages.welcome.templateTitle')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('title'); ?>
    <?php echo e(trans('installer_messages.welcome.title')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('container'); ?>
    <form method="post" action="<?php echo e(route('LaravelInstaller::verify')); ?>" class="tabs-wrap">
      <input type="hidden" name="_token" value="<?php echo e(csrf_token()); ?>">
      <div class="form-group">
        <label>Envato Purchase Code</label>
        <input type="text" name="code" placeholder="Envato Purchase Code" value="<?php echo e(old('code')); ?>" required>
        <a href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-" target="_blank"><i class="fa fa-info-circle"></i> Where Is My Purchase Code?</a>
      </div>
      <hr>
      <div class="form-group">
        <label>Admin Email</label>
        <input type="text" name="email" placeholder="Admin Email" value="<?php echo e(old('email')); ?>" required>
      </div>
      <div class="form-group">
        <label>Admin Password</label>
        <input type="password" name="password" placeholder="Admin Password" required>
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" name="password_confirmation" placeholder="Confirm Password" required>
      </div>
      <p class="text-center">
        <button type="submit" class="button">Submit <i class="fa fa-angle-right fa-fw" aria-hidden="true"></i></button>
      </p>
    </form>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('vendor.installer.layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH F:\xampp\htdocs\justalk1\resources\views/vendor/installer/welcome.blade.php ENDPATH**/ ?>