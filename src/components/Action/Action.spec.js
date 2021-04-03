import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Action from './Action'
import { act } from 'react-dom/test-utils'

import esferas from '../../mocks/esferas.json';
import esferasSuccess from '../../mocks/esferasSuccess.json';
import { profile } from '../../mocks/profile.json';
import profileSuccess from '../../mocks/profileSuccess.json';

it('Should show the modal that warns that it does not have all the spheres', () => {
  const { container, debug, getByText } = render(<Action />)
  
  const button = getByText('Invocar').closest('button')
  fireEvent.click(button)
  
  debug()
  
  expect(getByText('Você não tem todas as esferas para invocar o shenlong')).toBeTruthy()
})

it('Should invoke the shenlong', () => {
  const { container, debug, getByText, getByTestId } = render(<Action balls={profileSuccess.profile.balls} />)
  //primeiro seleciona o button para poder clicá-lo
  const button = getByText('Invocar').closest('button')
  
  fireEvent.click(button)
  debug()
  expect(getByTestId('shenlong')).toBeTruthy()
})