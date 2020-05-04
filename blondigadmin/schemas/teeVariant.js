export default {
      name: 'teeVariant',
      title: 'Tee Variant',
      type: 'object',
      fields: [
            {
                  name: 'jenisBahan',
                  title: 'Jenis Bahan',
                  description: 'DTG, Polyflex dll??? => bisa tambah jenis lhoo entar!',
                  type: 'string'
            },
            {
                  name: 'jenisKaos',
                  title: 'Jenis Kaos',
                  type: 'string',
                  options: {
                        list: [ 'FULLBLOCK', 'NON_BLOCK' ]
                  }
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
                  name: 'pictureSize',
                  title: 'Size Gambar (KHUSUS BUAT DTG SAMA POLYFLEK)',
                  type: 'array',
                  of: [
                        {
                              type: 'string',
                              options: {
                                    list: [ '10x10', '10x30', '20x30', '30x30', '40x30', 'A3', 'A4', 'A5', 'A6' ]
                              }
                        }
                  ]
            },
            {
                  name: 'availableColor',
                  title: 'Available Colors',
                  type: 'array',
                  of: [
                        {
                              type: 'color'
                        }
                  ]
            },
            {
                  name: 'priceColor',
                  title: 'Harga Kaos warna',
                  type: 'number',
                  validation: Rule => Rule.required()
            },
            {
                  name: 'price',
                  title: 'Harga Kaos Non Warna',
                  type: 'number',
                  validation: Rule => Rule.required()
            }
      ]
}