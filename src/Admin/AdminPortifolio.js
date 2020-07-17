import React, { Component } from 'react'

import config, { storage } from './../firebase-config'

class AdminPortifolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false
        }

        this.gravaPortifolio = this.gravaPortifolio.bind(this)
    }

    gravaPortifolio(e) {
        const itemPortifolio = {
            titulo: this.titulo.value,
            descricao: this.descricao.value,
            imagem: this.imagem
        }
        this.setState({ estaGravando: true })
        const arquivo = itemPortifolio.imagem.files[0]
        const { name, size, type } = arquivo
        console.log(name, size, type)

        const ref = storage.ref(name)
        ref.put(arquivo)
            .then(img => {
                img.ref.getDownloadURL()
                    .then(downloadURL => {
                        //console.log(downloadURL)
                        const novoPortifolio = {
                            titulo: itemPortifolio.titulo,
                            descricao: itemPortifolio.descricao,
                            imagem: downloadURL
                        }
                        config.push('portfolio', {
                            data: novoPortifolio
                        })
                        this.setState({ estaGravando: false })
                    })
            })

        e.preventDefault()
    }

    render() {
        if (this.state.estaGravando) {
            return (
                <div className='container'>
                    <p><span class="glyphicon glyphicon-refresh"></span> Aguarde...</p>
                </div>
            )
        }
        return (
            <div style={{ padding: '120px' }}>
                <h2> Portifolio - Area Administrativa</h2>
                <form onSubmit={this.gravaPortifolio}>
                    <div className="form-group">
                        <label htmlFor="titulo">Endereço de e-mail</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Titulo" ref={(ref) => this.titulo = ref} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea className="form-control" id="descricao" rows="3" ref={(ref) => this.descricao = ref} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">Imagem</label>
                        <input type="file" className="form-control-file" id="imagem" ref={(ref) => this.imagem = ref} />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}

export default AdminPortifolio;