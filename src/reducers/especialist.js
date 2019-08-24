const INITIAL_STATE = {
  nome: "",
  especialidade: "",
  dia: "",
  horas: ""
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
    case "SET_CONSULTATION_DATE":
      return { ...state, dia: action.payload };
    
      case "SET_CONSULTATION_HOURS":
        return { ...state, horas: action.payload };

    case "RESET_ESPECIALIST":
      return INITIAL_STATE;

    default:
      return state;
  }
};
