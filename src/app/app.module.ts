import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
