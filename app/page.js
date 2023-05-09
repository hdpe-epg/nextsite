import { createClient } from '@/prismicio'
import { PrismicRichText, SliceZone } from '@prismicio/react'
import { components } from '@/slices'

export default async function Home() {
  const client = createClient()
  const document = await client.getSingle('homepage')
  console.log('&&&&&&&&&& ', document)
  return (
    <div className="grid grid-cols-1 gap-y-4 md:gap-y-0">
      {document.data?.slices.length > 0 && (
        <SliceZone slices={document.data.slices} components={components} />
      )}
    </div>
  )
}
