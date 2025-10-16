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
  buttonTitle = 'Título do Botão';
  buttonDisabled = true;
  onButtonClick(){
    this.buttonTitle = 'Alterado';
    this.buttonDisabled = !this.buttonDisabled;
  }
  widthButton1 = '130px';
  widthButton2 = 160;
  styleObject = {
    marginRight: '8px',
    width: '160px',
    backgroundColor: 'green'
  };
  updateStyleObject() {
    this.styleObject = {
      marginRight: '8px',
      width: '160px',
      backgroundColor: 'purple'
    };
  }
  updateWidth(){
    this.widthButton2 = 200;
  }
  isRedButton = true;
  isBlueButton = true;

}

