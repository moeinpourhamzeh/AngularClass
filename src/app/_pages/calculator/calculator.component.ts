import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  firstArgument: number | undefined
  secondArgument: number | undefined
  finalResult: number | undefined

  operation: string | undefined

  selectNumber(num: number) {
    if(this.operation) {
      this.secondArgument = parseInt((this.secondArgument ? this.secondArgument?.toString() : '') + num.toString())
    } else {
      this.firstArgument = parseInt((this.firstArgument ? this.firstArgument?.toString() : '') + num.toString())
    }
  }

  selectOperation(operation: string) {
    this.operation = operation
  }

  clear() {
    if(this.secondArgument) {
      this.secondArgument = undefined
    } else if(this.operation) {
      this.operation = undefined
    } else {
      this.firstArgument = undefined
    }
  }

  operate() {
    switch(this.operation) {
      case '+':
        this.finalResult = this.firstArgument! + this.secondArgument!
        return
      case '-':
        this.finalResult = this.firstArgument! - this.secondArgument!
        return

        case '*':
          this.finalResult = this.firstArgument! * this.secondArgument!
          return

        case '/':
          this.finalResult = this.firstArgument! / this.secondArgument!
          return
    }
  }
}
