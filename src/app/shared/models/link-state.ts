import { Link } from './link';

export interface LinkState {
    links: Link[];
    error: string | null;
}
