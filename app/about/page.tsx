import Link from 'next/link'

export default async function About() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          WELCOME TO ... </p>
      </div>

      <div className="">
        <p className = "text-6xl font-semibold"> APP NAME</p>
      </div>

      <p className="mb-5 text-1xl font-semibold"> Learn a new language, the smart way.</p>

      {/* <p className="mb-5 text-1xl font-semibold"> Join us to unlock your language potential. Start learning with personalized flashcards.</p> */}

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}> </div>
            <Link href='/login'>Login</Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

          <h2 className={`mb-3 text-2xl font-semibold`}>
            <Link href='/register'>Sign up</Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
      </div>
    </main>
  )
}
