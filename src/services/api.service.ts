import { Injectable }   from '@angular/core';

@Injectable()
export class ApiService{
    public apiUrl = 'https://shop.insite.com.co/api/v1/mobile'; // URL to web api
    //public apiUrl = 'http://192.168.1.52:3000/api/v1/mobile'
    constructor(){}
}