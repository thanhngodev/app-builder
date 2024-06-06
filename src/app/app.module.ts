import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { GridsterModule } from 'angular-gridster2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { LayoutItemDirective } from './directives/layout-item.directive';
import { GridContentComponent } from './components/grid-content/grid-content.component';
import { LayoutBuilderComponent } from './components/layout-builder/layout-builder.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Example1Component,
    Example2Component,
    LayoutItemDirective,
    GridContentComponent,
    LayoutBuilderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GridsterModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
