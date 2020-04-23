export default {
      name: 'size',
      title: 'Size Baju',
      type: 'document',
      fields: [
            {
                  name: 'sizeName',
                  title: 'Size Name',
                  type: 'string',
                  validation: Rule => Rule.required()
            },
            {
                  name: 'width',
                  title: 'Width',
                  type: 'number'
            }, 
            {
                  name: 'height',
                  title: 'Height',
                  type: 'number'
            }
      ]
}