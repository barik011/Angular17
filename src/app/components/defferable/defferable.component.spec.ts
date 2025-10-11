import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefferableComponent } from './defferable.component';

describe('DefferableComponent', () => {
  let component: DefferableComponent;
  let fixture: ComponentFixture<DefferableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefferableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefferableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
