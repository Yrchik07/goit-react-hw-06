const INITAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
};

export const createSlice = (state = INITAL_STATE, action) => {
  switch(action.type) {
    case 'contacts/add': {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        }
      }
    }
    case 'contacts/delete': {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(contact => contact.id !== action.payload),
        }
      }
    }
    case 'contacts/filter': {
      return {
        ...state,
        filters: {
          name: action.payload,
        },
      }
    }
      default: 
      return state;
    }
  };
  
    
// const INITIAL_STATE = {
//   contacts: {
//     items: [],
//   },
//   filters: {
//     name: '',
//   },
// };

// export const createSlice = (state = INITIAL_STATE, action) => {
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
//           ...state.filters,
//           name: action.payload,
//         },
//       }
//     }
//     default: 
//       return state;
//   }
// };
