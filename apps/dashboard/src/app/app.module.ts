import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnvironmentModule } from '@oreo-app/environment'
import { environment } from '../environments/environment';
import { CoreDataModule } from "@oreo-app/core-data";
import { CoreStateModule } from "@oreo-app/core-state";
import { MaterialModule } from '@oreo-app/material';
import { UiLoginModule } from '@oreo-app/ui-login';
import { OreoDetailsComponent } from './oreos/oreo-details/oreo-details.component';
import { OreoListComponent } from './oreos/oreo-list/oreo-list.component';
import { OreosComponent } from './oreos/oreos.component';

@NgModule({
  declarations: [
    AppComponent,
    OreosComponent,
    OreoListComponent,
    OreoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
