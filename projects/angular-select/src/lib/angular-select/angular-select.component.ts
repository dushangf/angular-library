import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sample-lib',
  templateUrl: './angular-select.component.html',
})
export class AngularSelectComponent {
  constructor() {}
  @Input() getData: (page: number, search: string) => Promise<{ value: any; label: string }[]>;
  title = 'angular-select';
  data: any = [];
  currentValue: any = {};
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

  handleItemSelect(e: any) {
    this.currentValue = e.value;
    this.currentLabel = e.label;
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
