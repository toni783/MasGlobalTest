import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentConst } from 'src/environments/environment.const';
import { FetchUsersModel } from 'src/models/home.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  fetchUsers(payload: FetchUsersModel) {
    return this.httpClient.get(EnvironmentConst.ENDPOINT + `?page=${payload.page}&results=${payload.results}`);
  }
}
