import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Balls from './Balls'
import { act } from 'react-dom/test-utils'

import esferas from '../../mocks/esferas.json';
import esferasSuccess from '../../mocks/esferasSuccess.json';
import { profile } from '../../mocks/profile.json';
import profileSuccess from '../../mocks/profileSuccess.json';

it('Should show the modal to validate the 2-star ball', () => {
  const { container, debug, getAllByText, getByText } = render(<Balls balls={esferas.balls} profile={profile} />)
  //primeiro seleciona o button para poder clicá-lo
  
  const buttons = getAllByText('encontrei')
  fireEvent.click(buttons[0])
  //debug()
  expect(getByText('Insira o código da esfera de 2 estrelas:')).toBeTruthy()
})

it('Should show all balls', () => {
  const { debug, getByText, getByTestId } = render(<Balls balls={esferas.balls} profile={profile} />)
  
  const select = getByTestId('filter')
  fireEvent.change(select, { target: {value: 'all'}})
  //debug()
  const div1 = getByText('1 estrela').closest('div')
  const div2 = getByText('2 estrelas').closest('div')
  const div3 = getByText('3 estrelas').closest('div')
  const div4 = getByText('4 estrelas').closest('div')
  const div5 = getByText('5 estrelas').closest('div')
  const div6 = getByText('6 estrelas').closest('div')
  const div7 = getByText('7 estrelas').closest('div')
  expect(div1).toBeDefined()
  expect(div2).toBeDefined()
  expect(div3).toBeDefined()
  expect(div4).toBeDefined()
  expect(div5).toBeDefined()
  expect(div6).toBeDefined()
  expect(div7).toBeDefined()  
})

it('Should show the balls found', () => {
  const { debug, getByText, getByTestId, queryByText } = render(<Balls balls={esferas.balls} profile={profile} />)
  
  const select = getByTestId('filter')
  fireEvent.change(select, { target: {value: 'me'}})
  //debug()
  const div1 = getByText('1 estrela').closest('div')
  const div5 = getByText('5 estrelas').closest('div')
  const div6 = getByText('6 estrelas').closest('div')
  const div7 = getByText('7 estrelas').closest('div')
  expect(div1).toBeDefined()
  expect(queryByText('2 estrelas')).toBeNull()
  expect(queryByText('3 estrelas')).toBeNull()
  expect(queryByText('4 estrelas')).toBeNull()
  expect(div5).toBeDefined()
  expect(div6).toBeDefined()
  expect(div7).toBeDefined()
})

it('Should show balls not found', () => {
  const { debug, getByText, getByTestId, queryByText } = render(<Balls balls={esferas.balls} profile={profile} />)
  const select = getByTestId('filter')
  fireEvent.change(select, { target: {value: 'notme'}})
  //debug()
  const div2 = getByText('2 estrelas').closest('div')
  const div3 = getByText('3 estrelas').closest('div')
  const div4 = getByText('4 estrelas').closest('div')
  
  expect(queryByText('1 estrela')).toBeNull()
  expect(div2).toBeDefined()
  expect(div3).toBeDefined()
  expect(div4).toBeDefined()
  expect(queryByText('5 estrelas')).toBeNull()
  expect(queryByText('6 estrelas')).toBeNull()
  expect(queryByText('7 estrelas')).toBeNull()
})