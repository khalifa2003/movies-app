export interface IMovie {
  id: number;
  backdrop_path: string;
  genre_ids: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
}
