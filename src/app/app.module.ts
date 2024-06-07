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

// Optionally, import additional Clarity icons if you plan to use them
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon } from '@cds/core/icon';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { SidebarBuilderComponent } from './components/sidebar-builder/sidebar-builder.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SvgIconPipe } from './pipes/svg-icon.pipe';
import { HttpClientModule } from '@angular/common/http';

// Register Clarity icons
ClarityIcons.addIcons(userIcon);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Example1Component,
    Example2Component,
    LayoutItemDirective,
    GridContentComponent,
    LayoutBuilderComponent,
    SidebarBuilderComponent,
    SvgIconPipe
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridsterModule,
    ClarityModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
