import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white text-center py-6">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="mb-4">
          <Link href="/" className="text-2xl font-bold">
            <img src="/Logos/logo-white.png" alt="Parasya Logo" className="mx-auto mb-2" />
          </Link>
        </div>

        
        <div class="flex justify-center space-x-4 mb-4">
   
   <a href="https://x.com/parasya_in?s=21" 
      class="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
   >
       <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
           <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
       </svg>
   </a>

  
   <a href="https://www.instagram.com/parasya.in?igsh=Y3ZkNWUzNGYxM29q" 
      class="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
   >
       <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
       </svg>
   </a>

  
   <a href="https://www.linkedin.com/company/parasyatechnologies/" 
      class="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
   >
       <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
       </svg>
   </a>

   
   <a href="https://www.facebook.com/share/14iEd6PwQV/?mibextid=wwXIfr" 
      class="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
   >
       <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
       </svg>
   </a>

   
   <a href="https://wa.me/919995498218" 
      class="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
   >
       <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
       </svg>
   </a>

   
   <a href="https://youtube.com/@parasya.?si=cpElaynFajc3RCCG" 
      class="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
   >
       <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
           <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
       </svg>
   </a>
</div>

       
        <div className="mb-4 text-stone-800">
          <p>Need help? / Contact</p>
        </div>

        
        <div className="mb-4">
          <p className="text-white font-bold">ELEVATING YOUR IDENTITY</p>
        </div>

       
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; 2024 PARASYA | <Link href="/" className="hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

