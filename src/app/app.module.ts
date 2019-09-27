import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule
} from "@angular/material";
// import { FlexLayoutModule } from "@angular/flex-layout";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SlideshowModule } from "ng-simple-slideshow";
import { CookieService } from "ngx-cookie-service";

import { AppComponent } from "./app.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { LocationService } from "./services/location.service";
import { APP_BASE_HREF, isPlatformBrowser } from "@angular/common";
import { SpecificComponent } from "./specific/specific.component";
import { HomeComponent } from "./home/home.component";
import { StartUpService } from "./services/start-up.service";

import { pipe } from "rxjs";
import { map } from "rxjs/operators";
import { async } from "@angular/core/testing";

import { TestComponent } from "./test/test.component";
import { FooterComponent } from "./footer/footer.component";
import { GenericComponent } from "./generic/generic.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { LoaderComponent } from "./loader/loader.component";
import { LoaderInterceptorService } from "./services/loader-interceptor.service";
import { NewsComponent } from "./news/news.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { CareersComponent } from "./careers/careers.component";
import { CareersSpecificComponent } from "./careers-specific/careers-specific.component";
import { CareersApplyComponent } from "./careers-apply/careers-apply.component";
import { ServerCookieService } from "./services/server-cookie.service";
import { CountryCodeGuardService } from "./services/country-code-guard.service";

export function startupProviderFactory(provider: StartUpService) {
  // console.log('provider.startupcall..');
  // provider.startupCall().then(res => console.log(res));

  return () => provider.startupCall();
}

export function setClientBaseHref(provider: StartUpService) {
  console.log("setClientBaseHref...");
  console.log("setClientBaseHref..." + provider.getCountryCode);

  let cc = provider.getCountryCode;

  if (cc.toLowerCase() === "pk") return "/";
  else {
    let urlPath = window.location.pathname;
    console.log("urlPath ..." + urlPath);
    let urlCountryCode = urlPath.split("/")[1];
    console.log("urlCOuntryCOde..." + urlCountryCode);

    if (urlCountryCode === provider.getCountryCode) return "/";
    else return provider.getCountryCode;
  }
}
export function starti(provider: StartUpService) {
  // console.log('provide country code');

  // console.log(provider.CountryCode);
  // let val = await provider.startupCall();
  // console.log('val ...' + val);

  // return '/a';

  return "/pk";
}

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogDetailComponent,
    SpecificComponent,
    HomeComponent,
    TestComponent,
    FooterComponent,
    GenericComponent,
    MainNavComponent,
    LoaderComponent,
    NewsComponent,
    NavigationBarComponent,
    CareersComponent,
    CareersSpecificComponent,
    CareersApplyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    // FlexLayoutModule,
    SlideshowModule,

    RouterModule.forRoot(
      [
        {
          path: "",
          canActivate: [CountryCodeGuardService],
          children: [
            { path: "", component: HomeComponent },
            { path: "test", component: TestComponent },
            // {
            //   path: ':countryCode',
            //   component: SpecificComponent,
            //   children: [

            { path: "news/:slug", component: NewsComponent },
            { path: "careers", component: CareersComponent },
            { path: "careers/:specificCareer", component: CareersSpecificComponent },
            { path: "careers/:specificCareer/apply", component: CareersApplyComponent },

            { path: "blog", component: BlogsComponent },
            { path: "blog/:slug", component: BlogDetailComponent },
            { path: ":menu/:submenu", component: GenericComponent }
          ]
        },
        {
          path: ":cc",
          children: [
            { path: "", component: HomeComponent },
            { path: "test", component: TestComponent },
            // {
            //   path: ':countryCode',
            //   component: SpecificComponent,
            //   children: [

            { path: "news/:slug", component: NewsComponent },
            { path: "careers", component: CareersComponent },
            { path: "careers/:specificCareer", component: CareersSpecificComponent },
            { path: "careers/:specificCareer/apply", component: CareersApplyComponent },

            { path: "blog", component: BlogsComponent },
            { path: "blog/:slug", component: BlogDetailComponent },
            { path: ":menu/:submenu", component: GenericComponent }
          ]
        }
      ],
      {
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
        scrollOffset: [0, 100] // [x, y]
      }
    )
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: startupProviderFactory,
      deps: [StartUpService],
      multi: true
    },
    {
      provide: APP_BASE_HREF,
      useFactory: setClientBaseHref,
      deps: [StartUpService]
    },

    // This part is causing issue now...
    // {
    //   provide: APP_BASE_HREF,
    //   useValue: "/abc"
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    },
    CookieService,
    Title,
    ServerCookieService,
    {
      provide: "req",
      useValue: null
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}