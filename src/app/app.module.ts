import { NgModule, ErrorHandler }                       from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler }     from 'ionic-angular';
import { MyApp }                                        from './app.component';
import { LoginPage }                                    from '../pages/login/login';
import { SignUp }                                       from '../pages/signup/signup';
import { CategoriesPage }                               from '../pages/categories/categories';
import { ProfilePage }                                  from '../pages/profile/profile';
import { UserDetailPage }                               from '../pages/user-detail/user-detail';
import { UserListPage }                                 from '../pages/user-list/user-list';
import { ApiService }                                   from '../services/api.service';
import { UserService }                                  from '../services/user.service';
import { HandleErrorService }                           from '../services/handle-error.service';
import { CordovaService }                               from '../services/cordova.service';
import { DataService }                                  from '../services/data.service';
import { LoadingModalComponent }                        from '../components/loading-modal/loading-modal'
import { KeysPipe }                                     from '../pipes/keys.pipe'
import { Http, RequestOptions }                         from '@angular/http';
import { AuthHttp, AuthConfig }                         from 'angular2-jwt';
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'userToken',
		tokenGetter: (() => localStorage.getItem('userToken')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignUp,
    CategoriesPage,
    ProfilePage,
    UserDetailPage,
    UserListPage,
    LoadingModalComponent,
    KeysPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignUp,
    CategoriesPage,
    ProfilePage,
    UserDetailPage,
    UserListPage,
    LoadingModalComponent,
  ],
  providers: [
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    DataService,HandleErrorService,UserService,CordovaService,ApiService]
})
export class AppModule {}
