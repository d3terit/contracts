import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
@Injectable({
  providedIn: 'root',
})
export class ControlService {
  private client = new PocketBase('http://localhost:8090');
  constructor() {}

  async getMatter(id: string, userId: string) {
    return await this.client.Records.getList('matters', 1, 1, {
      filter: `id = "${id}" && creator = "${userId}"`,
    });
  }

  async getMatters(
    page: number,
    perPage: number,
    userId: string,
    sort: string
  ) {
    return await this.client.Records.getList('matters', page, perPage, {
      filter: `creator = "${userId}"`,
      sort,
    });
  }

  async createMatter(
    name: string,
    intensity: JSON,
    hidden: boolean,
    creator: string
  ) {
    return await this.client.Records.create('matters', {
      name,
      intensity,
      hidden,
      creator,
    });
  }
}
