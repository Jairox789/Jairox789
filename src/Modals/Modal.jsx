import React from 'react';
import "./Modal.css"

const Modal = ({ children, estado, cambiarEstado, Escuela, Proyecto }) => {
    return (
        <>
            {estado &&
                <dialog className='Overlay'>
                    <div
                        className='Overlay-Container'
                        onClick={() => cambiarEstado(false)}
                    ></div>
                    <div className='Contenedor-Modal'>
                        <div className='Encabezado'>
                            <h1>{Escuela}{Proyecto}</h1>
                        </div>
                        <button
                            onClick={() => cambiarEstado(false)}
                            className='Boton-Cerrar'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                        {children}
                    </div>
                </dialog>
            }
        </>
    );
}

export { Modal };