import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'department',
    component: DepartmentComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'search',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
