<x-app-layout>

  @include('front.customers.sidebar', ['title'=>$title])

  <div class="col-md-6 col-lg-8">
    <div id="snav-content3" class="side-contents">
      <h3>{{ __('common.change_password')}}</h3>
      <div class="card-body-table">
        <div class="news-content-right pd-20">
          <form action="{{route('updatePassword')}}" method="POST">
            @csrf
            <div class="row">

              <div class="col-lg-8">
                <div class="form-group mb-3">
                  <label class="form-label">{{ __('common.old_password')}}*</label>
                  <input type="password" class="form-control" placeholder="{{ __('common.enter_old_password')}}" required name="old_password">
                </div>
              </div>
              <div class="col-lg-8">
                <div class="form-group mb-3">
                  <label class="form-label">{{ __('common.new_password')}}*</label>
                  <input type="password" class="form-control" placeholder="{{ __('common.enter_new_password')}}" required name="new_password">
                </div>
              </div>
              <div class="col-lg-8">
                <div class="form-group mb-3">
                  <label class="form-label">{{ __('common.confirm_new_password')}}*</label>
                  <input type="password" class="form-control" placeholder="{{ __('common.confirm_new_password')}}" required name="confirm_new_password">
                </div>
              </div>
              <div class="col-lg-8">
                <button class="button button-3d button-black m-0" type="submit">{{__('common.actions.update')}}</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>

  </div>

  </div>

  </div>
  </div>
  </section><!-- #content end -->


</x-app-layout>