export function Footer() {
  return (
    <footer className="bg-purple-200 py-4 mt-10">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <span>© {new Date().getFullYear()}</span>
        <a 
          href="#!"
          className="hover^text-white transition-colors duration-200"
          >
            Коротенко Анастасия
        </a>
      </div>
    </footer>
  )
}