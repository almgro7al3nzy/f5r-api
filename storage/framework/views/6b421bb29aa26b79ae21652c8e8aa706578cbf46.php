<nav class="sb-topnav navbar navbar-expand navbar-light bg-clr">
    <a class="navbar-brand logo-brand" href="<?php echo e(url('admin')); ?>"><?php echo e(config('app.name', 'JusTalk')); ?></a>
    <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
    <a href="<?php echo e(url('admin/dashboard')); ?>" class="frnt-link"><i class="fas fa-external-link-alt"></i><?php echo e(__('common.home')); ?></a>
    <ul class="navbar-nav <?php echo e($currentLang['direction'] == 'rtl' ? 'mr-auto ml-md-0' : 'ml-auto mr-md-0'); ?> ">
    <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="langDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-globe fa-fw"></i><?php echo e($currentLang['name']); ?></a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="langDropdown">
                
                <?php $__currentLoopData = $languages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $l): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    
                <a class="dropdown-item admin-dropdown-item" href="<?php echo e(route('languageSwitch', [$l->code])); ?>"> <?php echo e($l->name); ?></a>
                   
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <!-- <a class="dropdown-item admin-dropdown-item" href="edit_profile.html"><?php echo e(__('Edit Profile')); ?></a> -->
                <a class="dropdown-item admin-dropdown-item" href="<?php echo e(route('profile')); ?>"><?php echo e(__('common.change_password')); ?></a>
                <form method="POST" action="<?php echo e(route('logout')); ?>">
                    <?php echo csrf_field(); ?>
                    <a class="dropdown-item admin-dropdown-item" href="<?php echo e(route('logout')); ?>" onclick="event.preventDefault(); this.closest('form').submit();"><?php echo e(__('common.logout')); ?></a>

                </form>
            </div>
        </li>
    </ul>
</nav><?php /**PATH F:\xampp\htdocs\justalk1\resources\views/admin/layouts/header.blade.php ENDPATH**/ ?>