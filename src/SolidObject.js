/**
 * @overview
 *
 * A base class with properties management.
 * {@link module:SolidObject~SolidObject|SolidObject} has built-in
 * methods for safely assign properties to an object. By subclassing
 * {@link module:SolidObject~SolidObject|SolidObject} is possible
 * to override props update notification methods like `propsShouldUpdate`,
 * `propsWillUpdate` and `propsDidUpdate`.
 *
 * @module    SolidObject
 * @author    Roberto Mauro <erremauro@icloud.com>
 * @license   {@link http://unlicense.org|The Unlicense}
 * @version   1.0.1
 * @since     1.0.0
 *
 */

/**
 * Generate a standard guid
 * @memberOf module:SolidObject
 * @inner
 * @private
 * @function
 * @inner
 * @returns {undefined}
 * @version   1.0.1
 * @since     1.0.0
 */
function guid () {
  const s4 = () => Math
    .floor( ( 1 + Math.random() ) * 0x10000 )
    .toString(16)
    .substring(1)

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
  s4() + '-' + s4() + s4() + s4();
}

/**
 * SolidObject readonly property symbols
 * @type {Object}
 * @memberOf module:SolidObject
 * @inner
 * @private
 * @property {Symbol} state
 * @property {Symbol} props
 * @property {Symbol} key
 * @property {Symbol} defaults
 * @property {Symbol} solid
 * @since 1.0.0
 * @version 1.0.0
 */
const Symbols = {
  state: Symbol( '__state__' ),
  props: Symbol('__props__' ),
  key: Symbol( '__key__' ),
  defaults: Symbol( '__defaults__' ),
  solid: Symbol( '__solid__' )
}

const merge = require( './merge' )

/**
 * @name module:SolidObject~SolidObject
 * @class
 * @classdesc
 * An object with better props assignment.
 *
 * @property {boolean} solid A way to check object type.
 * @property {string} key SolidObject unique key
 * @property {Object} props SolidObject properties
 * @property {Object} state SolidObject internal state
 *
 * @description
 *
 * Initialize a SolidObject with optional properties and default properties.
 *
 * @param  {?Object} [props] The object properties
 * @param  {?Object} [defaultProps] Object default properties
 *
 * @version   1.0.0
 * @since     1.0.0
 */
class SolidObject {
  constructor( props, defaultProps ) {
    this[ Symbols.solid ] = true
    this[ Symbols.key ] = guid()
    this[ Symbols.props ] = defaultProps || {}
    this[ Symbols.state ] = {}
    this[ Symbols.defaults ] = defaultProps
    this.setProps( props )
  }

  get solid() {
    return this[ Symbols.solid ]
  }

  get key() {
    return this[ Symbols.key ]
  }

  get props () {
    return Object.assign( {}, this[ Symbols.props ] )
  }

  get state() {
    return Object.assign( {}, this[ Symbols.state ] )
  }

  /**
   * Update the SolidObject state
   * @name module:SolidObject~SolidObject#__state
   * @memberOf module:SolidObject~SolidObject
   * @param  {?Object} props A state object
   * @returns {undefined}
   */
  set __state ( props ) {
    this[ Symbols.state ] = Object.assign( this.state, props || {} )
  }

  /**
   * Set the object properties. During property assignment the method will check
   * if we can update the properties, will parse the properties internally and
   * then notifies the update completion.
   *
   * @param {?Object} props Object properties
   * @returns {Object} Updated Props
   *
   * @since 1.0.0
   * @version 0.1.2
   */
  setProps( props ) {
    if ( !props ) {
      this.propsDidUpdate()
      return this.props
    }

    if ( typeof props !== 'object' ) {
      throw new TypeError(
        this.constructor.name + ' expected props to be an object but found a '
        + (typeof props) + ' instead. Please provide a valid '
        + this.constructor.name + ' property object.'
      )
    }

    if ( this.propsShouldUpdate() ) {
      props = this.propsWillUpdate( props )
      this[ Symbols.props ] = merge( this.props,  props )
      this.propsDidUpdate()
    }

    return this.props
  }

  /**
   * Called before properties are updated.
   * Override this method to allow or disallow properties update.
   *
   * @returns {boolean} Defines if props should update
   *
   * @since 1.0.0
   * @version 1.0.0
   */
  propsShouldUpdate() {
    return true
  }

  /**
   * Called before the properties are assigned.
   * Override this method to manipulate the properties.
   *
   * @param {any} props Object properties
   * @returns {Object} Props that will update the object
   *
   * @since 1.0.0
   * @version 1.0.0
   */
  propsWillUpdate( props ) {
    return props
  }

  /**
   * Called after properties are updated.
   * Override this method to do any additional work that need to be performed
   * right after properties update.
   *
   * @returns {undefined}
   *
   * @since 1.0.0
   * @version 1.0.0
   */
  propsDidUpdate() {
    // called after props update completes
  }
}

module.exports = SolidObject

