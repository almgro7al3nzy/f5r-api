<x-admin-app-layout>
<div class="row">
    <div class="col-xl-3 col-md-6">
        <div class="dashboard-report-card purple">
            <div class="card-content">
                <span class="card-title">{{__('common.total_customers')}}</span>
                <span class="card-count">{{ $total_users}}</span>
            </div>
            <div class="card-media">
                <i class="fab fa-rev"></i>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="dashboard-report-card red">
            <div class="card-content">
                <span class="card-title">{{__('common.total_meetings')}}</span>
                <span class="card-count">{{ $total_meetings }}</span>
            </div>
            <div class="card-media">
                <i class="far fa-times-circle"></i>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="dashboard-report-card info">
            <div class="card-content">
                <span class="card-title">{{__('common.total_meeting_histories')}}</span>
                <span class="card-count">{{ $total_meetings_history }}</span>
            </div>
            <div class="card-media">
                <i class="fas fa-sync-alt rpt_icon"></i>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="dashboard-report-card success">
            <div class="card-content">
                <span class="card-title">{{__("common.todays_meetings")}}</span>
                <span class="card-count">{{$todays_meetings}}</span>
            </div>
            <div class="card-media">
                <i class="fas fa-money-bill rpt_icon"></i>
            </div>
        </div>
    </div>
   
    <div class="col-xl-12 col-md-12">
        <div class="card card-static-2 mb-30">
            <div class="card-title-2">
                <h4>{{__('common.recent_meetings')}}</h4>
                <a href="{{ route('meetingHistory')}}" class="view-btn hover-btn">{{__('common.actions.view_all')}}</a>
            </div>
            <div class="card-body-table">
                <div class="table-responsive">
                    <table class="table ucp-table table-hover">
                        <thead>
                            <tr>
                                <th style="width:130px">{{('common.code')}}</th>
                                <th style="width:130px">{{('common.title')}}</th>
                                <th style="width:130px">{{('common.remark')}}</th>
                                <th style="width:130px">{{('common.host')}}</th>
                                <th style="width:130px">{{('common.date')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if(count($recent_meetings) > 0)
                                @foreach($recent_meetings as $rm)
                                    <tr>
                                        <td>{{$rm['meeting_code']}}</td>
                                        <td>{{$rm['meeting_title']}}</td>
                                        <td>{{$rm['remarks']}}</td>
                                        <td>{{$rm['user_name']}}</td>
                                        <td>{{$rm['status']}}</td>
                                    </tr>
                                @endforeach
                            @else
                            <tr>
                                <td colspan="4">{{__('common.no_data_found')}}</td>
                            </tr>
                            @endif
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</x-admin-app-layout>