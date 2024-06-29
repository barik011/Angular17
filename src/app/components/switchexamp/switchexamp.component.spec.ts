import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchexampComponent } from './switchexamp.component';

describe('SwitchexampComponent', () => {
  let component: SwitchexampComponent;
  let fixture: ComponentFixture<SwitchexampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchexampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchexampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
