import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
// import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { ImportModule } from './import/import.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxDatatableModule, ImportModule ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
