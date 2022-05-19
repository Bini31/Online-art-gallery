import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtstoreComponent } from './artstore/artstore.component';
import { RegisterComponent } from './register/register.component';
import { ArtComponent } from './art/art.component';
import { GuidelineComponent } from './guideline/guideline.component';
const routes: Routes = [{path:"",component:HomeComponent},
{path:"artists",component:ArtistsComponent},
{path:"artstore",component:ArtstoreComponent,
children:[
  {path:"art",component:ArtComponent}
  ]
},
{path:"guide",component:GuidelineComponent},
{path:"register",component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
