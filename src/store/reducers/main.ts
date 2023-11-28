import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

// types
import { UserProfile } from "types/users";

interface MainState {
  isSidebarOpen: boolean;
  isPageModalOpen: boolean;
  contentLimit: number;
  tabs: Tab[];
  userProfile: UserProfile;
  snackbarMessage: string | null;
}

const initialState: MainState = {
  isPageModalOpen: false,
  contentLimit: 10,
  isSidebarOpen: false,
  tabs: [] as Tab[],
  userProfile: {} as UserProfile,
  snackbarMessage: null,
};

const MainSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSidebar: (state: MainState) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    togglePageModal: (state: MainState) => {
      state.isPageModalOpen = !state.isPageModalOpen;
    },
    setTabs: (state: MainState, action: PayloadAction<Tab[]>) => {
      state.tabs = action.payload;
    },
    setUserProfile: (state: MainState, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },

    setSnackbarMessage: (state: MainState, action: PayloadAction<string>) => {
      state.snackbarMessage = action.payload;
    },

    closeSnackbar: (state: MainState) => {
      state.snackbarMessage = null;
    },

    setContentLimit: (state: MainState, action: PayloadAction<number>) => {
      state.contentLimit = action.payload;
    },
  },
});

export const isSidebarOpen = (state: RootState) => state.layout.isSidebarOpen;

export const userProfile = (state: RootState) => state.layout.userProfile;

export const snackbarMessage = (state: RootState) =>
  state.layout.snackbarMessage;

export const isPageModalOpen = (state: RootState) =>
  state.layout.isPageModalOpen;
export const drawerTabs = (state: RootState) => state.layout.tabs;

export const {
  toggleSidebar,
  setTabs,
  togglePageModal,
  setUserProfile,
  closeSnackbar,
  setSnackbarMessage,
  setContentLimit,
} = MainSlice.actions;

export const reducer = MainSlice.reducer;
