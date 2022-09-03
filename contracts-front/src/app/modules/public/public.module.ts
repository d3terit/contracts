import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { OauthlinkComponent } from './pages/oauthlink/oauthlink.component';
import { SignInModule } from 'src/app/shared/components/sign-in/sign-in.module';
import { SignUpModule } from 'src/app/shared/components/sign-up/sign-up.module';
import { MemberComponent } from './pages/member/member.component';
@NgModule({
  declarations: [
    HomeComponent,
    OauthlinkComponent,
    MemberComponent,
  ],
  imports: [CommonModule, PublicRoutingModule, SignInModule, SignUpModule],
})
export class PublicModule {}
