import React from 'react'

const ItemPortfolio = props => {
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src={props.conteudo.imagem} alt='Paris' width='150' height='150' />
                <p><strong>{props.conteudo.titulo}</strong></p>
                <p>{props.conteudo.descricao}</p>

            </div>
        </div>

    )
}

export default ItemPortfolio