import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddItemsComponent } from './components/add-items.component';
import { Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(AddItemsComponent)
  addItemsComponent!: AddItemsComponent;

  @ViewChild('modifyButton')
  modifyBtn!: ElementRef;

  items: Item[] = []
  selectedItem: Item | null = null

  ngOnInit():void {

  }

  ngAfterViewInit(): void {
      console.info("modifybtn>>", this.modifyBtn)
      this.modifyBtn.nativeElement.innerText = 'I have modified the button'
  }


  newItem(item: Item){
    this.items = [...this.items, item]
  }

  itemSelected(idx:number){
    this.selectedItem=this.items[idx]
  }

  modifyItem(){
    this.newItem(this.addItemsComponent.value)
  }
}
