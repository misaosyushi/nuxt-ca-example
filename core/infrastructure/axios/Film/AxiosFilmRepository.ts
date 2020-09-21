import { Films } from '@/core/domain/Film'
import { IFilmRepository } from '@/core/interface/repository/Film'
import { AxiosResponse } from 'axios'
import axios from '../axiosConfig'

export class AxiosFilmRepository implements IFilmRepository {
  async getAll(): Promise<Films> {
    const res: AxiosResponse<Films> = await axios.get<Films>('/films/')
    return res.data
  }
}
