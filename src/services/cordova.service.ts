import { Injectable }           from '@angular/core'
import 'rxjs/add/operator/toPromise';
declare var cordova:any;
@Injectable()
export class CordovaService{
    constructor(){}
    hideKeyboard(){
        cordova.plugins.Keyboard.close()
    }
}