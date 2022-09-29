<x-admin-app-layout>
    <div class="row">
        <div class="col-lg-6 col-md-6">
            <div class="card card-static-2 mb-30">
                <div class="card-title-2">
                    <h4>{{__('General Setting')}}</h4>
                </div>
                <div class="card-body-table">
                    <div class="news-content-right pd-20">
                        <form method="POST" action="{{ route('saveSettings') }}">
                            @csrf
                            <div class="form-group">
                                <label class="form-label">{{__('App Name')}}</label>
                                <input type="text" class="form-control" placeholder="mail.host.com" name="smtp_host" value="{{ getConfigValueByKey('smtp_host') }}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">{{__('SMTP Username')}}</label>
                                <input type="text" class="form-control" placeholder="username" name="smtp_username" value="{{ getConfigValueByKey('smtp_username') }}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">{{__('SMTP From Name')}}</label>
                                <input type="text" class="form-control" placeholder="from user name" name="smtp_from_name" value="{{ getConfigValueByKey('smtp_from_name') }}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">{{__('SMTP From Email')}}</label>
                                <input type="email" class="form-control" placeholder="from email" name="smtp_from_email" value="{{ getConfigValueByKey('smtp_from_email') }}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">{{__('SMTP Password')}}</label>
                                <input type="password" class="form-control" placeholder="password" name="smtp_password" value="{{ getConfigValueByKey('smtp_password') }}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">{{__('SMTP Encryption')}}</label>
                                <select class="form-control" name="smtp_crypto">
                                    <option value="tls" {{ getConfigValueByKey('smtp_crypto')!='ssl' ? "selected":"" }}>TLS</option>
                                    <option {{ getConfigValueByKey('smtp_crypto')=='ssl' ? "selected":"" }} value="ssl">SSL</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">{{__('SMTP Port')}}</label>
                                <input type="text" class="form-control" placeholder="465" name="smtp_port" value="{{ getConfigValueByKey('smtp_port') }}">
                            </div>
                            <button class="save-btn hover-btn" type="submit">{{__('Save Changes')}}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-admin-app-layout>