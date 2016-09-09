var libPath = '../build/SolidObject.js'

jest.unmock( libPath )
jest.unmock( '../build/merge' )

var SolidObject = null

describe( 'SolidObject', function () {
  describe( 'constructor', function () {
    beforeEach( function () {
      SolidObject = require( libPath )
    })

    it( 'should initialize WITHOUT props', function () {
      var solidObject = new SolidObject()
      expect( solidObject ).toBeDefined()
      expect( solidObject.props ).toBeDefined()
      expect( solidObject.state ).toBeDefined()
      expect( solidObject.solid ).toBeTruthy()
      expect( typeof solidObject.key ).toBeDefined()
    })

    it( 'should initialize WITH props', function () {
      var props = {
        aString: 'Test',
        aNumber: 0,
        anObject: {
          aBoolean: false
        }
      }
      var solidObject = new SolidObject( props )
      expect( solidObject.props ).toEqual( props )
    })

    it( 'should accept only props object', function () {
      var props = 'Not an Object'
      var shouldThrow = function () {
        return new SolidObject( props )
      }
      expect( shouldThrow) .toThrow()
    })

    it( 'should initialize with default properties', function () {
      var props = null
      var defaultProps = { name: 'default props' }
      var solidObject = new SolidObject( null, defaultProps )
      expect( solidObject.props ).toEqual( defaultProps )
    })

    it( 'should merge complex properties', function () {
      var initProps = {
        name: 'test',
        version: '0.0.1',
        module: {
          author: {
            name: 'Franz',
            email: 'frank@gmail.com',
            homepage: 'frankface.com'
          }
        }
      }

      var newProps = {
        module: {
          author: {
            name: 'Frank'
          }
        }
      }

      var solidObject = new SolidObject( initProps )
      solidObject.setProps( newProps )

      var expected = {
        name: 'test',
        version: '0.0.1',
        module: {
          author: {
            name: 'Frank',
            email: 'frank@gmail.com',
            homepage: 'frankface.com'
          }
        }
      }

      expect( expected ).toEqual( solidObject.props )
    })
  })
})
