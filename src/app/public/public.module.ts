import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth/auth.module';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    AuthModule,
    NotFoundModule
  ]
})
export class PublicModule { }
