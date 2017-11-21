import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemComponent } from './item/item.component';
import { StarWarsService } from './star-wars.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: TabsComponent },
  { path: 'new-character', component: CreateCharacterComponent },
  { path: '**', redirectTo: '' } // catch-all route
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TabsComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
