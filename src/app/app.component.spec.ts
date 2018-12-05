import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Route } from '@angular/compiler/src/core';
import { ProjectComponent } from 'src/app/ui/Project/project/project.component';
import { AddComponent } from 'src/app/ui/Task/add/add.component';
import { ViewCompiler } from '@angular/compiler/src/view_compiler/view_compiler';
import { ViewComponent } from 'src/app/ui/Task/view/view.component';
import { UserComponent } from 'src/app/ui/user/user/user.component';
import { UpdateComponent } from 'src/app/ui/Task/update/update.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'ProjectManagerUI'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('ProjectManagerUI');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to ProjectManagerUI!');
  // });
});
