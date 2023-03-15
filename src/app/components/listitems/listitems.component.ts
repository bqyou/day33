import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from 'src/app/models';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent implements OnChanges {

  // @Input()
  // get items(): Item[] {

  //   return this._items;
  // }

  // set items(i:Item[]){
  //   this._items = i
  //   this.itemCount = 0;
  //   for (let a of this._items){
  //     this.itemCount += a.quantity
  //   }
  // }

  // private _items: Item[] = []

  @Input()
  items = [] as Item[]

  @Output()
  onSelection = new Subject<number>

  itemCount=0

  ngOnChanges(change: SimpleChanges)  {
    let tmpItems = change['items'].currentValue
    this.itemCount=0
    for (let a of tmpItems){
          this.itemCount += a.quantity
        }
    console.info("latest list>>>",change)
    this.items = change['items'].currentValue

  }

  selected(idx:number){
    this.onSelection.next(idx)
  }

}
