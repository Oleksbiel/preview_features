import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ListResponseDTO, ModelResponseDTO } from '../interfaces';

export interface TestModel{
	name: string;
}


@Injectable()
export class HttpRepositoryService  {

	baseApiPath = '/test';

	protected http = inject(HttpClient);

	user = {
		load: (params: TestModel) => {
			return this.http.post<ListResponseDTO<TestModel>>(
				this.baseApiPath + `AdministrationTag/search`,
				params
			);
		},
		save: (params: TestModel) => {
			return this.http.post<ModelResponseDTO<TestModel>>(
				this.baseApiPath + `AdministrationTag/save`,
				params
			);
		},
		getSingle: (id: number) => {
			return this.http.get<ModelResponseDTO<TestModel>>(
				this.baseApiPath + `AdministrationTag/${id}`
			);
		},
		delete: (ids: number[]) => {
			return this.http.post<ModelResponseDTO<boolean>>(this.baseApiPath + `AdministrationTag/delete`, {
				ids,
			});
		},
	};
}

