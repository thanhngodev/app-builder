import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutBuilderComponent } from './components/layout-builder/layout-builder.component';

const routes: Routes = [
  { component: LayoutComponent, path: 'layout' },
  { component: LayoutBuilderComponent, path: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
