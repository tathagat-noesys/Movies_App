export interface moviesDTO {
  id: number;
  title: string;
  poster: string;
}

interface LandingPageDTO {
  inTheaters?: moviesDTO[];
  upcompingReleases?: moviesDTO[];
}
