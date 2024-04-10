import { buttonVariants } from '@/components/ui/button'
import glob from 'fast-glob'
import Link from 'next/link'

export default async function Home() {
  const pages = (await glob('**/page.tsx', { cwd: 'app/' })).map((page) =>
    page.replace('/page.tsx', '').replace('page.tsx', '/')
  )
  return (
    <main className='container py-24'>
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page}>
              <Link className={buttonVariants({ variant: 'link' })} href={page}>
                {page === '/' ? 'HOME' : page.replace('-', ' ').toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}
