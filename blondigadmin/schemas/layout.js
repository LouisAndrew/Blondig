export default {
      name: 'layout',
      title: 'Layout',
      type: 'object',
      fields: [
            {
                  name: 'position',
                  title: 'Position',
                  description : 'where the item should be positioned',
                  type: 'string',
                  options: {
                        list: [ 'main', 'misc' ]
                  }
            },
            {
                  name: 'items',
                  title: 'Item',
                  type: 'array',
                  of: [{ type: 'card' }]
            },
            {
                  name: 'button',
                  type: 'Button',
                  type: 'string'
            }
      ]
}