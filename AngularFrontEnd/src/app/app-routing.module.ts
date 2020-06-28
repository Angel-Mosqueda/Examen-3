import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NasaAPIComponent } from './components/nasa-api/nasa-api.component';
import { AtmosferaAPIComponent } from './components/atmosfera-api/atmosfera-api.component';


const routes: Routes = [
  { path: '', component: NasaAPIComponent },
  { path: 'NASA', component:NasaAPIComponent},
  { path: 'ATMOSFERICA', component: AtmosferaAPIComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
