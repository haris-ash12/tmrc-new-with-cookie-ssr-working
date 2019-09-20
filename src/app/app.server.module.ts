import { NgModule, Injectable, Inject } from "@angular/core";
import { ServerModule } from "@angular/platform-server";
import { Request } from "express";
import { REQUEST } from "@nguniversal/express-engine/tokens";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { ModuleMapLoaderModule } from "@nguniversal/module-map-ngfactory-loader";
import { ServerCookieService } from "./services/server-cookie.service";

@Injectable()
export class RequestCookies {
  constructor(@Inject(REQUEST) private request: Request) {}

  get cookies() {
    // console.log(this.request.headers.cookie ? this.request.headers.cookie : null);
    return !!this.request.headers.cookie ? this.request.headers.cookie : null;
  }
}

@NgModule({
  imports: [AppModule, ServerModule, ModuleMapLoaderModule],
  providers: [ServerCookieService, { provide: "req", useClass: RequestCookies }],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
