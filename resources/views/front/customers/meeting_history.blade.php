<x-app-layout>

  @include('front.customers.sidebar')

  <div class="col-md-6 col-lg-8">

    <div id="snav-content2" class="side-contents">
      <h3>{{ __('common.meeting_history')}}</h3>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>{{ __('common.meeting_code')}}</th>
            <th>{{ __('common.title')}}</th>
            <th>{{ __('common.meeting_purpose')}}</th>
            <th>{{ __('common.joined_date')}}</th>
          </tr>
        </thead>
        <tbody>
          @if(count($meeting_history) > 0)
          @foreach($meeting_history as $m)
          <tr>
            <td>{{$m->id}}</td>
            <td>{{$m->meeting_code}}</td>
            <td>{{$m->meeting_title}}</td>
            <td>{{$m->remarks}}</td>
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