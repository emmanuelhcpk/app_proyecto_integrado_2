import { Injectable }           from '@angular/core'
import { Headers, Http }        from '@angular/http'
import { HandleErrorService }   from '../services/handle-error.service'
import { ApiService }           from '../services/api.service'
import { DataService }           from '../services/data.service'
import { AuthHttp }             from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService{
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private authHttp:AuthHttp, private http:Http, private handleErrorService:HandleErrorService, private api:ApiService, private data:DataService){}
    public signup(user):Promise<any>{
        return this.http.post(`${this.api.apiUrl}/signup`,{user:user}, {headers:this.headers})
            .toPromise()
            .then(response=>response.json())
            .catch(this.handleErrorService.error);
    }
    
    public commonLogin(email:string,passwd:string):Promise<any>{
        return new Promise((resolve,reject)=>{
            if(this.data.registeredUser.email === email && this.data.registeredUser.password === passwd){
                console.log('yeah is the same')
                resolve({user:this.data.registeredUser});
            }else{
                console.log('noooooo',this.data.registeredUser)
                reject({error:'unauthorized'});
            }
        })
        /*return this.http.post(`${this.api.apiUrl}/login`,{email:email,passwd:passwd}, {headers:this.headers})
            .toPromise()
            .then(response=>response.json())
            .catch(this.handleErrorService.error);*/
    }
    public oauthLogin(id,token):Promise<any>{
        return this.http.post(`${this.api.apiUrl}/login/${id}`,{token:token}, {headers:this.headers})
            .toPromise()
            .then(response=>response.json())
            .catch(this.handleErrorService.error);
    }
    public isLogged():Promise<any>{
        return(new Promise(function(resolve,reject){
            var token = localStorage.getItem('userToken');
            if(!token){ reject() }
            else { resolve() } 
            
        }))
        /*
        return this.http.post(`${this.api.apiUrl}/token`,{token:token}, {headers:this.headers})
            .toPromise()
            .then(response=>response.json())
            .catch(this.handleErrorService.error)*/
    }
    public getUserAttr(param):any{
        try{
            let user = localStorage.getItem('user');
            if(!user){
                return ''
            }
            user = JSON.parse(user);
            return user[param]
        }catch(e){
            return ''
        }
    }
    public setLocal(key:string,value:string){
        localStorage.setItem(key,value);
    }
    public getUser(){
        let user = localStorage.getItem('user');
        if(!user){
            return false
        }
        let userJson = JSON.parse(user);
        return userJson
    }
    public setUserAttr(param,value){
        try{
            let user = localStorage.getItem('user');
            if(!user){
                return
            }
            let userJson = JSON.parse(user);
            userJson[param] = value;
            localStorage.setItem('user',JSON.stringify(userJson));
            return
        }catch(e){
            return
        }
    }
}