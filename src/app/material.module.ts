import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule, MatToolbarModule,
    MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatBadgeModule, MatLineModule} from '@angular/material';

const matrialModuleArray = [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatLineModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatBadgeModule
];

@NgModule({
    imports: [...matrialModuleArray],
    exports: [...matrialModuleArray]
})

export class MaterialModule {
    
}