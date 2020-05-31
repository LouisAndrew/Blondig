export default {
        name: 'galleryItem',
        title: 'Gallery Item',
        type: 'object',
        fields: [ 
                {
                        name: 'img',
                        title: 'Image',
                        type: 'image',
                },
                {
                        name: 'desc',
                        title: 'Description',
                        type: 'string'
                },
                {
                        name: 'dateCreated',
                        title: 'Date Created',
                        type: 'date',
                        options: {
                                calendarTodayLabel: 'Today'
                        },
                },
                {
                        name: 'url',
                        title: 'Image URL',
                        type: 'url'
                }
                
        ]
}