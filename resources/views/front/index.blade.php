<x-app-layout>

  <div class="left-container">
    <img src="{{ asset('front_assets/images/video-conference-people-group-on-computer-screen-vector-26473776.jpg') }}" alt="Image" class="img-fluid">
  </div>
  <div class="right-container">
    <div class="content">
      <div class="container">
        <div class="row">

          <div class="col-md-12 contents">
            <div class="row justify-content-center">

              <div class="col-md-8" id="join_meeting">
                <div class="mb-4">
                  <h3>{{ __('common.join_meeting') }}</h3>
                  <p class="mb-4">{{ __('common.tagline')}}</p>
                </div>
                <form id="join-meeting" action="{{route('joinMeeting')}}" method="post" role="form">
                  @csrf
                  <div class="form-group first mb-4">
                    <label for="nick_name">{{__('common.nick_name')}}</label>
                    <input type="text" name="nick_name" id="nick_name" class="form-control" value="" required="">

                  </div>
                  <div class="form-group last mb-2">
                    <label for="meeting_code">{{__('common.meeting_code')}}</label>
                    <input type="text" name="meeting_code" id="meeting_code" class="form-control" value="" required="">

                  </div>

                  <div class="d-flex align-items-center">

                    <span class="ml-auto"><a href="javascript:void(0)" class="forgot-pass host_meeting">{{__('common.host_meeting')}}</a></span>
                  </div>
                  @if($errors->any())
                  {!! implode('', $errors->all('<p class="error m-0">:message</p>')) !!}
                  @endif


                  <input type="submit" value="{{__('common.join')}}" class="btn btn-block btn-primary mt-2">


                </form>
              </div>
              <div class="col-md-8" id="host_meeting" style="display: none;">
                <div class="mb-4">
                  <h3>{{ __('common.host_meeting') }}</h3>
                  <p class="mb-4">{{ __('common.tagline')}}</p>
                </div>
                <form id="host-meeting" action="{{route('hostMeeting')}}" method="post" role="form">
                  @csrf
                  <div class="form-group first mb-4">
                    <label for="nick_name">{{__('common.nick_name')}}</label>
                    <input type="text" name="nick_name" id="nick_name" class="form-control" value="" required="">

                  </div>
                  <div class="form-group first mb-4">
                    <label for="meeting_title">{{__('common.meeting_title')}}</label>
                    <input type="text" name="meeting_title" id="meeting_title" class="form-control" value="" required="">

                  </div>
                  <div class="form-group last mb-4">
                    <label for="meeting_code">{{__('common.meeting_code')}}</label>
                    <input type="text" name="meeting_code" id="meeting_code" class="form-control" value="" required="">

                  </div>
                  <div class="form-group last mb-2">
                    <label for="remarks">{{__('common.meeting_purpose')}}</label>
                    <input type="text" name="remarks" id="remarks" class="form-control" value="">


                  </div>

                  <div class="d-flex align-items-center">

                    <span class="ml-auto"><a href="javascript:void(0)" class="forgot-pass join_meeting">{{__('common.join_meeting')}}</a></span>
                  </div>
                  @if($errors->any())
                  {!! implode('', $errors->all('<p class="error m-0">:message</p>')) !!}
                  @endif


                  <input type="submit" value="{{__('common.create')}}" class="btn btn-block btn-primary mt-2">


                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="clearfix"></div>



</x-app-layout>