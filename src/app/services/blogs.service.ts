import { Injectable, Injector } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BlogsService extends DataService {
  constructor(httpClient: HttpClient, injector: Injector) {
    super("api/getBlogs", httpClient, injector);
  }
}
