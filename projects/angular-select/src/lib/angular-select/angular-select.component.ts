import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectOption } from 'dist/angular-select';

@Component({
  selector: 'angular-select',
  templateUrl: './angular-select.component.html',
})
export class AngularSelectComponent {
  constructor() {}
  @Input() getData: (
    page: number,
    search: string
  ) => Promise<{ value: any; label: string }[]>;
  @Output() onChange: EventEmitter<SelectOption> =
    new EventEmitter<SelectOption>();
  title = 'angular-select';
  data: any = [];
  currentLabel: string = '';
  searchValue: string = '';
  listStatus: boolean = false;
  currentPage: number = 1;
  pendingData: boolean = false;

  handleSearch(e: any) {
    this.currentLabel = e.target.value;
    this.searchValue = e.target.value;
    this.currentPage = 1;
    this.getData(this.currentPage, this.searchValue);
  }

  handleItemSelect(e: SelectOption) {
    this.currentLabel = e.label;
    this.onChange.emit(e);
  }

  onScrollEnd() {
    this.currentPage++;
    this.getData(this.currentPage, this.searchValue).then((data) => {
      this.pendingData = false;
      this.data = [...this.data, ...data];
    });
  }

  handleScroll(event: Event) {
    const target = event.target as HTMLElement;
    if (target.scrollTop === target.scrollHeight - target.clientHeight) {
      this.pendingData = true;
      this.onScrollEnd();
    }
  }

  toggleList(status: boolean) {
    this.listStatus = status;
  }

  ngOnInit() {
    this.getData(1, '').then((data) => (this.data = data));
  }
}
