/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AnalyticsComponent } from './Analytics/analytics.component';

import { ProductComponent } from './Product/Product.component';

import { CustomerComponent } from './Customer/Customer.component';
import { SourceComponent } from './Source/Source.component';
import { LaboratoryComponent } from './Laboratory/Laboratory.component';
import { BloodBankComponent } from './BloodBank/BloodBank.component';

import { MoveProductComponent } from './MoveProduct/MoveProduct.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Customer', component: CustomerComponent },
  { path: 'Source', component: SourceComponent },
  { path: 'Laboratory', component: LaboratoryComponent },
  { path: 'BloodBank', component: BloodBankComponent },
  { path: 'MoveProduct', component: MoveProductComponent },
  { path: 'Analytics', component: AnalyticsComponent },
  //{ path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
