export interface Books {
  title: string;
  author_name: string;
  first_publish_year: number;
  key: string;
  authors: authors[];
}
interface authors {
  name: string;
}

