import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import apiArtes from '../services/apiArtes'
import { FaSearch } from 'react-icons/fa';

const ObrasArtes = () => {

    const [obras, setObrasArtes] = useState([])

    useEffect(() => {
        apiArtes.get('/artworks?pages').then(resultado => {
            setObrasArtes(resultado.data.data);
        })
    })

    return (
        <>
            <h1>Obras de Arte</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Detalhar</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><FaSearch /></td>
                        <td>Untitled</td>
                        <td>Andy Warhol</td>
                        <td>Prints and Drawings</td>
                    </tr>

                    <tr>
                        <td><FaSearch /></td>
                        <td>Mens/Many</td>
                        <td>Joan Waltemath</td>
                        <td>Prints and Drawings</td>
                    </tr>

                    <tr>
                        <td><FaSearch /></td>
                        <td>Rocket Sam in - "Tis the Season of Giving on Planet X-38"</td>
                        <td>Chris Ware</td>
                        <td>Prints and Drawings</td>
                    </tr>

                    <tr>
                        <td><FaSearch /></td>
                        <td>Rocket Sam in "Tis the Season of Giving on Planet X-38"</td>
                        <td>Chris Ware</td>
                        <td>Prints and Drawings</td>
                    </tr>

                    <tr>
                        <td><FaSearch /></td>
                        <td>Untitled (Bob)</td>
                        <td>Kevin Wolff</td>
                        <td>Prints and Drawings</td>
                    </tr>

                    <tr>
                        <td><FaSearch /></td>
                        <td>Untitled</td>
                        <td>Inez Nathaniel Walker</td>
                        <td>Prints and Drawings</td>
                    </tr>

                    <tr>
                        <td><FaSearch /></td>
                        <td>The Interior of the Pain House on the Pfaueninsel Near Potsdam</td>
                        <td>Carl Blechen</td>
                        <td>Painting and Scupture of Europe</td>
                    </tr>

                    <tr>
                        <td><FaSearch /></td>
                        <td>Anti-Slavery Picnic at Weymounth Landing, Massachusetts</td>
                        <td>Susan Torrey Merritt</td>
                        <td>Prints and Drawings</td>
                    </tr>

                    <tr>
                        <td><FaSearch /></td>
                        <td>The Continence of Scipio</td>
                        <td>Sebastiano Ricci</td>
                        <td>Painting and Scupture of Europe</td>
                    </tr>

                    <tr>
                        <td><FaSearch /></td>
                        <td>The Madonna with hte Seven Founders of the Servite Order </td>
                        <td>Agostino Masucci</td>
                        <td>Painting and Scupture of Europe</td>
                    </tr>

                    <tr>
                        <td><FaSearch /></td>
                        <td>Vlakplaas: 2 June 1999 (drive-by shooting)</td>
                        <td>Jo Ractliffe</td>
                        <td>Photography and Media</td>
                    </tr>

                    <tr>
                        <td><FaSearch /></td>
                        <td>Entrance to Lategan's Truck Inn, the time of Aids, Laingsburg. Western cape. 14 November 2004</td>
                        <td>David Goldblatt</td>
                        <td>Photography and Media</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default ObrasArtes
