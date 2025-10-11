import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefferComponent } from './deffer.component';

describe('DefferComponent', () => {
  let component: DefferComponent;
  let fixture: ComponentFixture<DefferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
