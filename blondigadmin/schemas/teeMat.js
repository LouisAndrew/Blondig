export default {
        name: 'materials',
        title: 'Bahan - bahan kaos',
        type: 'document',
        fields: [
                {
                        name: 'image',
                        title: 'Foto',
                        type: 'image'
                },
                {
                        name: 'heading',
                        title: 'Nama Bahan',
                        type: 'string'
                },
                {
                        name: 'prices',
                        title: 'Price List bahan (img)',
                        type: 'image'
                },
                {
                        name: 'iron',
                        title: 'Bisa Setrika Langsung',
                        type: 'boolean'
                },
                {
                        name: 'color',
                        title: 'Warna Tidak Terbatas?',
                        type: 'boolean'
                },
                {
                        name: 'gold',
                        title: 'Warna Gold',
                        type: 'boolean'
                }
                
        ]
}