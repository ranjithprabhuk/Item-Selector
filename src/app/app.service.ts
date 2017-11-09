import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { AppConfig } from './app.config';
import { Observable } from 'rxjs/Observable';
import { LoaderService } from './shared/loader';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {
    private apiBase = new AppConfig().apiBase;
    private headers = new Headers();

    constructor(private http: Http, public loader: LoaderService, public notification: ToastrService) { }

    //for all GET operations
    get(module: string, parameter?: URLSearchParams): Promise<any> {

        this.loader.loader.emit(true);
        return this.http
            .get(this.apiBase + module, { search: parameter, headers: this.headers })
            .toPromise()
            .then((res) => { return this.handleSuccess(res) })
            .catch((err) => { return this.handleError(err) });
    }

    //for all POST operations
    create(module: string, parameter: any): Promise<any> {
        this.loader.loader.emit(true);
        return this.http
            .post(this.apiBase + module, parameter, this.headers)
            .toPromise()
            .then((res) => { return this.handleSuccess(res) })
            .catch((err) => { return this.handleError(err) });
    }

    //for all UPDATE operations
    update(module: string, parameter?: any): Promise<any> {
        this.loader.loader.emit(true);
        return this.http
            .put(this.apiBase + module, parameter, this.headers)
            .toPromise()
            .then((res) => { return this.handleSuccess(res) })
            .catch((err) => { return this.handleError(err) });
    }

    //for all DELETE operations
    delete(module: string): Promise<any> {
        this.loader.loader.emit(true);
        return this.http.delete(this.apiBase + module, this.headers)
            .toPromise()
            .then((res) => { return this.handleSuccess(res) })
            .catch((err) => this.handleError(err));
    }


    //for successfull API response
    private handleSuccess(response: any): Promise<any> {
        this.loader.loader.emit(false);
        this.notification.success("Data Fetched Succesfully!");        
        return Promise.resolve(response['_body'] || '');

    }


    //for error handling
    public handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        this.loader.loader.emit(false);
        return Promise.reject(error.message || error);
    }
}
