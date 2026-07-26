import { useState, useMemo } from 'react'
import type { ActionDispatch } from 'react'
import type { CartItem } from '../types/index'
import type { CartActions } from '../reducers/cart-reducer'

type CartFloatingProps = {
    cart: CartItem[]
    dispatch: ActionDispatch<[action: CartActions]>
}

export default function CartFloating({ cart, dispatch }: CartFloatingProps) {
    const [isOpen, setIsOpen] = useState(false)

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])
    const itemCount = useMemo(() => cart.reduce((count, item) => count + item.quantity, 0), [cart])

    const toggleCart = () => setIsOpen(prev => !prev)

    return (
        <div className={`cart-float ${isOpen ? 'cart-float--open' : ''}`}>
            <button
                type="button"
                className="cart-fab"
                onClick={toggleCart}
                aria-label={isOpen ? 'Cerrar carrito' : 'Abrir carrito'}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                {itemCount > 0 && (
                    <span className="cart-fab-badge">{itemCount}</span>
                )}
            </button>

            {isOpen && (
                <div className="cart-overlay" onClick={toggleCart} />
            )}

            <div className="cart-panel">
                <div className="cart-panel-header">
                    <h3 className="cart-panel-title">
                        Carrito
                        {!isEmpty && <span className="cart-panel-count">{itemCount} {itemCount === 1 ? 'item' : 'items'}</span>}
                    </h3>
                    <button
                        type="button"
                        className="cart-panel-close"
                        onClick={toggleCart}
                        aria-label="Cerrar carrito"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                </div>

                <div className="cart-panel-body">
                    {isEmpty ? (
                        <div className="cart-empty">
                            <svg className="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                            </svg>
                            <p>Tu carrito está vacío</p>
                            <p className="cart-empty-hint">Explora nuestra colección y agrega tus guitarras favoritas</p>
                        </div>
                    ) : (
                        <ul className="cart-items">
                            {cart.map(guitar => (
                                <li key={guitar.id} className="cart-item">
                                    <img
                                        src={`/img/${guitar.image}.jpg`}
                                        alt={guitar.name}
                                        className="cart-item-img"
                                    />
                                    <div className="cart-item-info">
                                        <p className="cart-item-name">{guitar.name}</p>
                                        <p className="cart-item-price">${guitar.price}</p>
                                        <div className="cart-item-qty">
                                            <button
                                                type="button"
                                                className="qty-btn"
                                                onClick={() => dispatch({ type: 'decrease-quantity', payload: { id: guitar.id } })}
                                            >-</button>
                                            <span className="qty-value">{guitar.quantity}</span>
                                            <button
                                                type="button"
                                                className="qty-btn"
                                                onClick={() => dispatch({ type: 'increase-quantity', payload: { id: guitar.id } })}
                                            >+</button>
                                        </div>
                                    </div>
                                    <div className="cart-item-subtotal">
                                        <p className="cart-item-sub">${guitar.price * guitar.quantity}</p>
                                        <button
                                            className="cart-item-remove"
                                            type="button"
                                            onClick={() => dispatch({ type: 'remove-from-cart', payload: { id: guitar.id } })}
                                            aria-label={`Eliminar ${guitar.name}`}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {!isEmpty && (
                    <div className="cart-panel-footer">
                        <p className="cart-total">
                            Total <span>${cartTotal}</span>
                        </p>
                        <button
                            className="cart-clear-btn"
                            onClick={() => dispatch({ type: 'clear-cart' })}
                        >
                            Vaciar Carrito
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
