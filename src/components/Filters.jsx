import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { choose, sortBy, handleInput, sortBrandsBy } from '../features/filterSlice'

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


// ------------------------------------------------------------ component ------------------------------------------------------------
export default function Filters() {

  // -------------------- filters logic --------------------
  const choosenFilter = useSelector(state => state.filterReducer.choosenFilter)
  const dispatch = useDispatch()

  const filters = [
    { key: 0, id: 'asc', title: '- по возрастанию цены' },
    { key: 1, id: 'desc', title: '- по убыванию цены' },
    { key: 2, id: 'price', title: '- по времени в пути' },
  ]

  const filtersComponents = filters.map(el => (
    <SortAreaVariant key={el.key}>
      <RoundCheckBox onClick={() => dispatch(choose(el.id))}>
        <RoundCheckBoxActive isActive={choosenFilter[el.id]} />
      </RoundCheckBox>
      <SortAreaVariantTitle>{el.title}</SortAreaVariantTitle>
    </SortAreaVariant>
  ))

  // -------------------- sort logic --------------------
  const sort = useSelector(state => state.filterReducer.sort)
  const sorts = [
    { key: 0, id: 'singleTransfer', title: '- 1 пересадка' },
    { key: 1, id: 'noTransfer', title: '- без пересадок' },
  ]

  const sortComponents = sorts.map(el => (
    <SortAreaVariant key={el.key}>
      <SquareCheckBox onClick={() => dispatch(sortBy(el.id))}>
        <SquareCheckBoxActive isActive={sort[el.id]} />
      </SquareCheckBox>
      <SortAreaVariantTitle>{el.title}</SortAreaVariantTitle>
    </SortAreaVariant>
  ))

  // -------------------- price logic --------------------
  const [price, setPrice] = useState({
    from: 0,
    to: 0,
  })

  function handleInputChange(e) {
    setPrice({ [e.target.name]: e.target.value })
  }

  // -------------------- brand logic --------------------
  const brand = useSelector(state => state.filterReducer.brand)
  const brands = [
    { key: 0, id: 'polishAirlines', title: '- LOT Polish Airlines' },
    { key: 1, id: 'aeroflotAirlines', title: '- Аэрофлот' },
  ]

  const brandComponents = brands.map(el => (
    <SortAreaVariant key={el.key}>
      <SquareCheckBox onClick={() => dispatch(sortBrandsBy(el.id))}>
        <SquareCheckBoxActive isActive={brand[el.id]} />
      </SquareCheckBox>
      <SortAreaVariantTitle>{el.title}</SortAreaVariantTitle>
    </SortAreaVariant>
  ))

  // ------------------------------------------------------------ return ------------------------------------------------------------
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
      {/* Price inputs */}
      <SortArea>
        <SortAreaTitle>Цена</SortAreaTitle>
        <SortAreaVariant>
          <span>От</span>
          <input type='text' name='from' placeholder='0' onChange={(e) => dispatch(handleInput({name: e.target.name, value: e.target.value}))} />
        </SortAreaVariant>
        <SortAreaVariant>
          <span>До</span>
          <input type='text' name='to' placeholder='100 000' onChange={(e) => dispatch(handleInput({name: e.target.name, value: e.target.value}))} />
        </SortAreaVariant>
      </SortArea>
      {/* filter brands */}
      <SortArea>
        <SortAreaTitle>Авиакомпании</SortAreaTitle>
        <SortAreaVariants>
          {brandComponents}
        </SortAreaVariants>
      </SortArea>
    </Container>
  )
}
