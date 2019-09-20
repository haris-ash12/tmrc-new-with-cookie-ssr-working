import { Injectable, Injector } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CareersService extends DataService {
  constructor(httpClient: HttpClient, injector: Injector) {
    super("api/getjobsrepository", httpClient, injector);
  }
}
