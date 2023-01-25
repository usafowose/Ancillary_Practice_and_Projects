// have reducers separate for each setting section?
// combine to rootSettingsreducer
// only modify settings slice of state
// export root settings reducer and acttion creators;
// const settingsReducer = (settingsState: someType, action: PayloadAction) => {
  // const nextState = {
    // settings: Settings = {
      // setting1: setting1Reducer(state.setting1, action),
      // setting2: setting2Reducer(state.setting2, action),
    // }
  // }
  // return nextState;
// }

// initially load all settings => initialSettings. THIS IS THE SETTINGS SLICE AND THE ONLY THING THAT WILL BE UPDATED BY REDUCERS
// use Hooks and the like to dispatch actions via action creators in the UI when things happen which trigger the reducers and update the store