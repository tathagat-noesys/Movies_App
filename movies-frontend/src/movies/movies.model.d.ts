export interface moviesDTO {
  id: number;
  title: string;
  poster: string;
}

export interface LandingPageDTO {
  inTheaters?: moviesDTO[];
  upcompingReleases?: moviesDTO[];
}

export interface movieCreationDTO {
  title: string;
  inTheaters: boolean;
  upcompingReleases: boolean;
  trailer: string;
  releaseDate?: Date;
  poster?: File;
  posterUrl?: string;
}
