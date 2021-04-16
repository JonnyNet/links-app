import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkRoutingModule } from './link-routing.module';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    LinkRoutingModule,
    SharedModule,
  ]
})
export class LinkModule { }
