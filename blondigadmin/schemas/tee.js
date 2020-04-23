export default {
      name: 'tee',
      title: 'Tee',
      type: 'document',
      fields: [
            {
                  name: 'teeId',
                  title: 'Tee Id',
                  type: 'string',
                  validation: Rule => Rule.required()
            },
            {
                  name: 'variants',
                  title: 'Variants',
                  type: 'array',
                  of: [{ type: 'teeVariant' }]
            }
      ]
}