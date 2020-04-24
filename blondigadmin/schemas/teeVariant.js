export default {
      name: 'teeVariant',
      title: 'Tee Variant',
      type: 'object',
      fields: [
            {
                  name: 'jenisBahan',
                  title: 'Jenis Bahan',
                  type: 'string'
            },
            {
                  name: 'jenisKaos',
                  title: 'Jenis Kaos',
                  type: 'string'
            },
            {
                  name: 'availableSizes',
                  title: 'Available Sizes',
                  type: 'array',
                  of: [ 
                        { 
                              type: 'reference', 
                              to: [{ type: 'size' }] 
                        } 
                  ]
            },
            {
                  name: 'price',
                  title: 'Price',
                  type: 'number',
                  validation: Rule => Rule.required()
            }
      ]
}