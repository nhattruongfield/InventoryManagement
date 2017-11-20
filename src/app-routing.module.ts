import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

//import Component


const routeConfig:Routes=[
    //{path:'/', redirectTo:'', pathMatch:'full'},

]

@NgModule({
    imports:[
        RouterModule.forRoot(routeConfig),
        CommonModule
    ],
    declarations:[

    ],
    exports:[ RouterModule]
})

export class AppRoutingModule{}



