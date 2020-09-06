import { AxiosResponse } from 'axios'
import { Films } from '@/domain/Film/Films'
import { IFilmRepository } from '@/domain/Film/IFilmRepository'
import axios from '../axiosConfig'

export class AxiosFilmRepository implements IFilmRepository {
  async getAll(): Promise<Films> {
    const res: AxiosResponse<Films> = await axios.get<Films>('/films/')
    return res.data
  }
}
