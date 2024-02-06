import { FilterType } from '../../features/loanData/types';

export function getValueFromFilters<T>(
  filters: any[],
  propertyName: string
): T | undefined {
  const filter = filters.find((filter) => filter.hasOwnProperty(propertyName));
  return filter ? (filter[propertyName] as T) : undefined;
}
