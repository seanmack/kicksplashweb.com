import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Success() {
  return (
    <>
      <Header />
      <main>
        <div className="mx-auto min-h-screen max-w-7xl py-10 text-center sm:px-6 lg:px-8">
          <h1>
            Form successfully submitted!{' '}
            <a className="text-blue-600" href="/">
              Go back.
            </a>
          </h1>
        </div>
      </main>
      <Footer />
    </>
  )
}
