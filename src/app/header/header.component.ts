import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  eleMenuDropdown: Element;
  statusMenu: boolean = false;

  // Click outside dropdown to remove "show"
  @HostListener('document:click', ['$event']) toggleDown() {
    if (this.statusMenu === true) {
      this.eleMenuDropdown.classList.remove('show');
      this.statusMenu = false;
    }
  }

  constructor() {}

  ngOnInit(): void {}

  // Toggle Dropdown
  onDropdown(e, eleRef: Element) {
    e.stopPropagation();
    eleRef.classList.toggle('show');
    this.eleMenuDropdown = eleRef;
    this.statusMenu = !this.statusMenu;
  }
}
