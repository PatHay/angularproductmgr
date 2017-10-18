import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './routes';
import { AppComponent } from './app.component';
import { ProdlistComponent } from './prodlist/prodlist.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ProjectService } from './project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProdlistComponent,
    CreateComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
