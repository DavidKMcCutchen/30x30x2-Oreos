import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Oreo } from '@oreo-app/api-interfaces';

@Component({
  selector: 'oreo-app-oreo-details',
  templateUrl: './oreo-details.component.html',
  styleUrls: ['./oreo-details.component.scss']
})
export class OreoDetailsComponent {
  currentOreo: Oreo;
  originalTitle: string;

  @Output() save = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() form: FormGroup;

  @Input() set oreo(value: Oreo | null) {
    if (value) this.originalTitle = value.title;
    this.currentOreo = Object.assign({}, value)
  };
  
  saveForm(formDirective: FormGroupDirective) {
    if (formDirective.invalid) return;
    this.save.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  };

}
