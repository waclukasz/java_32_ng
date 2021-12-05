import { Component } from '@angular/core'

@Component({
    selector: 'main-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    public headerName: string = 'Main Header'
}