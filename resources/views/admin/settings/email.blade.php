<x-admin-app-layout>
    <div class="row">
        <div class="col-lg-6 col-md-6">
            <div class="card card-static-2 mb-30">
                <div class="card-title-2">
                    <h4>{{__('common.email_settings')}}</h4>
                </div>
                <div class="card-body-table">
                    <div class="news-content-right pd-20">
                        <form method="POST" action="{{ route('email_settings') }}">
                            @csrf
                            <div class="form-group">
                                <label class="form-label">{{__('common.smtp_host')}}</label>
                                <input type="text" class="form-control" placeholder="mail.host.com" name="mail_host" value="{{ getConfigValueByKey('mail_host') }}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">{{__('common.smtp_username')}}</label>
                                <input type="text" class="form-control" placeholder="username@gmail.com" name="mail_username" value="{{ getConfigValueByKey('mail_username') }}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">{{__('common.smtp_from_name')}}</label>
                                <input type="text" class="form-control" placeholder="no-reply@gmail.com" name="mail_from_name" value="{{ getConfigValueByKey('mail_from_name') }}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">{{__('common.smtp_from_email')}}</label>
                                <input type="email" class="form-control" placeholder="from email" name="mail_from_address" value="{{ getConfigValueByKey('mail_from_address') }}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">{{__('common.smtp_password')}}</label>
                                <input type="password" class="form-control" placeholder="{{__('common.smtp_password')}}" name="mail_password" value="{{ getConfigValueByKey('mail_password') }}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">{{__('common.smtp_encryption')}}</label>
                                <select class="form-control" name="mail_encryption">
                                    <option value="tls" {{ getConfigValueByKey('mail_encryption')!='ssl' ? "selected":"" }}>TLS</option>
                                    <option {{ getConfigValueByKey('mail_encryption')=='ssl' ? "selected":"" }} value="ssl">SSL</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">{{__('common.smtp_port')}}</label>
                                <input type="text" class="form-control" placeholder="465" name="mail_port" value="{{ getConfigValueByKey('mail_port') }}">
                            </div>
                            <button class="save-btn hover-btn" type="submit">{{__('common.update')}}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-admin-app-layout>