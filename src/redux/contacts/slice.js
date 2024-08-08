import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';
import { logOut } from '../auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
    isModalOpen: false,
  },
  reducers: {
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    setActiveContactId(state, action) {
      state.activeContactId = action.payload;
    },
    clearActiveContactId(state) {
      state.activeContactId = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(editContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items
          .findIndex(contact => contact.id === action.payload.id)
          .addCase(editContact.rejected, state => {
            state.isLoading = false;
            state.error = true;
          });
        state.items[index] = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
        state.error = false;
      });
  },
});

export const { toggleModal, setActiveContactId, clearActiveContactId } =
  contactsSlice.actions;

export default contactsSlice.reducer;
