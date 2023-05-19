import { TrendingSubjectComponent } from './trending-subject/trending-subject.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  { path: "home", component: HomeComponent},
  { path: "trending", component: TrendingSubjectComponent },
  {
    path: 'trending-subject/:name',
    component: TrendingSubjectComponent,
    title: 'Trending Subjects',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
