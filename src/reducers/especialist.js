const INITIAL_STATE = {
  nome: "",
  especialidade: "",
  semana: ""
};

export const especialist = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ESPECIALIST_NOME":
      return {
        ...state,
        nome: action.payload
      };
    case "SET_ESPECIALIST_ESPECIALIDADE":
      return {
        ...state,
        especialidade: action.payload
      };
    case "SET_ESPECIALIST_SEMANA":
      return {
        ...state,
        semana: action.payload
      };
      case 'RESET_ESPECIALIST':
          return INITIAL_STATE;
      
      default:
          return state;
  }
};
