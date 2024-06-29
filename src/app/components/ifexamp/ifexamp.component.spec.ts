import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfexampComponent } from './ifexamp.component';

describe('IfexampComponent', () => {
  let component: IfexampComponent;
  let fixture: ComponentFixture<IfexampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfexampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfexampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
