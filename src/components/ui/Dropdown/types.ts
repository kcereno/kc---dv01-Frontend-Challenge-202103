import {
  HomeOwnershipEnum,
  QuarterEnum,
  TermType,
} from '../../../features/loanData/types';

export type DropdownOptionType =
  | HomeOwnershipEnum
  | QuarterEnum
  | TermType
  | number;

export type DropdownDataType = {
  label: string;
  id: string;
  options: DropdownOptionType[];
  value: DropdownOptionType | undefined;
};
