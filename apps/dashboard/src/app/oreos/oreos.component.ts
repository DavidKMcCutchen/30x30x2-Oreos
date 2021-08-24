import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Oreo, emptyOreo } from '@oreo-app/api-interfaces';
import { OreoFacade } from '@oreo-app/core-state';
import { Observable } from 'rxjs';


@Component({
  selector: 'oreo-app-oreos',
  templateUrl: './oreos.component.html',
  styleUrls: ['./oreos.component.scss']
})
export class OreosComponent implements OnInit {
  oreos$: Observable<Oreo[]> = this.oreoFacade.allOreos$;
  selectedOreo$: Observable<Oreo> = this.oreoFacade.selectedOreo$;

  form: FormGroup;

  constructor(
    private oreoFacade: OreoFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.reset();
    this.oreoFacade.loadOreos();
  };

  selectedOreo(oreo: Oreo) {
    this.oreoFacade.selectOreo(oreo.id);
    this.form.patchValue(oreo);
  };

  reset() {
    this.selectedOreo(emptyOreo);
    this.form.reset();
  }

  createOreo(oreo: Oreo) {
    this.oreoFacade.createOreo(oreo);
    this.form.reset();
  };

  updateOreo(oreo: Oreo) {
    this.oreoFacade.updateOreo(oreo);
    this.form.reset();
  };

saveOreo(oreo: Oreo) {
  oreo.id
  ? this.oreoFacade.updateOreo(oreo)
  : this.oreoFacade.createOreo(oreo);
};

deleteOreo(oreoId: string) {
  this.oreoFacade.deleteOreo(oreoId);
  this.form.reset;
};

cancel() {
  this.reset();
};

private initForm() {
  this.form = this.formBuilder.group({
    id: null,
    title: ['', Validators.required],
    description: ['', Validators.required],
    deliciousness: [''],
    seasonal: ['']
  })
}

}
