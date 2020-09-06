import axiosBase, { AxiosInstance } from 'axios'
import humps from 'humps'

const axios: AxiosInstance = axiosBase.create({
  baseURL: process.env.NUXT_ENV_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  transformResponse: ([] as any).concat(
    axiosBase.defaults.transformResponse,
    (data: any) => humps.camelizeKeys(data) // APIレスポンス内のJSON keyをsnake_case => camelCaseへ変換
  ),
  transformRequest: ([] as any).concat((data: any) => {
    return humps.decamelizeKeys(data) // APIリクエスト内のJSON keyをcamelCase => snake_caseへ変換。
  }, axiosBase.defaults.transformRequest),
})

export default axios
