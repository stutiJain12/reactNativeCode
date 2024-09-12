// define type
export const HOLD_RX_DATA = 'RX_DATA';
export const GET_STAFF_MEMBERS = 'get_staff_members';
export const ADD_STAFF_MEMBERS = 'add_staff_members';
export const UPDATE_STAFF_MEMBERS = 'udpate_staff_members';
export const DELETE_STAFF_MEMBERS = 'delete_staff_members';
export const UPDATE_BUSINESS_SETUP_STEPS = 'update_business_setup_steps';

// dispatch actions
export const updateRXData = (data: any) => {
    return (dispatch: any) => {
        dispatch({
            type: HOLD_RX_DATA,
            rxData: data
        })
    }
};

// dispatch actions
export const updateBusinessSetupSteps = (data: any) => {
    return (dispatch: any) => {
        dispatch({
            type: UPDATE_BUSINESS_SETUP_STEPS,
            steps: data
        })
    }
};

export const setAllStaffMembersList = (data: any) => {
    return {
        type: GET_STAFF_MEMBERS,
        staffMembers: data

    };
};
export const addStaffMemberToTheList = (data: any) => {
    return {
        type: ADD_STAFF_MEMBERS,
        newStaffMembers: data
    };
};
export const updateStaffMemberList = (data: any) => {
    return {
        type: UPDATE_STAFF_MEMBERS,
        data: data
    };
};
export const deleteStaffMemberList = (data: any) => {
    return {
        type: DELETE_STAFF_MEMBERS,
        data: data
    };
};