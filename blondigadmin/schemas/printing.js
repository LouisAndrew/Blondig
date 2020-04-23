export default {
      name: 'printing',
      title: 'Printing?',
      type: 'document',
      fields: [
            {
                  name: 'main',
                  title: 'Main',
                  type: 'layout'
            },
            {
                  name: 'items',
                  title: 'Items',
                  type: 'array',
                  of: [{ type: 'card' }]
            }
      ]
}