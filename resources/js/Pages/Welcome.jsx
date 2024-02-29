import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title='Welcome' />
      <div className='min-h-screen bg-gray-100 dark:bg-dots-lighter flex flex-col items-center justify-center dark:bg-gray-900 selection:bg-red-500 selection:text-white'>
        <div className='sm:fixed sm:top-0 sm:right-0 p-6 text-end'>
          {auth.user ? (
            <Link
              href={route('dashboard')}
              className='font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500'
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href={route('login')}
                className='font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500'
              >
                Log in
              </Link>

              <Link
                href={route('register')}
                className='ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500'
              >
                Register
              </Link>
            </>
          )}
        </div>
        <h1 className='text-white'>Hello & Welcome</h1>
      </div>
    </>
  );
}
