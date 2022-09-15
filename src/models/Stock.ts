export interface Stock {
  id?: string;
  name: string;
  isin?: string;
  assetClassId?: string;
  ticker: string;
  currencyId: number;
  issuerId: string;
  lot?: number;
  assetGroupTypeId: number;
  tenantId?: string;
  exchangeId: string | null;
}
