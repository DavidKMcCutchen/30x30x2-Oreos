import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { OreosComponent } from './oreos/oreos.component';
import { LoginComponent, UiLoginModule, WildComponent } from "@oreo-app/ui-login";

const routes: Route[] = [
{path: '', component: LoginComponent},
{path: 'oreos', component: OreosComponent},
{path: 'wild', component: WildComponent},
{path: 'login', component: LoginComponent},
{path: '**', redirectTo: 'wild', pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
