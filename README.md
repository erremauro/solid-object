# solid-object

A class with state and props management.

## Install

    git clone https://github/erremauro/solid-object.git

## Why

Sometimes you just need one of those.

<a name="module_SolidObject"></a>

## API

<a name="module_SolidObject..SolidObject"></a>

### SolidObject~SolidObject
An object with better props assignment.

**Kind**: inner class of <code>[SolidObject](#module_SolidObject)</code>  
**Since**: 1.0.0  
**Version**: 1.0.0  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| solid | <code>boolean</code> | A way to check object type. |
| key | <code>string</code> | SolidObject unique key |
| props | <code>Object</code> | SolidObject properties |
| state | <code>Object</code> | SolidObject internal state |


* [~SolidObject](#module_SolidObject..SolidObject)
    * [new SolidObject([props], [defaultProps])](#new_module_SolidObject..SolidObject_new)
    * [.__state](#module_SolidObject..SolidObject+__state) ⇒ <code>undefined</code>
    * [.setProps(props)](#module_SolidObject..SolidObject+setProps) ⇒ <code>Object</code>
    * [.propsShouldUpdate()](#module_SolidObject..SolidObject+propsShouldUpdate) ⇒ <code>boolean</code>
    * [.propsWillUpdate(props)](#module_SolidObject..SolidObject+propsWillUpdate) ⇒ <code>Object</code>
    * [.propsDidUpdate()](#module_SolidObject..SolidObject+propsDidUpdate) ⇒ <code>undefined</code>

<a name="new_module_SolidObject..SolidObject_new"></a>

#### new SolidObject([props], [defaultProps])
Initialize a SolidObject with optional properties and default properties.


| Param | Type | Description |
| --- | --- | --- |
| [props] | <code>Object</code> | The object properties |
| [defaultProps] | <code>Object</code> | Object default properties |

<a name="module_SolidObject..SolidObject+__state"></a>

#### solidObject.__state ⇒ <code>undefined</code>
Update the SolidObject state

**Kind**: instance property of <code>[SolidObject](#module_SolidObject..SolidObject)</code>  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | A state object |

<a name="module_SolidObject..SolidObject+setProps"></a>

#### solidObject.setProps(props) ⇒ <code>Object</code>
Set the object properties. During property assignment the method will check
if we can update the properties, will parse the properties internally and
then notifies the update completion.

**Kind**: instance method of <code>[SolidObject](#module_SolidObject..SolidObject)</code>  
**Returns**: <code>Object</code> - Updated Props  
**Since**: 1.0.0  
**Version**: 0.1.2  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Object properties |

<a name="module_SolidObject..SolidObject+propsShouldUpdate"></a>

#### solidObject.propsShouldUpdate() ⇒ <code>boolean</code>
Called before properties are updated.
Override this method to allow or disallow properties update.

**Kind**: instance method of <code>[SolidObject](#module_SolidObject..SolidObject)</code>  
**Returns**: <code>boolean</code> - Defines if props should update  
**Since**: 1.0.0  
**Version**: 1.0.0  
<a name="module_SolidObject..SolidObject+propsWillUpdate"></a>

#### solidObject.propsWillUpdate(props) ⇒ <code>Object</code>
Called before the properties are assigned.
Override this method to manipulate the properties.

**Kind**: instance method of <code>[SolidObject](#module_SolidObject..SolidObject)</code>  
**Returns**: <code>Object</code> - Props that will update the object  
**Since**: 1.0.0  
**Version**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>any</code> | Object properties |

<a name="module_SolidObject..SolidObject+propsDidUpdate"></a>

#### solidObject.propsDidUpdate() ⇒ <code>undefined</code>
Called after properties are updated.
Override this method to do any additional work that need to be performed
right after properties update.

**Kind**: instance method of <code>[SolidObject](#module_SolidObject..SolidObject)</code>  
**Since**: 1.0.0  
**Version**: 1.0.0  

## License

The Unlicense. See [LICENSE][2] file for more info.

[1]: doc/API.md "Read SolidObject Api"
[2]: http://unlicense.org "Open the Unlicense Site"
