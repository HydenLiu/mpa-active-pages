import { useAtomValue } from 'jotai'
import { repoDataAtom } from './store'

const App = () => {
  const { isPending, error, data } = useAtomValue(repoDataAtom)

  console.log(
    '%c🤪 ~ file: /Users/hyden/code/hyden_code/active-pages/src/pages/jotai-demo/App.tsx:6 : ',
    'color: #843477',
    error,
  )
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>
      <strong>✨ {data.stargazers_count}</strong>
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}

export default App
