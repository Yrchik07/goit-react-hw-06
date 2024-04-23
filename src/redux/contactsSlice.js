import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE,
  reducers: {
  addContact(state, action) {
    state.contacts.items.push(action.payload)
  },
  deleteContact(state, action) {
    state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload)
    // const index = state.contacts.items.findIndex(contact => contact.id === action.payload)
    // state.contacts.items.splice(index, 1)
  },
  // changeFilter (state, action) {
  //   state.filters.name = action.payload
  // },
},
});

export const {addContact, deleteContact
  // , changeFilter
 } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;







// export const createSlice = (state = INITAL_STATE, action) => {
//   switch(action.type) {
//     case 'contacts/add': {
//       return {
//         ...state,
//         contacts: {
//           items: [...state.contacts.items, action.payload],
//         }
//       }
//     }
//     case 'contacts/delete': {
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(contact => contact.id !== action.payload),
//         }
//       }
//     }
//     case 'contacts/filter': {
//       return {
//         ...state,
//         filters: {
//           name: action.payload,
//         },
//       }
//     }
//       default: 
//       return state;
//     }
//   };
  
    
