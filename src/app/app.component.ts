import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public name: string = 'Adam'
  public btnLabel: string = 'Click me!'
  public userInput: string = ''
  public isNameVisible: boolean = false

  public onInputLog(): void {
    if (this.userInput.trim().length > 2) {
      console.log(this.userInput);
      this.isNameVisible = true
    } else {
      alert('invalid input!')
    }
  }

  public onClick() {
    console.log('I was clicked')
  }

  public onParagraphClick() {
    console.log('Paragraph was click');
  }

  public getName() {

    return 'Lukasz'
  }
}
