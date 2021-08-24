import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OreoFacade } from './oreos/oreos.facade';


@NgModule({
  imports: [CommonModule],
  providers: [OreoFacade]
})
export class CoreStateModule {}
