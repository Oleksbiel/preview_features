export interface BaseListMethods<T>{
  onFetchData(): void;
  onPrepareRequest(): T;
}