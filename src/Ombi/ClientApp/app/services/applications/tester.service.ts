﻿import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';

import { ServiceAuthHelpers } from '../service.helpers';

import { IDiscordNotifcationSettings, IEmailNotificationSettings } from '../../interfaces/INotifcationSettings'


@Injectable()
export class TesterService extends ServiceAuthHelpers {
    constructor(http: AuthHttp) {
        super(http, '/api/v1/tester/');
    }

    discordTest(settings: IDiscordNotifcationSettings): Observable<boolean> {
        return this.http.post(`${this.url}discord`, JSON.stringify(settings), { headers: this.headers }).map(this.extractData);
    }

    emailTest(settings: IEmailNotificationSettings): Observable<boolean> {
        return this.http.post(`${this.url}email`, JSON.stringify(settings), { headers: this.headers }).map(this.extractData);
    }   
}