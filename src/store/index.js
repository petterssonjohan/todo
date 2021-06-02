import Vuex from 'vuex';
import { ACTION_TYPES } from '../constants/action-types';

export const createStore = () =>
  new Vuex.Store({
    state: {
      todos: []
    },
    /* Med Mutations så modifierar vi state i store.
    /* Mutations bryr sig bara om state't */
    /* Mutation är synkrona */
    mutations: {
      [ACTION_TYPES.create](state, todo) {
        this.state.todos = [...this.state.todos, todo];
      }
    },
    /* Actions hanterar business logik. Kan vara asynkrona så går bra att göra exempevis API anrop här ifrån /*
    /* Actions commmittar Mutations och kan committa fler än 1 Mutation */
    actions: {
      onCreate({ commit }, todo) {
        commit(ACTION_TYPES.create, todo);
      }
    },
    /* Getters används för att kalkylera data baserat på state't. De uppdateras automatiskt om state förändras. */
    getters: {
      visibleTodos(state) {
        return state.todos;
      }
    }
  });
