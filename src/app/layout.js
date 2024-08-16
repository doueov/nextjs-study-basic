import "@/app/globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>Header</header>
        <hr />
        <main>{children}</main>
        <hr />
        <footer>Footer</footer>
      </body>
    </html>
  )
}