function deepmerge ( target, src ) {
  const array = Array.isArray( src )
  let dst = array && [] || {};

  if ( array ) {
      target = target || [];
      dst = dst.concat( target )

      src.forEach( ( item, i ) => {
        if ( typeof dst[ i ] === 'undefined' ) {
            dst[ i ] = item
            return
        }

        if (typeof e === 'object') {
            dst[ i ] = deepmerge( target[ i ], item )
            return
        }

        if (target.indexOf( item ) === -1) {
            dst.push( item )
        }
      })
  } else {
    if (target && typeof target === 'object') {
      Object.keys( target ).forEach( ( key ) => {
          dst[ key ] = target[ key ]
      })
    }

    Object.keys( src ).forEach( ( key ) => {
        if (typeof src[ key ] !== 'object' || !src[ key ] ) {
            dst[ key ] = src[ key ]
            return
        }

        if ( !target[ key ] ) {
            dst[ key ] = src[ key ]
            return
        }

        dst[ key ] = deepmerge( target[ key ], src[ key ] )
    })
  }

  return dst
}

module.exports = deepmerge
