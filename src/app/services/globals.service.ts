import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GlobalsService {
  url: string = "http://web.tmrc1.ga";

  constructor() {}
}
