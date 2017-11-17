import * as mutations from './mutations'

export const someAction = ({commit}, params) => {
  commit(mutations.SOME_MUTATION, {
    id: params.id
  })
}
