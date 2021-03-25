import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeauthComponent } from './components/Deauth.component';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from './modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: DeauthComponent }
];

@NgModule({
    declarations: [DeauthComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [DeauthComponent]
})
export class DeauthModule { }
