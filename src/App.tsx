import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import CategoryView from "./pages/CategoryView"

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    const currentPath = `${location.pathname}${location.search}${location.hash}`
    const savedExternalPath = sessionStorage.getItem("externalReturnPath")
    const savedExternalScrollY = sessionStorage.getItem("externalReturnScrollY")

    if (savedExternalPath === currentPath && savedExternalScrollY) {
      window.scrollTo(0, Number(savedExternalScrollY))
      sessionStorage.removeItem("externalReturnPath")
      sessionStorage.removeItem("externalReturnScrollY")
      return
    }

    const navigationState = location.state as {
      restoreHomeScroll?: boolean
    } | null
    const shouldRestoreHomeScroll =
      location.pathname === "/" && navigationState?.restoreHomeScroll

    if (shouldRestoreHomeScroll) {
      const savedScrollY = sessionStorage.getItem("homeScrollY")
      if (savedScrollY) {
        window.scrollTo(0, Number(savedScrollY))
        return
      }
    }

    window.scrollTo(0, 0)
  }, [location.pathname, location.search, location.hash, location.state])

  return null
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:id" element={<CategoryView />} />
          <Route
            path="*"
            element={
              <div className="py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Página não encontrada
                </h2>
                <a href="/" className="text-primary hover:underline">
                  Ir para Home
                </a>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
