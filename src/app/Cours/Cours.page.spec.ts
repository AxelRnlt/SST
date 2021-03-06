import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursPage } from './Cours.page';

describe('CoursPage', () => {
  let component: CoursPage;
  let fixture: ComponentFixture<CoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
