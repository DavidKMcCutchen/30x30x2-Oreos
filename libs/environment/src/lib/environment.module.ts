import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OreoEnvironment } from "./oreo.model";
import { OREO_ENVIRONMENT } from "./oreo.token";

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: OreoEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: OREO_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }  
}
