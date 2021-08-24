import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Oreo } from '@oreo-app/api-interfaces';

@Component({
  selector: 'oreo-app-oreo-list',
  templateUrl: './oreo-list.component.html',
  styleUrls: ['./oreo-list.component.scss']
})
export class OreoListComponent {
  @Input() oreos: Oreo[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
