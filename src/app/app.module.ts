import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SecretSantaComponent } from './secret-santa/secret-santa.component';
import { CalendarCardComponent } from './calendar/calendar-card/calendar-card.component';
import { CalendarModalComponent } from './calendar/calendar-modal/calendar-modal.component';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SafePipe } from './shared/safe-pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    SecretSantaComponent,
    CalendarCardComponent,
    CalendarModalComponent,
    AuthComponent,
    PageNotFoundComponent,
    SafePipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
