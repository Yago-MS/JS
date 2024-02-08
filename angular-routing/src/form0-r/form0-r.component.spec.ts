import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form0RComponent } from './form0-r.component';

describe('Form0RComponent', () => {
  let component: Form0RComponent;
  let fixture: ComponentFixture<Form0RComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form0RComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Form0RComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
