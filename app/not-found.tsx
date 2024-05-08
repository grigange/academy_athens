import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-svh w-full bg-white'>
      <h1>Η Σελίδα δεν βρέθηκε</h1>
      <Link href="/" className='text-blue-accent'>Επιστροφή στην Αρχική Σελίδα</Link>
    </div>
  )
}