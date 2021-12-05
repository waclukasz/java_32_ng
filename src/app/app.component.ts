import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public name: string = ''
  public surname: string = ''

  public users: Array<any> = []

  public saveUser() {
    this.users.push({
      name: this.name,
      surname: this.surname,
      id: Date.now()
    })

    this.name = ''
    this.surname = ''
    console.log(this.users);

  }
}
