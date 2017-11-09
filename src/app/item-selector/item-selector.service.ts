import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { ApiService } from '../app.service';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ItemSelectorService {

    constructor(private apiService: ApiService) { }
    protected apiEndPoint: string = "/assets/csv/";

    //to get the Data from the CSV file
    getSettleData(parameter?:any): Promise<any> {
        let params: URLSearchParams = new URLSearchParams();
        return this.apiService.get(this.apiEndPoint+"Settled.csv")
            .then(res => { return Promise.resolve(res)})
            .catch(err => { return Promise.reject(err)});
    }
    
}
