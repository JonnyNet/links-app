import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Link } from '../../models/link';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {

  @Input()
  link!: Link;

  @Output()
  deleteLink = new EventEmitter();

  clickDelete(): void {
    this.deleteLink.next(this.link.id);
  }
}
