import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import '@/app/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <PrismicPreview repositoryName={repositoryName}>
      <Component {...pageProps} />
    </PrismicPreview>
  )
}
