import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatRadioChange } from '@angular/material/radio';


const MaterialComponents=[ MatButtonModule,
  MatDividerModule,
  MatGridListModule,
  MatCheckboxModule,
  MatDialogModule,
  MatTableModule,
  MatTabsModule,
  MatRadioModule,
  // MatRadioChange
]


@NgModule({
 
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
