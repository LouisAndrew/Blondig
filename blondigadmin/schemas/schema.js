// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import card from './card'
import printing from './printing'
import homepage from './homepage'
import layout from './layout'
import size from './size'
import sizing from './sizing'
import tee from './tee'
import teeVariant from './teeVariant'
import img from './img'
import misc from './misc'
import gallery from './gallery'
import galleryItem from './galleryItem'
import teeMat from './teeMat'
import contact from './contact'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
      homepage,
      sizing,
      layout,

      tee,
      teeVariant,
      size,
      card,
      printing,

      img,
      misc,

      gallery,
      galleryItem,

      teeMat,
      contact
  ])
})
