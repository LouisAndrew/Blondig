export default {
      name: 'card',
      title: 'Card',
      type: 'object',
      fields: [
            {
                  name: 'media',
                  title: 'Media',
                  type: 'array',
                  of: [{ type: 'img' }]
            },
            {
                  name: 'heading',
                  title: 'Heading',
                  type: 'string',
                  validation: Rule => Rule.max(50)
            },
            {
                  name: 'subheading',
                  title: 'Subheading',
                  type: 'string',
                  validation: Rule => Rule.max(150)
            },
            {
                  name: 'misc',
                  title: 'Misc',
                  type: 'array',
                  of: [{ type: 'text' }]
            }
      ]
}