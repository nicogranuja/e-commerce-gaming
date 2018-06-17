

export function xboxOneSelected(selectedConsole) {
    return (dispatch, getState) => {
        dispatch({
            type: XBOX_SELECTED,
            selectedConsole
        })
    }
}

export function computerSelected(selectedConsole) {
    return (dispatch, getState) => {
        dispatch({
            type: COMPUTER_SELECTED,
            selectedConsole
        })
    }
}

export function PS4SELECTED(selectedConsole) {
    return (dispatch, getState) => {
        dispatch({
            type: PS4_SELECTED,
            selectedConsole
        })
    }
}

export function handHeledSelected(selectedConsole) {
    return (dispatch, getState) => {
        dispatch({
            type: HAND_HELD_SELECTED,
            selectedConsole
        })
    }
}

export function mainPageSelected(selectedConsole) {
    return (dispatch, getState) => {
        dispatch({
            type: MAIN_PAGE_SELECTED,
            selectedConsole
        })
    }
}







export default function mainPageState(mainPageState) {
    return {
        type: 'MAIN_PAGE_ACTION',
        mainPageState
    }
}