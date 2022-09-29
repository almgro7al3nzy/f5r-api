<x-admin-app-layout>
    <div class="row justify-content-between">
        <div class="col-lg-12 col-md-12">
            <div class="card card-static-2 mt-30 mb-30">
                
                <div class="card-body-table">
                    <div class="col-12 table-responsive">
                        <table class="table ucp-table table-hover datatable">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" class="check-all"></th>
                                    <th>{{__('common.title')}}</th>
                                    <th>{{__('common.last_updated')}}</th>
                                    <th>{{__('common.status')}}</th>
                                    <th>{{__('common.actions.apply')}}</th>
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
    $(document).ready(() => {
        table = $('.datatable').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('pages') }}",
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
                    data: 'updated_at',
                    name: 'updated_at'
                },
                {
                    data: 'status',
                    name: 'status',
                    orderable: false,
                    searchable: false
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