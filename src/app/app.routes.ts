import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'',redirectTo:"/home",pathMatch:'full'},
    {path:"home",component:HomeComponent,title:"Home"},
    {path:"about",component:AboutComponent,title:"About"},
    {path:"portfolio",component:PortfolioComponent,title:"Portfolio"},
    {path:"contact",component:ContactComponent,title:"Contact"},
    {path:"**",component:NotfoundComponent,title:"404 error",}
];
