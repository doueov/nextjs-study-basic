import UseRouterDemoComponent from "@/components/UseRouterDemoComponent"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <UseRouterDemoComponent />
        <main>{children}</main>
      </body>
    </html>
  )
}