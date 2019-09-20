import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, switchMap, map } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService implements CanActivate {
  constructor(private httpClient: HttpClient, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Request jsonip to get ip of the system.
    // Send this ip to api endpoint
    // Recieve country code and concat it in the url.

    return this.httpClient
      .get('https://jsonip.com/')
      .pipe(
        switchMap((jsonIp: any) =>
          this.httpClient.get('http://webapp.tmrc.ga/api/findLocation?ip=' + jsonIp.ip)
        )
      )
      .pipe(
        map(countryCode => {
          console.log(countryCode);
          if (countryCode) {
            console.log('Country code is : ' + countryCode);
            this.router.navigate(['/' + countryCode]);
            return true;
          } else {
            console.log('No Country code...');
          }
        })
      );

    // let countryCode = 'pk';

    // if (countryCode === 'pk') {
    //   this.router.navigate(['/' + countryCode]);
    //   return true;
    // }
  }
}
