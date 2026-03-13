import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CustomTitleStrategy extends TitleStrategy {
    constructor(private readonly title: Title, private readonly meta: Meta) {
        super();
    }

    override updateTitle(routerState: RouterStateSnapshot) {
        const title = this.buildTitle(routerState);
        if (title !== undefined) {
            this.title.setTitle(title);
        }

        // Extract description from route data if available
        let child = routerState.root;
        while (child.firstChild) {
            child = child.firstChild;
        }

        const description = child.data['description'];
        if (description) {
            this.meta.updateTag({ name: 'description', content: description });
        }
    }
}
