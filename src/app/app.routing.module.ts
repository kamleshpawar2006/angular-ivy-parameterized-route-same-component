import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownTempComponent } from './dropdown-temp/dropdown-temp.component';

const routes: Routes = [
  { path: 'dropdown/:par', component: DropdownTempComponent },
  { path: 'dropdown', redirectTo: 'dropdown/a', pathMatch: 'full' },
  { path: '', redirectTo: 'dropdown', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
