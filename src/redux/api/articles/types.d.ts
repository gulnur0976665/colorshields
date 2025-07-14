namespace ARTICLES {
  type articlesResponse = {
    id: number;
    title: string;
    subtitle: string;
    publication_date: string;
    read_time: number;
    summary: string;
    image: string;
  }[];
  type articlesRequest = void;
}
