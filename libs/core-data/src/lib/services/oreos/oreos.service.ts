import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Oreo } from "@oreo-app/api-interfaces";
import { mapTo } from "rxjs/operators";
import { OreoEnvironment, OREO_ENVIRONMENT } from "@oreo-app/environment";

@Injectable({
  providedIn: 'root'
})
export class OreosService {
  model = 'oreos';

  constructor(
    private httpClient: HttpClient,
    @Inject(OREO_ENVIRONMENT)private environment: OreoEnvironment
  ) {}

  all() {
    return this.httpClient.get<Oreo[]>(this.getUrl())
  };

  find(oreoId: string) {
    return this.httpClient.get<Oreo>(this.getUrlById(oreoId))
  };

  create(oreos: Oreo) {
    return this.httpClient.post<Oreo>(this.getUrl(), oreos)
  };

  update(oreos: Oreo) {
    return this.httpClient.patch<Oreo>(this.getUrlById(oreos.id), oreos)
  };

  delete(oreoId: string) {
    return this.httpClient.delete<Oreo>(this.getUrlById(oreoId)).pipe(mapTo(oreoId))
  };

  getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  getUrlById(id: string) {
    return `${this.getUrl()}/${id}`
  }
}
