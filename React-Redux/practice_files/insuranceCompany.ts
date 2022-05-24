import { legacy_createStore as createStore, combineReducers } from 'redux';

// people dropping of a form (action creators)
interface Action<P> {
  type: string;
  payload?: P;
}

interface Form {
  name: string
}

interface Policy extends Form {
  deductible: number;
  deposit: number;
}


interface Claim extends Form {
  claimAmount: number;
}

interface Account {
  funds: number;
}

type ActionCreator<T> = (params: T )=> Action<T>

const createPolicy = ({ name, deductible, deposit }: Policy): Action<Policy> => {
  return {
    type: 'policies/addPolicy',
    payload: { name, deductible, deposit }
  };
};

const deletePolicy = (policy: Policy): Action<Policy> => {
  return {
    type: 'policies/deletePolicy',
    payload: policy
  };
};

const createClaim = ({ name, claimAmount }: Claim): Action<Claim> => {
  return {
    type: 'claims/createClaim',
    payload: { name, claimAmount }
  };
};

const payoutClaim = (claim: Claim): Action<Claim> => {
  return {
    type: 'accounting/payoutClaim',
    payload: {
      name: claim.name,
      claimAmount: claim.claimAmount,
    }
  };
};

const receivePolicyDeposit = ({name, deductible, deposit}: Policy): Action<Policy> => {
  return {
    type: 'accounting/receiveDeposit',
    payload: {
      name,
      deductible,
      deposit
    }
  };
};

//reducers aka different departments in the company
interface insuranceState {
  claimsHistory: Claim[];
  policies: Policy[];
  funds: number; //all the money we have
}

const initialState: insuranceState = {
  claimsHistory: [],
  policies: [],
  funds: 1000000
};

const claimsReducer = (initialClaims: Claim[] = [], action: Action<Claim>): Claim[] => {
  switch(action.type) {
    case 'claims/createClaim':
      return [...initialClaims, action.payload];
    default: 
      return initialClaims;
  }
};

const accountingReducer = (funds: number = initialState.funds, { payload }: Action<Claim | Policy> ): number => {
  if ('claimAmount' in payload ) {
    return funds - payload.claimAmount;
  } else if ('deposit' in payload) {
    return funds + payload.deposit
  }
  return funds;
}

const policiesReducer = (policies: Policy[] = initialState.policies, action: Action<Policy>): Policy[] => {
  switch(action.type) {
    case 'policies/addPolicy':
      return [...policies, action.payload];
    case 'policies/deletePolicy':
      return policies.filter(({name}) => action.payload.name !== name );
    default:
      return policies;
  }
};

const ourDepartments = combineReducers({
  accounting: accountingReducer,
  claims: claimsReducer,
  policies: policiesReducer
});

export const store = createStore(ourDepartments);

store.dispatch(createPolicy({name: 'Andrew', deductible: 500, deposit: 5}));
store.dispatch(createPolicy({name: 'Jimmy', deductible: 300, deposit: 250}));

console.log(store.getState());