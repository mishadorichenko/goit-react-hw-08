import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectIsModalOpen = state => state.contacts.isModalOpen;

export const selectActiveContactId = state => state.contacts.activeContactId;

export const selectContactById = (state, contactId) =>
  state.contacts.items.find(contact => contact.id === contactId);

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, textFilter) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(textFilter.toLowerCase()) ||
        contact.number.includes(textFilter)
    );
  }
);
