import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteDetailsComponent } from './quote-detail/quote-detail.component';
import { QuotesFormComponent } from './quote-form/quote-form.component';

import { DatePipePipe } from './date-pipe.pipe';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuotesComponent,
    HighlightDirective,
    DatePipePipe, 
    QuoteDetailsComponent,
    QuotesFormComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgForm,
    // NgModel,
    FormsModule,
    // ReactiveFormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
