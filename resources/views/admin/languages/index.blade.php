<x-admin-app-layout>
    <div class="row justify-content-between">
        <div class="col-lg-12 col-md-12">
            <div class="card card-static-2 mt-30 mb-30">
                <div class="card-title-2 row">

                    <div class="col-lg-3 col-md-4">
                        <div class="bulk-section mt-20">
                            <div class="input-group">
                                <select id="action" name="action" class="form-control">
                                    <option selected value="">{{__('Bulk Actions')}}</option>
                                    <option selected>{{__('common.actions.bulk_actions')}}</option>
                                    <option value="1">{{__('common.actions.active')}}</option>
                                    <option value="0">{{__('common.actions.inactive')}}</option>
                                    <option value="9">{{__('common.actions.delete')}}</option>
                                </select>
                                <div class="input-group-append">
                                    <button class="status-btn hover-btn bulk_actions" type="button" data-action="{{route('bulkLanguages')}}">{{__('common.actions.apply')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 text-right">
                        <a href="javascript:void(0)" data-toggle="modal" data-target="#modalForm" class="add-btn hover-btn add_new_button">{{__('common.actions.add_new')}}</a>
                    </div>
                </div>
                <div class="card-body-table">
                    <div class="col-12 table-responsive">
                        <table class="table ucp-table table-hover datatable">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" class="check-all"></th>
                                    <th>{{__('common.code')}}</th>
                                    <th>{{__('common.name')}}</th>
                                    <th>{{__('common.direction')}}</th>
                                    <th>{{__('common.default')}}</th>
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
    <div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form method="POST" action="{{ route('addLanguage') }}">
                    @csrf
                    <input type="hidden" name="language_id" id="language_id" value="">
                    <div class="modal-header text-center">
                        <h4 class="modal-title w-100 font-weight-bold">{{__('common.actions.add_update_language')}}</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body mx-3">
                        <div class="form-group">
                            <label class="form-label">{{__('common.language_code')}}*</label>
                            <input type="text" class="form-control" id="code" name="code" placeholder="{{__('common.enter_language_code')}}" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">{{__('common.name')}}*</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="{{__('common.enter_language_name')}}" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">{{__('common.direction')}}*</label>
                            <select id="direction" name="direction" class="form-control" required>
                                <option selected value="ltr">{{__('common.left_to_right')}}</option>
                                <option value="rtl">{{__('common.right_to_left')}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">{{__('common.status')}}*</label>
                            <select id="status" name="status" class="form-control" required>
                                <option selected value="1">{{__('common.actions.activate')}}</option>
                                <option value="0">{{__('common.actions.inactive')}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">{{__('common.set_as_default')}}*</label>
                            <select id="is_default" name="is_default" class="form-control" required>
                                <option selected value="0">{{__('common.no')}}</option>
                                <option value="1">{{__('common.yes')}}</option>
                            </select>
                        </div>

                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button class="save-btn hover-btn mt-0" type="submit">{{__('common.actions.save_update')}}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</x-admin-app-layout>
<script type="text/javascript">
    $(document).ready(() => {
        table = $('.datatable').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('languages') }}",
            columns: [{
                    data: 'id',
                    name: 'id',
                    orderable: false
                },
                {
                    data: 'code',
                    name: 'code'
                },
                {
                    data: 'name',
                    name: 'name'
                },
                {
                    data: 'direction',
                    name: 'direction'
                },
                {
                    data: 'is_default',
                    name: 'is_default'
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


        $(document).on('click', '.update_data', function(e) {
            var id = $(this).attr('data-id');
            $('#language_id').val(id);
            $.ajax('<?= url('admin/languages-view') ?>/' + id, // request url
                {
                    success: function(data) { // success callback function
                        $('#code').val(data.code);
                        $('#name').val(data.name);
                        $('#direction').val(data.direction);
                        $('#status').val(data.status);
                        $('#is_default').val(data.is_default);

                    }
                });

        });
        $(document).on('click', '.add_new_button', function() {
            $('#language_id').val('');
        })
    });
</script>