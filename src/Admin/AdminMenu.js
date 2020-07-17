import React from 'react'
import Admin from './Admin'
import { Link } from 'react-router-dom'

const AdminMenu = props => {
    return (
        <div className="list-group">
            <Link to="#" className="list-group-item list-group-item-action active">
                Selecione uma opção
            </Link>
            <Link to="admin/portifolio" className="list-group-item list-group-item-action">Portifolio</Link>
        </div>
    )
}

export default AdminMenu;