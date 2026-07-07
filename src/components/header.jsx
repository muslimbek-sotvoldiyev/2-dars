import { ModeToggle } from "./mode-toggle";

export default function Header() {
    return (
        <>
            {/* Dark mode moslashishi uchun bg-white yoniga dark:bg-slate-900 va matn ranglarini qo'shdik */}
            <header className="w-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-4 px-6 flex items-center justify-between max-w-7xl mx-auto">

                {/* 1. Logo qismi */}
                <div className="text-xl font-bold text-slate-900 dark:text-white">
                    Product
                </div> 

                {/* 2. Menyu qismi (Nav links) */}
                <nav className="hidden md:flex items-center space-x-8 text-slate-600 dark:text-slate-300 font-medium">
                    <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Product</a>
                    <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Customers</a>
                    <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a>
                    <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Resources</a>
                </nav>

                {/* 3. Tugmalar va ModeToggle qismi */}
                <div className="flex items-center space-x-4">
                    <button className="px-5 py-2.5 text-slate-900 dark:text-slate-200 font-semibold border border-gray-300 dark:border-slate-700 rounded-md hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                        Sign In
                    </button>
                    <button className="px-5 py-2.5 bg-teal-700 text-white font-semibold rounded-md hover:bg-teal-800 transition-colors">
                        Sign Up
                    </button>

                    {/* ModeToggle endi tugmalar bilan bir qatorda turadi */}
                    <ModeToggle />
                </div>

            </header>
        </>
    )
}