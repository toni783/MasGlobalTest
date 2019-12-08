export class FetchUsersModel {
  page: number; // page to be fetched
  results: number; // total number of entries to be fetched

  constructor(page: number, results: number) {
    this.page = page;
    this.results = results;
  }
}
