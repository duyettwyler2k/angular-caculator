import {Component, OnInit} from '@angular/core';
import {Calculator} from '../calculator';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  calculator: Calculator = {};

  constructor() {
  }

  getResult() {
    switch (this.calculator.operator) {
      case '+':
        this.calculator.result = this.calculator.a + this.calculator.b;
        break;
      case '-':
        this.calculator.result = this.calculator.a - this.calculator.b;
        break;
      case '*':
        this.calculator.result = this.calculator.a * this.calculator.b;
        break;
      case '/':
        this.calculator.result = this.calculator.a / this.calculator.b;
    }
  }

  ngOnInit() {
  }

}
