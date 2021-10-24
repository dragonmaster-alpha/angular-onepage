
import { Component, ViewChild, OnInit } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/release/components/datatable.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  data = [
      { shift: 'A', name:'My Test1', start:'6:00AM', end: '12:00PM' },
      { shift: 'B', name:'My Test2', start:'12:00PM', end: '6:00PM' },
      { shift: 'C', name:'My Test3', start:'6:00PM', end: '12:00AM' },
      { shift: 'C', name:'My Test4', start:'6:00PM', end: '12:00AM' },
      { shift: 'C', name:'My Test5', start:'6:00PM', end: '12:00AM' },
      { shift: 'C', name:'My Test6', start:'6:00PM', end: '12:00AM' },
      { shift: 'C', name:'My Test7', start:'6:00PM', end: '12:00AM' },
      { shift: 'D', name:'My Test8', start:'12:00AM', end: '6:00AM' }
  ];

  selected = [];
  @ViewChild('table') table: DatatableComponent;
  rows = [];
  isEditable = {};

  constructor() {}

  ngOnInit() {
    console.log('here');
    this.rows = this.data;
    this.rows.forEach(row => 
      {
        let testArr = []; 
        row.nota.forEach(nota => {testArr.push(nota.test)});
        row.selected = testArr;
      }
    )
    console.log(this.rows)
  }    

  // Save row
  save(row, rowIndex){
    this.isEditable[rowIndex]=!this.isEditable[rowIndex]
    console.log("Row saved: "+ rowIndex);
  }

  // Delete row
  delete(row, rowIndex){
    this.rows = this.rows.filter((row, id) => {if (id != rowIndex) return row;})
    console.log("Row deleted: "+ rowIndex);
  }

  //Add row
  addEntry() {
    this.rows = [...this.rows, { shift: '', name:'', start:'', end: '' }];
    let len = this.rows.length - 1;
    this.isEditable[len]=1
  }
}