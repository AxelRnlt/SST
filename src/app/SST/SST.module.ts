import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SSTPageRoutingModule } from './SST.router.module';

import { SSTPage } from './SST.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SSTPageRoutingModule
  ],
  declarations: [SSTPage]
})
export class SSTPageModule {}
