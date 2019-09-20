import { Injectable, Inject } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ServerCookieService {
  private cookieStore = {};

  constructor(@Inject("req") private readonly req: any) {
    if (this.req !== null) {
      // console.log(this.req.cookies);
      this.parseCookies(this.req.cookies);
    } else {
      // console.log(document.cookie);
      this.parseCookies(document.cookie);
    }
  }

  public parseCookies(cookies) {
    this.cookieStore = {};
    if (!!cookies === false) {
      return;
    }
    let cookiesArr = cookies.split(";");
    for (const cookie of cookiesArr) {
      const cookieArr = cookie.split("=");
      this.cookieStore[cookieArr[0]] = cookieArr[1];
    }
  }

  get(key: string) {
    // console.log(!!this.cookieStore[key] ? this.cookieStore[key] : null);
    return !!this.cookieStore[key] ? this.cookieStore[key] : null;
  }
}
