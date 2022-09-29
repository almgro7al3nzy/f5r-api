<x-admin-app-layout>

    <div class="row">
        <div class="col-lg-4 col-md-5">
            <div class="card card-static-2 mb-30">
                <div class="card-body-table">
                    <div class="shopowner-content-left text-center pd-20">
                        <div class="shop_img mb-3">
                            <img src="images/avatar/img-1.jpg" alt="">
                        </div>
                        <div class="shopowner-dt-left">
                            <h4>{{Auth::user()->name}}</h4>
                        </div>
                        <div class="shopowner-dts">

                            <div class="shopowner-dt-list">
                                <span class="left-dt">{{__('common.phone')}}</span>
                                <span class="right-dt">{{Auth::user()->phone}}</span>
                            </div>
                            <div class="shopowner-dt-list">
                                <span class="left-dt">{{__('common.email')}}</span>
                                <span class="right-dt">{{Auth::user()->email}}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-7">
            <div class="card card-static-2 mb-30">
                <div class="card-title-2">
                    <h4>{{ __('common.update_password')}}</h4>
                </div>
                <div class="card-body-table">
                    <div class="news-content-right pd-20">
                        <form action="{{route('updatePassword')}}" method="POST">
                            @csrf
                            <div class="row">

                                <div class="col-lg-12">
                                    <div class="form-group mb-3">
                                        <label class="form-label">{{ __('common.old_password')}}*</label>
                                        <input type="password" class="form-control" placeholder="{{ __('common.enter_old_password')}}" required name="old_password">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mb-3">
                                        <label class="form-label">{{ __('common.new_password')}}*</label>
                                        <input type="password" class="form-control" placeholder="{{ __('common.enter_new_password')}}" required name="new_password">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mb-3">
                                        <label class="form-label">{{ __('common.confirm_new_password')}}*</label>
                                        <input type="password" class="form-control" placeholder="{{ __('common.confirm_new_password')}}" required name="confirm_new_password">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <button class="save-btn hover-btn" type="submit">{{__('common.actions.update')}}</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-admin-app-layout>