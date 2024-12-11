import { Component, OnInit } from '@angular/core';
import { CoreModule } from '@web/core';
import { BaseListMethods } from '@web/core/models';
import { HeaderComponent } from '@web/shared/header/header.component';

interface testItem{
  id: number;
  name: string;
}

interface SomeTestRequest{
  id: number;
  name: string;
  lastName: string
}


@Component({
  standalone: true,
  imports: [CoreModule, HeaderComponent],
  selector: 'ng-for-preview',
  templateUrl: './ng-for.component.html'
})

export class NgForPreviewComponent implements OnInit, BaseListMethods<SomeTestRequest> {


  listOfItems: testItem[] = [
    {
      id: 1,
      name: '1'
    },
    {
      id: 2,
      name: '2'
    },
    {
      id: 3,
      name: '3'
    },
    {
      id: 4,
      name: '4'
    },
  ];
  constructor() { }

  onPrepareRequest(): SomeTestRequest {
    return {
      id: 25,
      name: 'name',
      lastName: '25',
    }
  }


  onFetchData(): void {
    throw new Error('Method not implemented.');
  }



  trackByFunc(index: number, item: testItem){
    return item.id; // unique ident
  }

  ngOnInit() { }
}