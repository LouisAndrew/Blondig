export default {
      name: 'sizing',
      title: 'Sizing Items',
      type: 'document',
      fields: [
            {
                  name: 'layoutId',
                  title: 'Layout ID',
                  type: 'string',
                  options: {
                        list: [ 'top', 'mid', 'bot' ]
                  },
                  validation: Rule => Rule.required()
            },
            {
                  name: 'content',
                  title: 'Content',
                  type: 'array',
                  of: [{ type: 'layout' }]
            }
      ]
}