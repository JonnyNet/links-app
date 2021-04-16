import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Link } from 'src/app/shared/models/link';
import { LinkState } from 'src/app/shared/models/link-state';
import { Store } from 'src/app/shared/store/store';
import { LinkService } from './link.service';


@Injectable({
  providedIn: 'root'
})
export class LinkStoreService extends Store<LinkState>{

  readonly lisks$ = this.state$.pipe(map(x => x.links));

  constructor(private linkService: LinkService) {
    super({
      error: null,
      isLoading: false,
      links: [],
    });
  }

  getLinks(): void {
    if (this.state.links.length !== 0) { this.setState({ ...this.state }); }
    this.linkService.findAll().subscribe((res) => {
      this.setState({
        ...this.state,
        links: res,
      });
    });
  }

  deleteLink(id: string): void {
    this.linkService.deleteLink(id).subscribe(res => {
      this.setState({
        ...this.state,
        links: this.state.links.filter(x => x.id !== id),
      });
    });
  }

  saveLink(link: Link): void {
    this.linkService.saveLink(link).subscribe((res: Link) => {
      this.setState({
        ...this.state,
        links: [...this.state.links, res],
      });
    });
  }
}
