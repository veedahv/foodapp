import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalsModule } from './modules/modals/modals.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ModalsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoaderInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }




// import { JwtModule } from '@auth0/angular-jwt';
// import { AuthenticationService } from './services/authentication/authentication.service';
// import { RouteGuardService } from './services/routeGuard/route-guard.service';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { LoaderInterceptor } from './interceptors/loader.interceptor';
// import { LayoutModule } from './modules/shared/layout/layout.module';
// import { ModalsModule } from './modules/shared/modals/modals.module';

// @NgModule({
//   imports: [
//     LayoutModule,
//     JwtModule.forRoot({
//       config: {},
//     }),
//   ],
//   providers: [
//     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: LoaderInterceptor,
//       multi: true,
//     },
//     AuthenticationService,
//     RouteGuardService,
//   ],
// })


