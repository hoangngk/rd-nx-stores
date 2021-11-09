import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from '@rd-nx-stores/header';
import { StepperModule } from '@rd-nx-stores/stepper';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, StepperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
