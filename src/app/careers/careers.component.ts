import { Component, OnInit } from "@angular/core";
import { CareersService } from "../services/careers.service";

@Component({
  selector: "app-careers",
  templateUrl: "./careers.component.html",
  styleUrls: ["./careers.component.scss"]
})
export class CareersComponent implements OnInit {
  careers: any[] = [];

  constructor(private careersService: CareersService) {}

  ngOnInit() {
    this.careersService.getAll().subscribe((careersResponse: any[]) => {
      console.log(careersResponse);
      for (let i = 0; i < careersResponse.length; i++) {
        let careersObject = {
          title: careersResponse[i].JobTitle,
          position: careersResponse[i].NoOfPosition,
          cities: careersResponse[i].Cities,
          type: careersResponse[i].JobType,
          slug: careersResponse[i].Slug
        };

        this.careers.push(careersObject);
      }

      // console.log(this.careers);
    });
  }
}
