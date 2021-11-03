export class PokemonsAPI {
  count: number = 0;
  next: string = '';
  previous: string = '';
  results: [{name: string, url: string}] = [{name:'',url:''}];
}
