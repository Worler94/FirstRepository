import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { LikeComponetComponent } from './like-componet/like-componet.component';

@NgModule({
  declarations: [
    AppComponent, TitleComponent, DescriptionComponent, LikeComponetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
