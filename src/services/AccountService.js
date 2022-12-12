import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from "../utils/Pop.js"
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount(body) {
    const res = await api.put('/account', body)
    AppState.account = res.data
    Pop.toast("Account Updated")
  }
}

export const accountService = new AccountService()
