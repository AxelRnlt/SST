import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestesPage } from './Gestes.page';

describe('GestesPage', () => {
  let component: GestesPage;
  let fixture: ComponentFixture<GestesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
