export default {
        name: 'gallery',
        title: 'Gallery Items', 
        type: 'document',
        fields: [
                {
                        name: 'content',
                        title: 'Gallery Content',
                        type: 'array',
                        of: [{ type: 'galleryItem' }]
                }
        ]
}