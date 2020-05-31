export default {
        name: 'contact',
        title: 'Contact Datas',
        type: 'document',
        fields: [ 
                {
                        name: 'key',
                        title: 'Social Media?',
                        description: 'Contoh: Facebook, tokopedia, shopee dll',
                        type: 'string'
                },
                {
                        name: 'value',
                        title: 'Tulisan yang ingin ditampilkan',
                        description: 'contoh: @blondig',
                        type: 'string'
                },
                {
                        name: 'link',
                        title: 'Link ke socmed tsb',
                        description: 'contoh: https://facebook.com/blondig',
                        type: 'url'
                }
        ]
}