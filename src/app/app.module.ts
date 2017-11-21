import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemComponent } from './item/item.component';
import { StarWarsService } from './star-wars.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateCharacterModule } from './create-character/create-character.module';

@NgModule({
  declarations: [AppComponent, ListComponent, TabsComponent, ItemComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, CreateCharacterModule],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
