export default {
      name: 'misc',
      title: 'Misc',
      type: 'document',
      fields: [
            {
                  name: 'miscId',
                  ttitle: 'Misc ID',
                  type: 'string'
            },
            {
                  name: 'items',
                  title: "Items",
                  type: 'array',
                  of: [{ type: 'card' }]
            }
      ]
}