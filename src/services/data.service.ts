import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    constructor() { }
    public registeredUser = {
        name:'Camilo Perez',
        email:'camilo.perezvr@gmail.com',
        phone:'123123123',
        address:'cr 53 # 1 sur 1',
        city:'Medellin',
        country:'Colombia',
        password:'123456'
    }
    public categories = {
        plumbing: {
            en: 'plumbing',
            es: 'Trabajo Carpinteria - Barrio El Poblado (cr 10 # 34 - 9) Horario: 15:30, Contratante :Juan Gomez'
        },
        cleaning: {
            en: 'plumbing',
            es: 'Trabajo Construccion - Unidad los Pinos - Horario: 10:30, Contratante :David Vasquez'
        }
    }
    public requests = {
        plumbing: {
            en: 'plumbing',
            es: 'Trabajo Plomería - Barrio laureles(cr 78 # 35 - 23)'
        },
        carpentry: {
            en: 'carpentry',
            es: 'carpintería'
        },
        construction: {
            en: 'construction',
            es: 'construcción'
        },
        cleaning: {
            en: 'cleaning',
            es: 'limpieza'
        },
    };
    public histories = {
        plumbing: {
            en: 'plumbing',
            es: 'Plomería'
        },
        carpentry: {
            en: 'carpentry',
            es: 'carpintería'
        },
        construction: {
            en: 'construction',
            es: 'construcción'
        },
        cleaning: {
            en: 'cleaning',
            es: 'limpieza'
        },
    };

    public users = [
        {
            id: '1234',
            name: 'Pedro Pérez',
            email: 'pedro@gmail.com',
            phone: '1234567',
            categories: ['plumbing', 'carpentry', 'construction'],
            description: 'Loren ipsun dolor is'
        },
        {
            id: '12347',
            name: 'Carlos Velez',
            email: 'carlos@gmail.com',
            phone: '1234567',
            categories: ['plumbing', 'carpentry', 'construction'],
            description: 'Loren ipsun dolor is'
        },
        {
            id: '12346',
            name: 'Luz Agudelo',
            email: 'luz@gmail.com',
            phone: '1234567',
            categories: ['cleaning'],
            description: 'Loren ipsun dolor is'
        },
        {
            id: '12345',
            name: 'Juan Lopez',
            email: 'juan@gmail.com',
            phone: '1234567',
            categories: ['cleaning'],
            description: 'Loren ipsun dolor is'
        }
    ];
    public getUserFromCategory(category):Array<any>{
        let user,users=[],i;
        for(i=0;i<this.users.length;i++){
            user = this.users[i];
            if(user.categories.indexOf(category)!==-1){
                users.push(user)
            }
        }
        return users
    }
    public getUser(id):Object{
        let i:number,user;
        for(i=0;i<this.users.length;i++){
            user = this.users[i];
            if(user.id === id){
                return user;
            }
        }
        return {}
    }
}