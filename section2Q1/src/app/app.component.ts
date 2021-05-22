import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calculationList:string[] = ['isPrime','isFibonacci'];
  num:number;
  result:number;
  showResult:boolean = false;

  onRound(){
    this.showResult = true;
    if(this.num<0){
      this.result = 1
    }else{
      this.result = Math.round(this.num);
    }
    this.num = undefined;
  }

   checkPrime(num:number):boolean { 
    if (num <= 1) return false; 
    if (num % 2 == 0 && num > 2) return false; 
    const s = Math.sqrt(num); 
    for(let i = 3; i <= s; i += 2) { 
        if(num % i === 0) return false; 
    }
    return true;
  }

  checkFibonacci(num:number):boolean{
    if(num===0) return false;
    const num1 = 5*(num*num) + 4;
    const num2 = 5*(num*num) - 4;
    const sqrt1 = Math.sqrt(num1);
    const sqrt2 = Math.sqrt(num2);
    return Math.ceil(sqrt1) === Math.floor(sqrt1) || Math.ceil(sqrt2) === Math.floor(sqrt2)
  }
  

  calculationForm = new FormGroup({
    calculation: new FormControl('',Validators.required)
  });

  
}
