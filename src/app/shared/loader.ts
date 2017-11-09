import { Component, Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoaderService {

    public loader: EventEmitter<any> = new EventEmitter();

}


@Component({
    selector: 'loader',
    template: `
        <div id="loader" *ngIf="loading" style="background-color:rgba(255,255,255,0.5);">
            <div></div>
        </div>
  `
})

export class LoaderComponent {

    public loading: boolean = false;


    constructor(public loaderService: LoaderService) {
        this.loaderService.loader.subscribe((res) => { this.loading = res });
    }

}




