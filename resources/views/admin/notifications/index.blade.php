<x-admin-app-layout>
    <div class="row justify-content-between">
        <div class="col-lg-12 col-md-12">
            <div class="card card-static-2 mt-30 mb-30">
                <div class="card-title-2 row">

                    <div class="col-lg-3 col-md-4">
                        <div class="bulk-section mt-20">
                            <div class="input-group">
                                <select id="action" name="action" class="form-control">
                                    
                                    <option selected>{{__('common.actions.bulk_actions')}}</option>
                                    <option value="1">{{__('common.actions.active')}}</option>
                                    <option value="0">{{__('common.actions.inactive')}}</option>
                                    <option value="9">{{__('common.actions.delete')}}</option>
                                </select>
                                <div class="input-group-append">
                                    <button class="status-btn hover-btn bulk_actions" data-action="{{route('bulkNotifications')}}" type="button">{{__('common.actions.apply')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 text-right">
                        <a href="javascript:void(0)" data-toggle="modal" data-target="#modalLoginForm" class="add-btn hover-btn">{{__('common.actions.add_new')}}</a>
                    </div>
                </div>
                <div class="card-body-table">
                    <div class="col-12 table-responsive">
                        <table class="table ucp-table table-hover datatable">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" class="check-all"></th>
                                    <th>{{__('common.title')}}</th>
                                    <th>{{__('common.description')}}</th>
                                    <th>{{__('common.date_time')}}</th>
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
    <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form method="POST" action="{{ route('addNotification') }}">
                    @csrf
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">{{__('common.actions.add_new_notification')}}</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mx-3">
                    
                    <div class="form-group">
                        <label class="form-label">{{__('common.title')}}*</label>
                        <input type="text" name="title" class="form-control" placeholder="{{__('common.enter_title')}}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{__('common.description')}}*</label>
                        <textarea  name="description" class="form-control" placeholder="{{__('common.enter_description')}}" required></textarea>
                    </div>
                    

                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button class="save-btn hover-btn mt-0" type="submit">{{__('common.actions.send')}}</button>
                </div>
                </form>
            </div>
        </div>
    </div>

</x-admin-app-layout>
<script type="text/javascript">
    $(function() {
        table = $('.datatable').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('notifications') }}",
            columns: [{
                    data: 'id',
                    name: 'id',
                    orderable: false
                },
                {
                    data: 'title',
                    name: 'title'
                },
                {
                    data: 'description',
                    name: 'description'
                },
                {
                    data: 'created_at',
                    name: 'created_at'
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