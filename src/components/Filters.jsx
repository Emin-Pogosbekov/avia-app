import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  padding: 2rem;
`

const SortArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`
const SortAreaTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`
const SortAreaVariants = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .5rem;
`
const SortAreaVariant = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`
const RoundCheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 15px;
  min-height: 15px;
  border-radius: 100%;
  border: 1px solid black;
  :hover {
    cursor: pointer;
  }
`
const RoundCheckBoxActive = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background-color: ${props => props.isActive ? 'black' : 'inherit'};
`
const SquareCheckBox = styled(RoundCheckBox)`
  border-radius: 0px;
`
const SquareCheckBoxActive = styled(RoundCheckBoxActive)`
  border-radius: 0px;
`
const SortAreaVariantTitle = styled.span``



export default function Filters() {

  // -------------------- filters logic --------------------
  const [choosenFilter, setChoosenFilter] = useState({ asc: true, desc: false, price: false })

  const filters = [
    { key: 0, id: 'asc', title: '- по возрастанию цены' },
    { key: 1, id: 'desc', title: '- по убыванию цены' },
    { key: 2, id: 'price', title: '- по времени в пути' },
  ]

  const filtersComponents = filters.map(el => (
    <SortAreaVariant key={el.key}>
      <RoundCheckBox onClick={() => choose(el.id)}>
        <RoundCheckBoxActive isActive={choosenFilter[el.id]} />
      </RoundCheckBox>
      <SortAreaVariantTitle>{el.title}</SortAreaVariantTitle>
    </SortAreaVariant>
  ))

  function choose(element) {
    const newChoosenFilter = choosenFilter
    for (let key in newChoosenFilter) {
      if (key === element) {
        newChoosenFilter[key] = true
      } else {
        newChoosenFilter[key] = false
      }
    }
    setChoosenFilter({ ...newChoosenFilter })
  }

  // -------------------- sort logic --------------------
  const [sort, setSort] = useState({ singleTransfer: false, noTransfer: false })

  const sorts = [
    { key: 0, id: 'singleTransfer', title: '- 1 пересадка' },
    { key: 1, id: 'noTransfer', title: '- без пересадок' },
  ]

  const sortComponents = sorts.map(el => (
    <SortAreaVariant key={el.key}>
      <SquareCheckBox onClick={() => sortBy(el.id)}>
        <SquareCheckBoxActive isActive={sort[el.id]} />
      </SquareCheckBox>
      <SortAreaVariantTitle>{el.title}</SortAreaVariantTitle>
    </SortAreaVariant>
  ))

  function sortBy(element) {
    const newSortObj = sort
    for (let key in newSortObj) {
      if (key === element) {
        newSortObj[key] = newSortObj[key] ? false : true
      }
    }
    setSort({ ...newSortObj })
  }











  return (
    <Container>
      {/* sort by */}
      <SortArea>
        <SortAreaTitle>Сортировать</SortAreaTitle>
        <SortAreaVariants>
          {filtersComponents}
        </SortAreaVariants>
      </SortArea>
      {/* filter by */}
      <SortArea>
        <SortAreaTitle>Фильтровать</SortAreaTitle>
        <SortAreaVariants>
          {sortComponents}
        </SortAreaVariants>
      </SortArea>
      <SortArea>
        <SortAreaTitle>Цена</SortAreaTitle>
        
      </SortArea>
    </Container>
  )
}
