import NavBar from "./_components/navBar";

export default function MarketingLayout({children} : {children : React.ReactNode}) {
    return (
        <div className="h-full">
            <NavBar/>
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
    )
}