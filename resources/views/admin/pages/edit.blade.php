<x-admin-app-layout>

    <div class="row">

        <div class="col-lg-8 col-md-7">
            <div class="card card-static-2 mb-30">
                <div class="card-title-2">
                    <h4>{{ __('common.update_page')}}</h4>
                </div>
                <div class="card-body-table">
                    <div class="news-content-right pd-20">
                        <form action="{{route('updatePage')}}" method="POST">
                            <input type="hidden" name="page_id" value="{{$data['id']}}" />
                            @csrf
                            <div class="row">

                                <div class="col-lg-12">
                                    <div class="form-group mb-3">
                                        <label class="form-label">{{ __('common.page_title')}}*</label>
                                        <input type="text" class="form-control" placeholder="{{ __('common.enter_page_title')}}" required name="title" value="{{ $data['title']}}">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mb-3">
                                        <label class="form-label">{{ __('common.description')}}*</label>
                                        <textarea class="form-control" placeholder="{{ __('common.enter_description')}}" name="description" id="tinyMceExample">{{ $data['description']}}</textarea>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label class="form-label">{{__('common.status')}}*</label>
                                        <select id="status" name="status" class="form-control" required>
                                            <option {{ $data['status']==1? "selected":"" }} value="1">{{__('common.actions.active')}}</option>
                                            <option {{ $data['status']==0? "selected":"" }} value="0">{{__('common.actions.inactive')}}</option>
                                        </select>
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