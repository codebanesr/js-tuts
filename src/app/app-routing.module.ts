import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{
  path: 'header',
  component: HeaderComponent,
  pathMatch: 'full'
}, {
  path: 'footer',
  component: FooterComponent,
  pathMatch: 'full'
}, {
  path: 'body',
  component: BodyComponent,
  pathMatch: 'full'
},{
  path : 'main',
  component : MainComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
