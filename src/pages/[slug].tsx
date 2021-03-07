import client from 'graphql/client'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/query'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 1 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))
  // fallback: true , caso o slug não tenha sido mapeado , e tenha uma solicitção para path não mapeado o fallback true , ira mapear o path em realtime
  return { paths, fallback: true }
  console.log(pages)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  //retorna um loading , qq coisa enquanto ta sendo criada
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}
