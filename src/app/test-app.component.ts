// import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
// import { AddItemsComponent } from './components/add-items.component';
// import { Item } from './models';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit, AfterViewInit {
  
//   form!: FormGroup
//   items!: FormArray

//   constructor(private fb:FormBuilder){}

//   ngOnInit():void {
//     this.form=this.fb.group({
      
//     })
//   }

//   addToCart(){
//     this.items.push(this.createItem())
//   }

//   createItem(){
//     return this.fb.group({
//       item:this.fb.control<string>(''),
//       quantity: this.fb.control<number>(1)
//     })
//   }

//   ngAfterViewInit(): void {
      
//   }


  
// }
