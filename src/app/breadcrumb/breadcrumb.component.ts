import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { Breadcrumb } from '../breadcrumb';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { FontService } from '../fonts/services/font.service';
import { Font } from '../fonts/models/font';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

    breadcrumbs: Breadcrumb[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private fontService: FontService
    ) {
        this.breadcrumbs = [];
    }

    ngOnInit() {
        // subscribe to the NavigationEnd event
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .subscribe(route => {
                const root: ActivatedRoute = route.root;
                this.breadcrumbs = this.getBreadcrumbs(root);
            });
    }

    private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
        const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

        // get the child routes
        const children: ActivatedRoute[] = route.children;

        // return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }

        // iterate over each children
        for (const child of children) {
            // verify primary route
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }

            // verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)
                || child.snapshot.data[ROUTE_DATA_BREADCRUMB] === null) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }

            // get the route's URL segment
            const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

            // append route URL to URL
            url += `/${routeURL}`;

            // add breadcrumb
            const breadcrumb: Breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB].label,
                params: child.snapshot.params,
                url: url
            };

            if (child.snapshot.data[ROUTE_DATA_BREADCRUMB].model) {
                this.getObjectProperty(
                    child.snapshot.data[ROUTE_DATA_BREADCRUMB].model,
                    child.snapshot.data[ROUTE_DATA_BREADCRUMB].label,
                    child.snapshot.params
                );
            }

            breadcrumbs.push(breadcrumb);

            // recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
    }

    // This should be refactored
    private getObjectProperty(object: any, property: string, params: any): void {

        switch (object) {
            case Font:
                this.fontService.getFont(+params['id'])
                    .subscribe(
                        font => this.setDynamicLabel(property, font.name)
                    );

                break;
            default:
                return;
        }

        return;
    }

    private setDynamicLabel(label: string, newLabel: string): void {
        for (const breadcrumbId in this.breadcrumbs) {
            if (this.breadcrumbs.hasOwnProperty(breadcrumbId)) {
                if (this.breadcrumbs[breadcrumbId].label === label) {
                    this.breadcrumbs[breadcrumbId].label = newLabel;
                    break;
                }
            }
        }
    }

}
