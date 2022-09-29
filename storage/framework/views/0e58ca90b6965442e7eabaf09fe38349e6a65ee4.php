<div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                <a class="nav-link active" href="<?php echo e(url('admin/dashboard')); ?>">
                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                    <?php echo e(__('common.dashboard')); ?>

                </a>
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                    <div class="sb-nav-link-icon"><i class="fas fa-newspaper"></i></div>
                    <?php echo e(__('common.meetings')); ?>

                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link sub_nav_link" href="<?php echo e(url('admin/meetings')); ?>"><?php echo e(__('common.all_meetings')); ?></a>
                        <a class="nav-link sub_nav_link" href="<?php echo e(url('admin/meeting-history')); ?>"><?php echo e(__('common.meeting_history')); ?></a>
                    </nav>
                </div>
                <a class="nav-link" href="<?php echo e(url('admin/customers')); ?>">
                    <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                    <?php echo e(__('common.customers')); ?>

                </a>
                
                <a class="nav-link" href="<?php echo e(url('admin/pages')); ?>">
                    <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                    <?php echo e(__('common.pages')); ?>

                </a>
                <a class="nav-link" href="<?php echo e(url('admin/languages')); ?>">
                    <div class="sb-nav-link-icon"><i class="fas fa-globe"></i></div>
                    <?php echo e(__('common.languages')); ?>

                </a>
                <a class="nav-link" href="<?php echo e(url('admin/notifications')); ?>">
                    <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                    <?php echo e(__('common.notifications')); ?>

                </a>
                
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseSettings" aria-expanded="false" aria-controls="collapseSettings">
                    <div class="sb-nav-link-icon"><i class="fas fa-cog"></i></div>
                    <?php echo e(__('common.settings')); ?>

                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <div class="collapse" id="collapseSettings" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav">
                        <!-- <a class="nav-link sub_nav_link" href="<?php echo e(url('admin/general-settings')); ?>"><?php echo e(__('common.general_settings')); ?></a> -->
                        <a class="nav-link sub_nav_link" href="<?php echo e(url('admin/email-settings')); ?>"><?php echo e(__('common.email_settings')); ?></a>
                        <!-- <a class="nav-link sub_nav_link" href="<?php echo e(url('admin/config-settings')); ?>"><?php echo e(__('Config Settings')); ?></a> -->
                    </nav>
                </div>
                
            </div>
        </div>
    </nav>
</div><?php /**PATH F:\xampp\htdocs\justalk1\resources\views/admin/layouts/sidebar.blade.php ENDPATH**/ ?>