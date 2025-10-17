// nav.tsx

/*
const navItems = {
    '/': {
        name: 'home'
    },
    '/projects': {
        name: 'projects'
    },
    '/blog': {
        name: 'blog'
    }
}
*/

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-black dark:bg-black dark:text-white">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-8">
                <a href="#">Home</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
            </div>
        </nav>
    )
}