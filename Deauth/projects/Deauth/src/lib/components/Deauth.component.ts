import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-Deauth',
    templateUrl: './Deauth.component.html',
    styleUrls: ['./Deauth.component.css']
})
export class DeauthComponent implements OnInit {
    constructor(private API: ApiService) { }

    ngOnInit() {
    }
}
