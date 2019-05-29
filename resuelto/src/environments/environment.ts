import { HammerGestureConfig } from '@angular/platform-browser';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export class ConfigAccesor{
  static GetConfig= async ()=>{
    var oCall = await fetch("config.json");
    localStorage.setItem("config",JSON.stringify(await oCall.json()));
  }

  static get Config(){
    return JSON.parse(localStorage.getItem("config"));
  }
}



export const environment = {
  production: false,
  get api(){
    return ConfigAccesor.Config;
  }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
