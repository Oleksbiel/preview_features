export interface ResponseDTO {
	error: string;
}

export interface ModelResponseDTO<T> extends ResponseDTO {
	data: T;
}

export interface ListResponseDTO<T> extends ResponseDTO {
	data: T[];
  per_page: number;
  page: number;
}