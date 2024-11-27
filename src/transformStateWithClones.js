'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */

function transformStateWithClones(state, actions) {
  let ResultList = [];
  const stateClone = { ...state };
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(stateClone, action.extraData);
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete stateClone[key];
      }
    } else if (action.type === 'clear') {
      for (const key in  stateClone) {
        delete stateClone[key]
      }
    }
    ResultList.push({ ...stateClone });
  }
  return ResultList;
}




module.exports = transformStateWithClones;



