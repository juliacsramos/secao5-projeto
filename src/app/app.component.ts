import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = 'Valor Inicial';
  inputType = 'text';
  isDisabled = false;


  enableInput() {
    this.isDisabled = false;
  }
  disableInput() {
    this.isDisabled = true;
  }
  setPasswordInput() {
    this.inputType = 'password';
  }
  setTextInput() {
    this.inputType = 'text';
  }
  logInputText() {
    console.log(this.inputText);
  }
  handleInputKeyup(event: KeyboardEvent) {
    const currentText = event.target as HTMLInputElement;
    console.log(currentText.value);
  }
  handleInputEvent(event: Event) {
    const currentText = event.target as HTMLInputElement;
    console.log(currentText.value);
  }

}

