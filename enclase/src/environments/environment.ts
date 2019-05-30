
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
  get config(){
    return ConfigAccesor.Config;
  }
};