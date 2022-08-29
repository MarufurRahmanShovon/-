import React from 'react'

import styled from 'styled-components'
import { categoriesw } from '../Data'
import CategoryItemW from './CategoryItem'
import { Mobile } from '../Responsive'

const Container = styled.div`
           height:80vh;
          display: flex;
          padding:20px;
          justify-content: center;
          ${Mobile({ padding: "0px", flexDirection: "column" })}
`


const CatagoriesW = () => {
    return (
        <Container>
            {categoriesw.map((item) => (
                //<Title>{item.title}</Title>
                <CategoryItemW item={item} key={item.id} />

                //{console.log(h)}
            ))}
        </Container>
    )
}

export default CatagoriesW