export interface FirstRequest {
  title: string;
  id: number;
  description: string;
}

export interface SecondRequest {
  id: number;
  qtyRelease: number;
  releaseDate: string;
}

export interface InputData extends FirstRequest, SecondRequest{}


