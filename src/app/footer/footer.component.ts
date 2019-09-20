import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menus/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  menus: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    let parentMenus: any[] = [];

    // call menu service, getData and make logic.
    this.menuService.getAll().subscribe((menus: any[]) => {
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].ParentId === 0) {
          let parentMenuObject = {
            id: menus[i].TitleId,
            titleName: menus[i].TitleName,
            slug: menus[i].Slug,
            priority: menus[i].Priority
          };
          parentMenus.push(parentMenuObject);
        }
      }
      // Log parent menu
      // console.log('Parent Menu ...');
      // console.log(parentMenus);

      for (let i = 0; i < parentMenus.length; i++) {
        let subMenus: any[] = [];
        for (let j = 0; j < menus.length; j++) {
          if (parentMenus[i].id === menus[j].ParentId) {
            // console.log(parentMenus[i].titleName + '......');

            let singleChildObject = {
              id: menus[j].TitleId,
              titleName: menus[j].TitleName,
              slug: menus[j].Slug
            };
            subMenus.push(singleChildObject);

            // console.log('...' + menus[j].TitleName);
          }
        }

        parentMenus[i]['children'] = subMenus;
      }

      // console.log(parentMenus);
      this.menus = parentMenus;
      // console.log('This is in footer');
      // console.log(this.menus);
    });
  }
}
