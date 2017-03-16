import { inject } from 'aurelia-dependency-injection';
import { bindable, containerless } from 'aurelia-templating';
import { Grid } from '../grid';
import gridColumnBase from './grid-column-base';

@containerless
@inject(Grid)
export class GridColumnTemplate {
  @bindable heading;
  @bindable filterable;
  @bindable property;
  @bindable sortable;
  @bindable class;

  constructor(grid) {
    this.grid = grid;
    this.row = {};
    Object.assign(this, gridColumnBase);
  }

  bind(bindingContext) {
    this.bindToContext(bindingContext);
  }

  loadCssFrameworkSettings() {
  }
}
