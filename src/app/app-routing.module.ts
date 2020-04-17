import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanComponent } from './components/plan/plan.component';
import { HomeComponent } from './components/home/home.component';
import { TarificationComponent } from "./components/tarification/tarification.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'tarification/room-service', component: TarificationComponent},
  { path: 'tarification/multimedia', component: TarificationComponent},
  { path: 'tarification/mini-bar', component: TarificationComponent},
  { path: 'tarification/laundry', component: TarificationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
