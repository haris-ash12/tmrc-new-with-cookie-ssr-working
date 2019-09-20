import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "../data.service";

@Injectable({
  providedIn: "root"
})
export class SubmenuService extends DataService {
  constructor(httpClient: HttpClient, injector: Injector) {
    super("api/GetSubMenus", httpClient, injector);
  }
}
