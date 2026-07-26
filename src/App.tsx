import { useReducer, useEffect } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import CartFloating from "./components/CartFloating"
import { CartReducer, initialState } from "./reducers/cart-reducer"

function App() {

 

  const [state, dispatch] = useReducer( CartReducer, initialState)

  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])


  return (
    <>
    <Header />
    
    <CartFloating 
      cart={state.cart}
      dispatch={dispatch}
    />
    
    <main className="container-xl" id="catalogo">
        <h2 className="section-title">Nuestra Colección</h2>
        <p className="section-subtitle">12 guitarras artesanales para cada estilo y personalidad</p>

        <div className="row">
            {state.data.map((guitar) => (
                <Guitar 
                  key={guitar.id}
                  guitar={guitar}
                  dispatch={dispatch}
                />
            ))}
        </div>
    </main>

    <footer className="site-footer">
        <div className="container-xl text-center">
            <p className="footer-brand">GuitarLA</p>
            <p className="footer-copy">
                Diseño por <strong>GusDev</strong> — Todos los derechos reservados &copy; {new Date().getFullYear()}
            </p>
        </div>
    </footer>
    </>
  )
}

export default App
