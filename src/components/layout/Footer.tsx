export default function Footer() {
  return (
    <footer className="border-t border-[#27272A] bg-[#0F0F0F] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <a href="#" className="text-xl font-bold tracking-tighter text-white">
            SHANE<span className="text-[#DC143C]">.</span>
          </a>
          <p className="text-[#A1A1AA] text-sm mt-2">
            Aspiring Game & Mobile Developer.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-[#A1A1AA]">
          <p>&copy; {new Date().getFullYear()} Shane Dedil Deuna. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
