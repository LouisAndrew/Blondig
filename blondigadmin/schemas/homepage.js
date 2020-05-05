export default {
      name: 'homepage',
      title: 'Homepage Items',
      type: 'document',
      fields: [
            {
                  name: 'layoutId',
                  title: 'Layout ID',
                  type: 'string',
                  options: {
                        list: [ 'hero', 'why-us', 'proccess', 'prices' ]
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