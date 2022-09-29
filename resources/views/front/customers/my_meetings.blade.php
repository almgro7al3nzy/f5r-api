<x-app-layout>

  @include('front.customers.sidebar')
  <div class="col-md-6 col-lg-8">
    <div id="snav-content1" class="side-contents">
      <h3>My Meetings</h3>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>{{ __('common.meeting_code')}}</th>
            <th>{{ __('common.title')}}</th>
            <th>{{ __('common.meeting_purpose')}}</th>
            <th>{{ __('common.date_time')}}</th>
            <th>{{ __('common.actions.actions')}}</th>
          </tr>
        </thead>
        <tbody>
          @if(count($meetings) > 0)
          @foreach($meetings as $m)
          <tr>
            <td>{{$m->id}}</td>
            <td>{{$m->meeting_code}}</td>
            <td>{{$m->meeting_title}}</td>
            <td>{{$m->remarks}}</td>
            <td>{{date('d-m-Y h:i a', strtotime($m->created_at))}}</td>
            <td></td>
          </tr>
          @endforeach
          @endif
        </tbody>
      </table>
    </div>



  </div>

  </div>

  </div>
  </div>
  </section><!-- #content end -->


</x-app-layout>