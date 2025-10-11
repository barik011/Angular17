import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchexampComponent } from './components/switchexamp/switchexamp.component';
import { IfexampComponent } from './components/ifexamp/ifexamp.component';
import { ForexampComponent } from './components/forexamp/forexamp.component';
import { NgClassExampComponent } from './components/ngclass-examp/ngclass-examp.component';
import { InterpolationExampComponent } from './components/interpolation-examp/interpolation-examp.component';
import { PropertyExampComponent } from './components/property-examp/property-examp.component';
import { DiffPropertyInterpoComponent } from './components/diff-property-interpo/diff-property-interpo.component';
import { NgStyleExampComponent } from './components/ng-style-examp/ng-style-examp.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { PipeExampComponent } from './components/pipe-examp/pipe-examp.component';
import { ApiSrvdataComponent } from './components/api-srvdata/api-srvdata.component';
import { DefferComponent } from './components/deffer/deffer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgStyle,
    SwitchexampComponent,
    IfexampComponent,
    ForexampComponent,
    NgClassExampComponent,
    InterpolationExampComponent,
    PropertyExampComponent,
    DiffPropertyInterpoComponent,
    NgStyleExampComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    PipeExampComponent,
    ApiSrvdataComponent,
    DefferComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sahoclass1';
}
