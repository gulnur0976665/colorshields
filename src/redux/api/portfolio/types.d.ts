namespace PORTFOLIO {
  type portfolioRequest = void;

  type portfolioResponse = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    photos: {
      id: number;
      image: string;
      caption: string | null;
    }[];
  }[];
}
