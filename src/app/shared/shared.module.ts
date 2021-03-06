import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './components/link/link.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadComponent } from './components/load/load.component';

const components = [
  LinkComponent,
  LoadComponent,
];

const modules = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...components,
  ]
})
export class SharedModule { }
