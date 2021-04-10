import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    constructor(private spinnerService: NgxSpinnerService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.spinnerService.show(undefined, {
            type: 'line-scale-party',
            bdColor: 'rgba(255,255,255,0)',
            color: '#333333'
        });
        return next.handle(request).pipe(
            delay(2000),
            finalize(() => {
                this.spinnerService.hide();
            })
        );
    }
}
