import { atomWithQuery } from 'jotai-tanstack-query'
import request from '~/utils/request'

export const repoDataAtom = atomWithQuery(() => ({
  queryKey: ['repoData'],
  queryFn: () => request.get('/repos/TanStack/query').then((res) => res.data),
}))
