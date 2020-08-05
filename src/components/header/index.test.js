import renderer from 'react-test-renderer'
import Header from '.'
import React from 'react'

describe('Header componenents', ()=>{
    it('shoud render authenticate router', ()=>{

const tree = renderer.create(<Header/>).toJSON()
expect(tree).toMatchSnapshot()
    })
     it('shoud render unauthenticate router', ()=>{

const tree = renderer.create(<Header/>).toJSON()
expect(tree).toMatchSnapshot()
    })

})