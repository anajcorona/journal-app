import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dzcym2da6',
    api_key: '594378319127851',
    api_secret: '6tALhCNlmYyzY7S8EOCohct_BJk',
    secure: true
})

describe('Pruebas en file Upload', () => {
    test('debe de subir el archivo correctamente a cloudinary', async() => {
        const imageUrl = 'https://png.pngtree.com/png-clipart/20191213/ourlarge/pngtree-natural-scenery-small-rivers-and-rivers-png-image_2088457.jpg';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect( typeof url ).toBe('string');
    
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg','');

        const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        });
        console.log('cloudResp',cloudResp);
    });

    test('Debe de retornar null', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe(null);
    })
});