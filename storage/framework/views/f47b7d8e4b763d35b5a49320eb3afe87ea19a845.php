<?php if (isset($component)) { $__componentOriginal8e2ce59650f81721f93fef32250174d77c3531da = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\AppLayout::class, []); ?>
<?php $component->withName('app-layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withAttributes([]); ?>

  <div class="left-container">
    <img src="<?php echo e(asset('front_assets/images/video-conference-people-group-on-computer-screen-vector-26473776.jpg')); ?>" alt="Image" class="img-fluid">
  </div>
  <div class="right-container">
    <div class="content">
      <div class="container">
        <div class="row">

          <div class="col-md-12 contents">
            <div class="row justify-content-center">

              <div class="col-md-8" id="join_meeting">
                <div class="mb-4">
                  <h3><?php echo e(__('common.join_meeting')); ?></h3>
                  <p class="mb-4"><?php echo e(__('common.tagline')); ?></p>
                </div>
                <form id="join-meeting" action="<?php echo e(route('joinMeeting')); ?>" method="post" role="form">
                  <?php echo csrf_field(); ?>
                  <div class="form-group first mb-4">
                    <label for="nick_name"><?php echo e(__('common.nick_name')); ?></label>
                    <input type="text" name="nick_name" id="nick_name" class="form-control" value="" required="">

                  </div>
                  <div class="form-group last mb-2">
                    <label for="meeting_code"><?php echo e(__('common.meeting_code')); ?></label>
                    <input type="text" name="meeting_code" id="meeting_code" class="form-control" value="" required="">

                  </div>

                  <div class="d-flex align-items-center">

                    <span class="ml-auto"><a href="javascript:void(0)" class="forgot-pass host_meeting"><?php echo e(__('common.host_meeting')); ?></a></span>
                  </div>
                  <?php if($errors->any()): ?>
                  <?php echo implode('', $errors->all('<p class="error m-0">:message</p>')); ?>

                  <?php endif; ?>


                  <input type="submit" value="<?php echo e(__('common.join')); ?>" class="btn btn-block btn-primary mt-2">


                </form>
              </div>
              <div class="col-md-8" id="host_meeting" style="display: none;">
                <div class="mb-4">
                  <h3><?php echo e(__('common.host_meeting')); ?></h3>
                  <p class="mb-4"><?php echo e(__('common.tagline')); ?></p>
                </div>
                <form id="host-meeting" action="<?php echo e(route('hostMeeting')); ?>" method="post" role="form">
                  <?php echo csrf_field(); ?>
                  <div class="form-group first mb-4">
                    <label for="nick_name"><?php echo e(__('common.nick_name')); ?></label>
                    <input type="text" name="nick_name" id="nick_name" class="form-control" value="" required="">

                  </div>
                  <div class="form-group first mb-4">
                    <label for="meeting_title"><?php echo e(__('common.meeting_title')); ?></label>
                    <input type="text" name="meeting_title" id="meeting_title" class="form-control" value="" required="">

                  </div>
                  <div class="form-group last mb-4">
                    <label for="meeting_code"><?php echo e(__('common.meeting_code')); ?></label>
                    <input type="text" name="meeting_code" id="meeting_code" class="form-control" value="" required="">

                  </div>
                  <div class="form-group last mb-2">
                    <label for="remarks"><?php echo e(__('common.meeting_purpose')); ?></label>
                    <input type="text" name="remarks" id="remarks" class="form-control" value="">


                  </div>

                  <div class="d-flex align-items-center">

                    <span class="ml-auto"><a href="javascript:void(0)" class="forgot-pass join_meeting"><?php echo e(__('common.join_meeting')); ?></a></span>
                  </div>
                  <?php if($errors->any()): ?>
                  <?php echo implode('', $errors->all('<p class="error m-0">:message</p>')); ?>

                  <?php endif; ?>


                  <input type="submit" value="<?php echo e(__('common.create')); ?>" class="btn btn-block btn-primary mt-2">


                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="clearfix"></div>



 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal8e2ce59650f81721f93fef32250174d77c3531da)): ?>
<?php $component = $__componentOriginal8e2ce59650f81721f93fef32250174d77c3531da; ?>
<?php unset($__componentOriginal8e2ce59650f81721f93fef32250174d77c3531da); ?>
<?php endif; ?><?php /**PATH F:\xampp\htdocs\justalk1\resources\views/front/index.blade.php ENDPATH**/ ?>