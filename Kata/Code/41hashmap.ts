// import { throws } from "assert";
// import { access } from "fs";
// import { add } from "lodash";

function solution(queryType: string[], queries: number[][]): number {
  let getSums: number = 0;
  const hashmap: HashMap = new HashMap();

  for (let i = 0; i < queryType.length; i++) {
      switch(queryType[i]) {
          case 'insert':
              hashmap.insert(queries[i]);
              break;
          case 'addToValue':
              hashmap.addToValue(queries[i]);
              break;
          case 'addToKey': 
              hashmap.addToKey(queries[i]);
              break;
          case 'get':
              getSums += hashmap.getValue(queries[i]);
              break;
          default:
              console.log(hashmap.map);
      }
  }
  
  return getSums;
}

class HashMap {
  public _map: Record<string, number>;

  constructor() {
      this._map = {};
  }
  
  get map(): Record<string, number> {
      return this._map;
  }
  
  insert(pair: number[]): HashMap {
      if (pair.length !== 2) throw new Error('Input must be a [number, number]');
      const key = pair[0];
      const val = pair[1];
      
      this._map[String(key)] = val;
      return this;
  }
  
  addToValue(additive: number[]): HashMap {
      if (additive.length !== 1) throw new Error('Input must be a [number]');
  
      for (const key of Object.keys(this._map)) {
          this._map = {...this._map, [key]: this._map[key] + additive[0]};
      }

      return this;
  }
  
  addToKey(additive: number[]): HashMap {
      if (additive.length !== 1) throw new Error('Input must be a [number]');
      
      this._map = Object.keys(this._map).reduce((acc, key, _i, _arr) => {
          acc[String(Number(key) + additive[0])] = this._map[key];
          return acc;
      }, {} as Record<number, number>)
      
      return this;
  }
  
  getValue(key: number[]): number {
      return this._map[String(key[0])];
  }
}


const queryType = ["insert", 
 "insert", 
 "addToValue", 
 "addToKey", 
 "get"];

const query =[
 [1,2], 
 [2,3], 
 [2], 
 [1], 
 [3]
]
console.log(solution(queryType, query));

