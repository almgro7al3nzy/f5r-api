<section id="page-title" class="p-3">

    <div class="container clearfix">
        <h3 class="m-0"><?php echo e($title); ?></h3>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><?php echo e(__('common.home')); ?></a></li>
            <li class="breadcrumb-item"><a href="#"><?php echo e(__('common.customers')); ?></a></li>
            <li class="breadcrumb-item active" aria-current="page"><?php echo e($title); ?></li>
        </ol>
    </div>

</section><!-- #page-title end -->

<!-- Content
		============================================= -->
<section id="content">
    <div class="content-wrap">
        <div class="container clearfix">

            <div id="side-navigation" class="row" data-plugin="tabs">

                <div class="col-md-6 col-lg-4">
                    <ul class="sidenav">
                        <ul class="sidenav">
                            <li><a href="<?php echo e(route('my_meetings')); ?>"><i class="icon-screen"></i><?php echo e(__('common.my_meetings')); ?><i class="icon-chevron-right"></i></a></li>
                            <li><a href="<?php echo e(route('meeting_history')); ?>"><i class="icon-screen"></i><?php echo e(__('common.joined_meetings')); ?><i class="icon-chevron-right"></i></a></li>
                            <li><a href="<?php echo e(route('change_password')); ?>"><i class="icon-magic"></i><?php echo e(__('common.change_password')); ?><i class="icon-chevron-right"></i></a></li>
                            <li>
                                <form method="POST" action="<?php echo e(route('logout')); ?>"><?php echo csrf_field(); ?><a href="<?php echo e(route('logout')); ?>" onclick="event.preventDefault(); this.closest('form').submit();"><i class="icon-tint"></i><?php echo e(__('common.logout')); ?><i class="icon-chevron-right"></i></a></form>
                            </li>
                        </ul>
                    </ul>
                </div><?php /**PATH F:\xampp\htdocs\justalk1\resources\views/front/customers/sidebar.blade.php ENDPATH**/ ?>