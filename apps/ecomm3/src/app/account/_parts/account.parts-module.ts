import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../../shared/shared.module";
import { AccountRoutingModule } from "../account.routing.module";
import { PageAddressesComponent } from "./page-addresses/page-addresses.component";
import { PageDashboardComponent } from "./page-dashboard/page-dashboard.component";
import { PageEditAddressComponent } from "./page-edit-address/page-edit-address.component";
import { PageForgotPasswordComponent } from "./page-forgot-password/page-forgot-password.component";
import { PageInvoicesComponent } from "./page-invoices/page-invoices.component";
import { PageLoginComponent } from "./page-login/page-login.component";
import { PagePasswordComponent } from "./page-password/page-password.component";
import { PageProfileComponent } from "./page-profile/page-profile.component";
import { PageRegisterComponent } from "./page-register/page-register.component";
import { AddressCardComponent } from './address-card/address-card.component';


@NgModule({
    declarations: [
        PageAddressesComponent,
        PageDashboardComponent,
        PageEditAddressComponent,
        PageLoginComponent,
        PageInvoicesComponent,
        PagePasswordComponent,
        PageProfileComponent,
        PageRegisterComponent,
        PageForgotPasswordComponent,
        AddressCardComponent
    ],
    exports: [
        PageAddressesComponent,
        PageDashboardComponent,
        PageEditAddressComponent,
        PageLoginComponent,
        PageInvoicesComponent,
        PagePasswordComponent,
        PageProfileComponent,
        PageRegisterComponent,
        PageForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        TranslateModule.forChild(),
        SharedModule
    ]
})
export class AccountPartsModule { }