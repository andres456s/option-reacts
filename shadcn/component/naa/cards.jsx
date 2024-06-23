/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KJMMcJSLMKL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Cards() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform-gpu hover:-translate-y-2 hover:shadow-xl">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View product</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Product 1"
              width={400}
              height={300}
              className="object-cover w-full h-64 rounded-t-lg"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Minimalist Desk Lamp</h3>
              <p className="text-sm text-muted-foreground">
                A sleek and modern desk lamp to brighten up your workspace.
              </p>
              <Button size="sm" className="mt-4">
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform-gpu hover:-translate-y-2 hover:shadow-xl">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View product</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Product 2"
              width={400}
              height={300}
              className="object-cover w-full h-64 rounded-t-lg"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Wireless Headphones</h3>
              <p className="text-sm text-muted-foreground">
                Experience immersive audio with these comfortable wireless headphones.
              </p>
              <Button size="sm" className="mt-4">
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform-gpu hover:-translate-y-2 hover:shadow-xl">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View product</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Product 3"
              width={400}
              height={300}
              className="object-cover w-full h-64 rounded-t-lg"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Leather Backpack</h3>
              <p className="text-sm text-muted-foreground">A durable and stylish backpack for everyday use.</p>
              <Button size="sm" className="mt-4">
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform-gpu hover:-translate-y-2 hover:shadow-xl">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View product</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Product 4"
              width={400}
              height={300}
              className="object-cover w-full h-64 rounded-t-lg"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Ceramic Mug</h3>
              <p className="text-sm text-muted-foreground">
                A stylish and durable ceramic mug for your daily coffee or tea.
              </p>
              <Button size="sm" className="mt-4">
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform-gpu hover:-translate-y-2 hover:shadow-xl">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View product</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Product 5"
              width={400}
              height={300}
              className="object-cover w-full h-64 rounded-t-lg"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Wooden Desk Organizer</h3>
              <p className="text-sm text-muted-foreground">
                Keep your desk tidy and organized with this stylish wooden organizer.
              </p>
              <Button size="sm" className="mt-4">
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform-gpu hover:-translate-y-2 hover:shadow-xl">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View product</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Product 6"
              width={400}
              height={300}
              className="object-cover w-full h-64 rounded-t-lg"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Minimalist Wall Clock</h3>
              <p className="text-sm text-muted-foreground">A modern and elegant wall clock to complement any decor.</p>
              <Button size="sm" className="mt-4">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}