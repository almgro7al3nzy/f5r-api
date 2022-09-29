<nav class="sb-topnav navbar navbar-expand navbar-light bg-clr">
    <a class="navbar-brand logo-brand" href="{{url('admin')}}">{{ config('app.name', 'JusTalk') }}</a>
    <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
    <a href="{{ url('admin/dashboard')}}" class="frnt-link"><i class="fas fa-external-link-alt"></i>{{__('common.home')}}</a>
    <ul class="navbar-nav {{$currentLang['direction'] == 'rtl' ? 'mr-auto ml-md-0' : 'ml-auto mr-md-0'}} ">
    <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="langDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-globe fa-fw"></i>{{$currentLang['name']}}</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="langDropdown">
                
                @foreach($languages as $l)
                    
                <a class="dropdown-item admin-dropdown-item" href="{{ route('languageSwitch', [$l->code]) }}"> {{$l->name}}</a>
                   
                @endforeach
                
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <!-- <a class="dropdown-item admin-dropdown-item" href="edit_profile.html">{{__('Edit Profile')}}</a> -->
                <a class="dropdown-item admin-dropdown-item" href="{{route('profile')}}">{{__('common.change_password')}}</a>
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <a class="dropdown-item admin-dropdown-item" href="{{route('logout')}}" onclick="event.preventDefault(); this.closest('form').submit();">{{__('common.logout')}}</a>

                </form>
            </div>
        </li>
    </ul>
</nav>