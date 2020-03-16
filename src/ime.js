
let candidateList = [];
function respOnFilterKeyDown(request, state) {

    let {keyCode, seqNum} = request;
  
    let response = {
      success: true,
      return: true,
      seqNum
    };
  
    if (state['compositionString'] === '' && (
        keyCode === KEYCODE.VK_RETURN || keyCode === KEYCODE.VK_BACK ||
        keyCode === KEYCODE.VK_LEFT || keyCode === KEYCODE.VK_UP ||
        keyCode === KEYCODE.VK_DOWN || keyCode === KEYCODE.VK_RIGHT)) {
      response['return'] = false;
    }
  
    return response;
  }
function reduceOnKeyDown(request,preState){
    
    return preState

}
function respOnKeyDown(request, state) {

    let {keyCode, seqNum} = request;
  
    let response = {
      success: true,
      return: true,
      seqNum
    };
  
    if (state['action'] === 'SHOW_CANDIDATES') {
      if (state['showCandidates']) {
        response['candidateList'] = candidateList;
      }
      response['showCandidates'] = state['showCandidates'];
      return response;
    }
  
    if (state['action'] === 'UPDATE_CANDIDATE') {
      response['candidateCursor'] = state['candidateCursor'];
      return response;
    }
  
    if (state['action'] === 'SELECT_CANDIDATE') {
      response['compositionString'] = state['compositionString'];
      response['showCandidates']    = state['showCandidates'];
      return response;
    }
  
    if (state['action'] === 'UPDATE_STRING') {
      response['compositionString'] = state['compositionString'];
      response['compositionCursor'] = state['compositionCursor'];
      return response;
    }
  
    if (state['action'] === 'COMMIT_STRING') {
      response['commitString']      = state['commitString'];
      response['compositionString'] = state['compositionString'];
      return response;
    }
  
    return response;
  }
function reduceOnCompositionTerminated(request, preState) {
    return Object.assign({}, preState, {
      compositionString: '',
      compositionCursor: 0
    });
  }
export default {
    textReducer(request, preState) {
  
      if (request['method'] === 'init') {
        return Object.assign({}, preState, {
          action: '',
          compositionString: '',
          compositionCursor: 0,
          showCandidates: false,
          candidateCursor: 0
        });
      }
  
      if (request['method'] === 'onKeyDown') {
        return reduceOnKeyDown(request, preState);
      }
  
      if (request['method'] === 'onCompositionTerminated') {
        return reduceOnCompositionTerminated(request, preState);
      }
      return preState;
    },
  
    response(request, state) {
      if (request['method'] === 'filterKeyDown') {
        return respOnFilterKeyDown(request, state);
  
      } else if (request['method'] === 'onKeyDown') {
        return respOnKeyDown(request, state);
      }
      return {success: true, seqNum: request['seqNum']};
    }
  };