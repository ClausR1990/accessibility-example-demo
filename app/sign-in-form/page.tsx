import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import recaptcha from '@/public/recaptcha.webp'
import { WandSparkles } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='container flex h-full max-w-screen-lg flex-col items-start justify-center gap-8 space-y-12'>
        <h1 className='text-4xl font-bold'>
          Example of WCAG 2.2 success criteria and failure
        </h1>
        <div className='grid grid-cols-1 gap-24 md:grid-cols-2'>
          {/** BAD FORM */}
          <form className='space-y-3'>
            <Input type='text' placeholder='email' />
            <Input type='password' placeholder='password' />
            <Image src={recaptcha} alt='' />
            <Button>Sign In</Button>
          </form>
          {/** GOOD FORM */}
          <form>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <div className='flex items-center gap-2'>
                <Input
                  id='email'
                  type='email'
                  placeholder='Your email'
                  autoComplete='email'
                />
                <Button className='gap-2'>
                  <WandSparkles className='h-4 w-4' />
                  Sign In via Email
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
