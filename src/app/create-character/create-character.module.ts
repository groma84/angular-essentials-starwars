import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CreateCharacterComponent } from './create-character.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CreateCharacterComponent }])
  ],
  declarations: [CreateCharacterComponent]
})
export class CreateCharacterModule {}
