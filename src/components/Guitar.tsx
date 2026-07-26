import { useState, type ActionDispatch } from 'react';
import type { Guitar } from '../types/index'
import type { CartActions } from '../reducers/cart-reducer';

type guitarProps = {
    guitar: Guitar, 
    dispatch: ActionDispatch<[action: CartActions]>;
}

export default function Guitar({guitar, dispatch}: guitarProps) {

    const {  name, image, description, price } = guitar
    const [added, setAdded] = useState(false)

    const handleAddToCart = () => {
        dispatch({type: 'add-to-cart', payload:{item: guitar}})
        setAdded(true)
        setTimeout(() => setAdded(false), 800)
    }

    return (
        <div className="col-md-6 col-lg-4 product-card">
            <div className="product-card-inner">
                <div className="row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src={`/img/${image}.jpg`} alt={`Guitarra ${name}`} loading="lazy" />
                    </div>
                    <div className="col-8">
                        <div className="product-info">
                            <p className="product-name">{name}</p>
                            <p className="product-desc">{description}</p>
                            <p className="product-price">${price}</p>
                            <button 
                                type="button"
                                className="product-add-btn"
                                onClick={handleAddToCart}
                                style={added ? {background: 'var(--color-amber)', color: 'var(--color-dark)'} : undefined}
                            >
                                {added ? 'Agregado ✓' : 'Agregar al Carrito'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
