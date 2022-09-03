import { Matter } from "./matter.model";

export interface MattersState{
  loading: boolean;
  page: number;
  perPage: number;
  totalItems:number;
  items: ReadonlyArray<Matter>
  newMatter?: null | Matter,
  currentMatter?: null | Matter,
}
