import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TranslateModule } from '@ngx-translate/core';
// modules
import { CheckboxModule } from '../checkbox/checkbox.module';
import { CollapseModule } from '../collapse';
import { CurrencyModule } from '../currency/currency.module';
import { RadioModule } from '../radio/radio.module';

// components
import { AddressCardComponent } from './components/address-card/address-card.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { BlockHeaderComponent } from './components/block-header/block-header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DecorComponent } from './components/decor/decor.component';
import { IconComponent } from './components/icon/icon.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { QuickviewComponent } from './components/quickview/quickview.component';
import { RatingComponent } from './components/rating/rating.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { ShareLinksComponent } from './components/share-links/share-links.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';
import { TermsComponent } from './components/terms/terms.component';
import { TermsModalComponent } from './components/terms-modal/terms-modal.component';
import { TimerComponent } from './components/timer/timer.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehiclePickerModalComponent } from './components/vehicle-picker-modal/vehicle-picker-modal.component';
import { VehicleSelectComponent } from './components/vehicle-select/vehicle-select.component';
import { WidgetCategoriesComponent } from './widgets/widget-categories/widget-categories.component';

// directives
import { AddToCartDirective } from './directives/add-to-cart.directive';
import { AddToCompareDirective } from './directives/add-to-compare.directive';
import { AddToWishlistDirective } from './directives/add-to-wishlist.directive';
import { AddVehicleDirective } from './directives/add-vehicle.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { FakeSlidesDirective } from './directives/fake-slides.directive';
import { OwlPreventClickDirective } from './directives/owl-prevent-click.directive';
import { RemoveFromCartDirective } from './directives/remove-from-cart.directive';
import { RemoveFromCompareDirective } from './directives/remove-from-compare.directive';
import { RemoveFromWishlistDirective } from './directives/remove-from-wishlist.directive';
import { RemoveVehicleDirective } from './directives/remove-vehicle.directive';
import { SplitStringDirective } from './directives/split-string.directive';

// pipes
import { ActiveFilterLabelPipe } from './pipes/active-filter-label.pipe';
import { CompatibilityToStatusBadgeIconPipe } from './pipes/compatibility-to-status-badge-icon.pipe';
import { CompatibilityToStatusBadgeTextPipe } from './pipes/compatibility-to-status-badge-text.pipe';
import { CompatibilityToStatusBadgeTypePipe } from './pipes/compatibility-to-status-badge-type.pipe';
import { GetProductImagePipe } from './pipes/get-product-image.pipe';
import { HasErrorPipe } from './pipes/has-error.pipe';
import { IsInvalidPipe } from './pipes/is-invalid.pipe';
import { StockToStatusBadgeTextPipe } from './pipes/stock-to-status-badge-text.pipe';
import { StockToStatusBadgeTypePipe } from './pipes/stock-to-status-badge-type.pipe';


@NgModule({
    declarations: [
        // components
        AddressCardComponent,
        AddressFormComponent,
        ArrowComponent,
        BlockHeaderComponent,
        BreadcrumbComponent,
        DecorComponent,
        IconComponent,
        InputNumberComponent,
        LoadingBarComponent,
        PaginationComponent,
        PostCardComponent,
        ProductCardComponent,
        ProductFormComponent,
        ProductGalleryComponent,
        QuickviewComponent,
        RatingComponent,
        RegisterFormComponent,
        SectionHeaderComponent,
        ShareLinksComponent,
        StatusBadgeComponent,
        TermsComponent,
        TermsModalComponent,
        TimerComponent,
        VehicleFormComponent,
        VehiclePickerModalComponent,
        VehicleSelectComponent,
        WidgetCategoriesComponent,
        // directives
        AddToCartDirective,
        AddToCompareDirective,
        AddToWishlistDirective,
        AddVehicleDirective,
        DropdownDirective,
        FakeSlidesDirective,
        OwlPreventClickDirective,
        RemoveFromCartDirective,
        RemoveFromCompareDirective,
        RemoveFromWishlistDirective,
        RemoveVehicleDirective,
        SplitStringDirective,
        // pipes
        ActiveFilterLabelPipe,
        CompatibilityToStatusBadgeIconPipe,
        CompatibilityToStatusBadgeTextPipe,
        CompatibilityToStatusBadgeTypePipe,
        GetProductImagePipe,
        HasErrorPipe,
        IsInvalidPipe,
        StockToStatusBadgeTextPipe,
        StockToStatusBadgeTypePipe,
    ],
    exports: [
        // modules
        CheckboxModule,
        CurrencyModule,
        // components
        AddressCardComponent,
        AddressFormComponent,
        ArrowComponent,
        BlockHeaderComponent,
        DecorComponent,
        IconComponent,
        InputNumberComponent,
        LoadingBarComponent,
        PaginationComponent,
        PostCardComponent,
        ProductCardComponent,
        ProductFormComponent,
        ProductGalleryComponent,
        QuickviewComponent,
        RatingComponent,
        RegisterFormComponent,
        SectionHeaderComponent,
        ShareLinksComponent,
        StatusBadgeComponent,
        TermsComponent,
        TimerComponent,
        VehicleFormComponent,
        VehiclePickerModalComponent,
        VehicleSelectComponent,
        WidgetCategoriesComponent,
        // directives
        AddToCartDirective,
        AddToCompareDirective,
        AddToWishlistDirective,
        AddVehicleDirective,
        DropdownDirective,
        FakeSlidesDirective,
        OwlPreventClickDirective,
        RemoveFromCartDirective,
        RemoveFromCompareDirective,
        RemoveFromWishlistDirective,
        RemoveVehicleDirective,
        SplitStringDirective,
        // pipes
        ActiveFilterLabelPipe,
        CompatibilityToStatusBadgeIconPipe,
        CompatibilityToStatusBadgeTextPipe,
        CompatibilityToStatusBadgeTypePipe,
        GetProductImagePipe,
        HasErrorPipe,
        IsInvalidPipe,
        StockToStatusBadgeTextPipe,
        StockToStatusBadgeTypePipe,
    ],
    imports: [
        // modules (angular)
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        // modules (third-party)
        CarouselModule,
        ModalModule.forChild(),
        TooltipModule,
        TranslateModule.forChild(),
        // modules
        CheckboxModule,
        CollapseModule,
        CurrencyModule,
        RadioModule,
    ],
})
export class SharedModule { }
