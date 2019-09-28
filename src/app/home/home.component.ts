import { Component, OnInit } from "@angular/core";
import { HomeContentService } from "../services/home-content.service";
import { GlobalsService } from "../services/globals.service";
import { DomSanitizer } from "@angular/platform-browser";
import { Meta } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  imageUrlArray: any[] = [
    "../../assets/slider-images/one.png",
    "../../assets/slider-images/two.png",
    "../../assets/slider-images/three.png"
  ];
  whoWeAre: any = {};

  arrowSize: string = "10px";
  showArrows: boolean = true;

  showDots: boolean = true;
  dotColor: string = "#FFF";

  autoPlay: boolean = true;
  autoPlayInterval: number = 5000;

  height: string = "100%";

  constructor(
    private homeService: HomeContentService,
    private globals: GlobalsService,
    private meta: Meta,
    private _sanitizer: DomSanitizer
  ) {
    console.log("Home component ..............................................................");
    // this.meta.addTag({ name: "name", content: "the tag ...." });
    // this.meta.addTag({ name: "naanotherme", content: "the another tag ...." });
  }

  ngOnInit() {
    this.homeService.getAll().subscribe((homeResponse: any) => {
      console.log("Home response ...");
      console.log(homeResponse);
      // Image Slider Model
      let sliderArrayResponse: any[] = homeResponse.ImageSliderModel;
      let WhoWeAreObjectResponse: any = homeResponse.WhoWeAreModel;
      let sliderArray: any[] = [];

      for (let i = 0; i < sliderArrayResponse.length; i++) {
        let sliderObject = this.globals.url + "/" + sliderArrayResponse[i].ImageUrl;
        sliderArray.push(sliderObject);
      }
      this.imageUrlArray = sliderArray;
      // console.log(sliderArray);

      // ~~~

      // console.log(WhoWeAreObjectResponse);
      this.whoWeAre["textContent"] = WhoWeAreObjectResponse.ContentDetails;
      this.whoWeAre["videoLink"] = this._sanitizer.bypassSecurityTrustResourceUrl(
        WhoWeAreObjectResponse.VedioUrl
      );

      // console.log("Who we are !!!");
      // console.log(this.whoWeAre);
    });
  }
}
