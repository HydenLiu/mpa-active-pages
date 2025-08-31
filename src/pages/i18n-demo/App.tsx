import { useTranslation } from 'react-i18next'

const App = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className="text-red-500">{t('title')}</div>
      <div>{t('description')}</div>
    </div>
  )
}

export default App
