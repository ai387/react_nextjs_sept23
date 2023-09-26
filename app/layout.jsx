import '@styles/global.css';

export const metadata = {
    title: "Promptia",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html Lang='en'>
        <body>
            <div className="main">
                <div className='gradient'/> {/* changing background */}
            </div>

            {/* main part of app */}
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout