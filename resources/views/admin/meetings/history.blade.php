<x-admin-app-layout>
    <div class="row justify-content-between">
        <div class="col-lg-12 col-md-12">
            <div class="card card-static-2 mt-30 mb-30">
                <div class="card-title-2 row">

                    <div class="col-lg-3 col-md-4">
                        <div class="bulk-section mt-20">
                            <div class="input-group">
                                <select id="action" name="action" class="form-control">
                                    <option value="">{{__('common.actions.bulk_actions')}}</option>
                                   
                                    <option value="9">{{__('common.actions.delete')}}</option>
                                </select>
                                <div class="input-group-append">
                                    <button class="status-btn hover-btn  bulk_actions" data-action="{{route('bulkMeetingHistory')}}" type="button">{{__('common.actions.apply')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="card-body-table">
                    <div class="col-12 table-responsive">
                        <table class="table ucp-table table-hover datatable">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" class="check-all"></th>
                                    <th>{{__('common.nick_name')}}</th>
                                    <th>{{__('common.meeting_code')}}</th>
                                    <th>{{__('common.title')}}</th>
                                    <th>{{__('common.host_date_time')}}</th>
                                    <th>{{__('common.host')}}</th>
                                    <th>{{__('common.status')}}</th>
                                    <th>{{__('common.actions.actions')}}</th>
                                </tr>
                            </thead>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
   

</x-admin-app-layout>
<script type="text/javascript">
    $(function() {
        table = $('.datatable').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('meetingHistory') }}",
            columns: [{
                    data: 'id',
                    name: 'id',
                    orderable: false
                },
                {
                    data: 'nick_name',
                    name: 'nick_name'
                },
                {
                    data: 'meeting_code',
                    name: 'meeting_code'
                },
                {
                    data: 'meeting_title',
                    name: 'meeting_title'
                },
                {
                    data: 'created_at',
                    name: 'created_at'
                },
                {
                    data: 'host_name',
                    name: 'host_name'
                },
                {
                    data: 'status',
                    name: 'status'
                },
                {
                    data: 'action',
                    name: 'action',
                    orderable: false,
                    searchable: false
                },
            ]
        });
    });
</script>