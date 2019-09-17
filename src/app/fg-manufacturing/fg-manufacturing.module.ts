import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FgCreateStyleComponent } from './components/fg-create-style/fg-create-style.component';
import { FgCreateBomComponent } from './components/fg-create-bom/fg-create-bom.component';
import { FgCreateMaterialComponent } from './components/fg-create-material/fg-create-material.component';
import { FgGeneratePOComponent } from './components/fg-generate-po/fg-generate-po.component';
import { FgCreateVendorComponent } from './components/fg-create-vendor/fg-create-vendor.component';
import { FgMaterialInWarehouseComponent } from './components/fg-material-in-warehouse/fg-material-in-warehouse.component';



@NgModule({
  declarations: [FgCreateStyleComponent, FgCreateBomComponent, FgCreateMaterialComponent, FgGeneratePOComponent, FgCreateVendorComponent, FgMaterialInWarehouseComponent],
  imports: [
    CommonModule
  ]
})
export class FgManufacturingModule { }
