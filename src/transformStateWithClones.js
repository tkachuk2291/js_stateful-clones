'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */

function transformStateWithClones(state, actions) {
  let resultList = [];
  const stateClone = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(stateClone, action.extraData);
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete stateClone[key];
        }
        break;
      case 'clear':
        for (const key in stateClone) {
          delete stateClone[key];
        }
        break;
      default:
        break;
    }
    resultList.push({ ...stateClone });
  }
  return resultList;
}

module.exports = transformStateWithClones;
