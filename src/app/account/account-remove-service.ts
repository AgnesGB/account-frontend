import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { BeanRemoveService } from '../bean/bean-remove-service';

export class AccountRemoveService extends BeanRemoveService {
  constructor(http: HttpClient, type: string) {
    super(http, `${type} Account`, `${type.toLowerCase()}Accounts`);
  }
}

export const CREDIT_ACCOUNT_REMOVE_SERVICE = new InjectionToken<AccountRemoveService>(
  'CreditAccountRemoveService',
);
export const DEBIT_ACCOUNT_REMOVE_SERVICE = new InjectionToken<AccountRemoveService>(
  'DebitAccountRemoveService',
);
export const EQUITY_ACCOUNT_REMOVE_SERVICE = new InjectionToken<AccountRemoveService>(
  'EquityAccountRemoveService',
);
