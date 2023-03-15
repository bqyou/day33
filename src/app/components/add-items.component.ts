import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Item } from '../models';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit, OnChanges{

    form!:FormGroup

    constructor(private fb: FormBuilder){
      
    }

    @Input()
    item: Item | null = null

    @Output()
    onNewItem= new Subject<Item>()

    get value(): Item{
      return this.form.value as Item
    }

    get invalid(): boolean{
      return this.form.invalid
    }

    ngOnInit(): void {
      this.form = this.fb.group({
        item: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
        quantity: this.fb.control<number>(0, [Validators.required, Validators.min(1)])

      })
    }

    ngOnChanges(change: SimpleChanges){
      const i: Item = change['item'].currentValue
      const itemCtrl = this.form.get('item') as FormControl
      const itemQty = this.form.get('quantity') as FormControl
      itemCtrl.setValue(i.item)
      itemQty.setValue(i.quantity)
    }


    processForm(){
      // const itemCtrl = this.form.get('item') as FormControl
      // const item = itemCtrl.value
      // const qtyCtrl = this.form.get('quantity') as FormControl
      // const qty = qtyCtrl.value

      // console.info("...", item, qty)
      
      const value = this.form.value as Item
      // const item1 = value?.item
      // const qty1 = value?.quantity
      console.info(">>>", value)
      this.form.reset()
      this.onNewItem.next(value)

    }


}
