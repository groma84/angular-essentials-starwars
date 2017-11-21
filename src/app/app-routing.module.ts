import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: 'characters',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':side', component: ListComponent }
    ]
  },
  {
    path: 'new-character',
    loadChildren: './create-character/create-character.module#CreateCharacterModule'
  },
  { path: '**', redirectTo: 'characters' } // catch-all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
