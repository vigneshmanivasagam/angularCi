import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MySkillComponent } from './my-skills.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { HeaderComponent } from './header/header.component';
import { ModalModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot()
  ],
  declarations: [MySkillComponent,LeftNavComponent, MaincontentComponent, HeaderComponent],
  exports :[MySkillComponent]
})
export class MySkillsModule { }
