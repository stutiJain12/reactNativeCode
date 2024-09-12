import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react';
import { RootState } from '../rootReducer';

console.log(" state ==> ");

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        patientDetails:{},
        businessStepsData:{},
        bookingSlotData:{},
        appointmentDetailReducer:{},
        appointmentFirstReducer:{},
        categoryDataReducer:{},
        tempMedicinesDataForSalesOrder: [],
        followUpData:{},
        coordinates:{},
        doctorDetailsDataReducer:{}
    },
    reducers: {
        addStaff(state: any, action: any) {
            state.push(action)
        },
        setPatientDetailReducer: (state: any, { payload }: PayloadAction<any>) => {
            state.patientDetails = payload;
        },
        setBookingSlotData: (state: any, { payload }: PayloadAction<any>) => {
            state.bookingSlotData = payload;
        },
        setAppointmentDetailReducer: (state: any, { payload }: PayloadAction<any>) => {
            state.appointmentDetailReducer = payload;
        },
        setCategoryData: (state: any, { payload }: PayloadAction<any>) => {
            state.categoryDataReducer = payload;
        },
        setAppointmentFirstReducer: (state: any, { payload }: PayloadAction<any>) => {
            state.appointmentFirstReducer = payload;
        },
        setDoctorDetailsDataReducer: (state: any, { payload }: PayloadAction<any>) => {
            state.doctorDetailsDataReducer = payload;
        },
        setBusinessStepsReducer: (state: any, { payload }: PayloadAction<any>) => {
            state.businessStepsData = payload;
        },
        setTempMedicinesListReducer: (state: any, { payload }: PayloadAction<any>) => {
            state.tempMedicinesDataForSalesOrder = payload;
        },
        setFollowUpReducer: (state: any, { payload }: PayloadAction<any>) => {
            state.followUpData = payload;
        },
        setCoordinatesReducer: (state: any, { payload }: PayloadAction<any>) => {
            state.coordinates = payload;
        },
        /*toggleTodo(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        }*/
    }
})

export const { addStaff, setPatientDetailReducer,setBookingSlotData,setFollowUpReducer, setCoordinatesReducer,
    setCategoryData,setAppointmentDetailReducer,setAppointmentFirstReducer,
    setBusinessStepsReducer, setTempMedicinesListReducer,setDoctorDetailsDataReducer } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;

export const getPatientDetailData = (key: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setPatientDetailReducer(key));
}

export const getBookingSlotData = (key: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setBookingSlotData(key));
}

export const getAppointmentDetailData = (key: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setAppointmentDetailReducer(key));
}

export const getCategoryData = (key: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setCategoryData(key));
}

export const getAppointmentFirstData = (key: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setAppointmentFirstReducer(key));
}

export const getDoctorDetailsData = (key: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setDoctorDetailsDataReducer(key));
}

export const getCreateRxData = (key: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setBusinessStepsReducer(key));
}

export const getTempMedicinesList = (key: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setTempMedicinesListReducer(key));
}

export const getFollowUpData = (key: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setFollowUpReducer(key));
}
export const getCoordinatesData = (key: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setCoordinatesReducer(key));
}