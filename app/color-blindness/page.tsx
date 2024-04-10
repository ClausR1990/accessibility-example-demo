import Image from 'next/image'
import TShirtRed from '@/public/tshirt-red.webp'
import TShirtGreen from '@/public/tshirt-green.webp'
import { Star, StarHalf, Heart, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='container flex h-full max-w-screen-lg flex-col items-start justify-center gap-8'>
        <div className='grid grid-cols-1 gap-24 md:grid-cols-2'>
          <div className='space-y-6'>
            <figure className='space-y-3'>
              <Image
                src={TShirtRed}
                className='aspect-square w-full rounded-xl object-cover'
                alt='Red T-Shirt'
              />
              <div className='flex items-center justify-start gap-3'>
                <Image
                  src={TShirtRed}
                  className='aspect-square w-24 rounded-xl border-2 border-primary object-cover'
                  alt='T-Shirt green'
                />
                <Image
                  src={TShirtGreen}
                  className='aspect-square w-24 rounded-xl object-cover'
                  alt='T-Shirt green'
                />
              </div>
            </figure>
          </div>
          <div className='space-y-8'>
            <div className='space-y-3'>
              <h1 className='text-4xl font-bold'>Basic T-Shirts from Next</h1>
              <div className='flex items-center gap-1'>
                <Star className='h-5 w-5 text-yellow-400' />
                <Star className='h-5 w-5 text-yellow-400' />
                <Star className='h-5 w-5 text-yellow-400' />
                <Star className='h-5 w-5 text-yellow-400' />
                <StarHalf className='h-5 w-5 text-yellow-400' />
              </div>
            </div>
            <h2 className='text-5xl font-bold'>£19.99</h2>
            <div className='flex items-center gap-2'>
              <div className='flex h-10 w-10 items-center justify-center rounded-md bg-red-600 text-white'>
                <Check className='h-5 w-4' />
              </div>
              <div className='h-10 w-10 rounded-md bg-green-600'></div>
            </div>
            <ToggleGroup
              variant='outline'
              type='single'
              className='justify-start'
            >
              <ToggleGroupItem value='XS'>XS</ToggleGroupItem>
              <ToggleGroupItem value='S'>S</ToggleGroupItem>
              <ToggleGroupItem value='M'>M</ToggleGroupItem>
              <ToggleGroupItem value='L'>L</ToggleGroupItem>
              <ToggleGroupItem value='XL'>XL</ToggleGroupItem>
              <ToggleGroupItem value='XXL'>XXL</ToggleGroupItem>
            </ToggleGroup>
            <div className='flex items-center gap-3'>
              <Button variant='default' className='w-full'>
                Add to Cart
              </Button>
              <Button variant='outline' size='icon'>
                <Heart className='h-5 w-5' />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Tabs defaultValue='details' className='w-full'>
            <TabsList>
              <TabsTrigger value='details'>Details</TabsTrigger>
              <TabsTrigger value='reviews'>Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value='details'>
              <p className='text-foreground/50'>
                Introducing our classic single-colored t-shirt, the epitome of
                simplicity and style. Crafted from premium cotton, this t-shirt
                offers unbeatable comfort and durability for everyday wear. Its
                timeless design makes it versatile for any occasion, whether
                you&apos;re lounging at home or hitting the streets. With a
                range of vibrant colors to choose from, you can effortlessly
                elevate your wardrobe with this essential piece. Experience
                unmatched quality and effortless style with our basic
                single-colored t-shirt.
              </p>
            </TabsContent>
            <TabsContent value='reviews'></TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
