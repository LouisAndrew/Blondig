export default {
      name: 'tee',
      title: 'Tee',
      type: 'document',
      fields: [
            {
                  name: 'teeId',
                  title: 'Tee Id',
                  type: 'string',
                  options: {
                        list: [ 'LENGAN_PENDEK', 'LENGAN_PANJANG', 'RAGLAN', 'TAMBAH_SISI' ]
                  },
                  validation: Rule => Rule.required()
            },
            {
                  name: 'variants',
                  title: 'Variants',
                  type: 'array',
                  of: [{ type: 'teeVariant' }]
            },
            {
                  name: 'productImage',
                  title: 'GAMBAR PRODUCT KALO MAU',
                  type: 'image'
            }
      ]
}