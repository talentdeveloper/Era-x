import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { PropertyOwnerComponent } from './property-owner.component';

const routes: Routes = [
    {
        path: "",
        component: DefaultComponent,
        children: [
            {
                path: "",
                component: PropertyOwnerComponent,
            }
        ]
    },
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule
    ], exports: [
        RouterModule
    ], declarations: [
        PropertyOwnerComponent
    ]
})
export class PropertyOwnerModule {



}