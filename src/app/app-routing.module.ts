import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { BookformComponent } from './bookform/bookform.component';
import { RegistrationComponent } from './registration/registration.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
                        {path:"",component:LoginComponent},
                        {path:"home",component:LibraryComponent,
                          children:[
                            {path:"",component:HomeComponent},
                            {path:"list/:type",component:ListComponent,runGuardsAndResolvers:"pathParamsChange"},
                            {path:"bookform/:id",component:BookformComponent},
                            {path:"book/:id",component:BookdetailComponent}
                          ]
                        },
                        {path:"signup",component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
