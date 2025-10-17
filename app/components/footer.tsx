// footer.tsx
export default function Footer() {
    return (
        <footer className="bg-background text-foreground border-t border-foreground py-4 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Evan Xu. Built with Next.js and Tailwind CSS.</p>
            </div>
        </footer>
    )
}