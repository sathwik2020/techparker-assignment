import { ApiService } from './services/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageDetailViewComponent } from './components/image-detail-view/image-detail-view.component';
import { ThumbnailListComponent } from './components/thumbnail-list/thumbnail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageDetailViewComponent,
    ThumbnailListComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
