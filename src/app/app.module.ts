import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { GridsterModule } from 'angular-gridster2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutItemDirective } from './directives/layout-item.directive';
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
import { BuilderTypographyComponent } from './components-storage/builder-typography/builder-typography.component';
import { BuilderBannerComponent } from './components-storage/builder-banner/builder-banner.component';
import { BuilderAssetsComponent } from './components-storage/builder-assets/builder-assets.component';
import { BuilderContentEditorComponent } from './components-storage/builder-content-editor/builder-content-editor.component';
import { BuilderCollectionsComponent } from './components-storage/builder-collections/builder-collections.component';
import { BuilderFormComponent } from './components-storage/builder-form/builder-form.component';
import { BuilderBreadcrumbComponent } from './components-storage/builder-breadcrumb/builder-breadcrumb.component';
import { BoxControlItemComponent } from './components/box-control-item/box-control-item.component';

// Register Clarity icons
ClarityIcons.addIcons(userIcon);

@NgModule({
  declarations: [
    // Component
    AppComponent,
    LayoutComponent,
    LayoutBuilderComponent,
    SidebarBuilderComponent,
    BoxControlItemComponent,
    
    // Directive
    LayoutItemDirective,

    // Pipe
    SvgIconPipe,

    // Builder Component
    BuilderTypographyComponent,
    BuilderBannerComponent,
    BuilderAssetsComponent,
    BuilderContentEditorComponent,
    BuilderCollectionsComponent,
    BuilderFormComponent,
    BuilderBreadcrumbComponent
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
