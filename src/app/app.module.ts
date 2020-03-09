import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionFeaturesComponent } from './section-features/section-features.component';
import { ArticlesIconsComponent } from './articles-icons/articles-icons.component';
import { VideoComponent } from './video/video.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionFeaturesComponent,
    ArticlesIconsComponent,
    VideoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
