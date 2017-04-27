import { Injectable } from '@angular/core'

@Injectable()
export class HandleErrorService{
    public error(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}