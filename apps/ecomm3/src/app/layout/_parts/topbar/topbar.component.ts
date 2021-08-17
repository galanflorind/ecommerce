import { Component, HostBinding, Input } from '@angular/core';
import { LanguageService } from '../../../shared/language/services/language.service';
import { CurrencyService } from '../../../shared/currency/services/currency.service';
import { CompareService } from '../../../services/compare.service';

export type TopbarLayout = 'spaceship-start'|'spaceship-end'|'classic';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
    @Input() layout!: TopbarLayout;

    @HostBinding('class.topbar') classTopbar = true;

    @HostBinding('class.topbar--spaceship-start') get classTopbarSpaceshipStart(): boolean {
        return this.layout === 'spaceship-start';
    }

    @HostBinding('class.topbar--spaceship-end') get classTopbarSpaceshipEnd(): boolean {
        return this.layout === 'spaceship-end';
    }

    @HostBinding('class.topbar--classic') get classTopbarClassic(): boolean {
        return this.layout === 'classic';
    }

    constructor(
        public language: LanguageService,
        public currency: CurrencyService,
        public compare: CompareService,
    ) { }
}
