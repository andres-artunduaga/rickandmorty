export class Character {

    public name:string;
    public origin:{
        name:string,
        url:string
    };
    public species:string;
    public status:string;
    public avatar:string;
    public lastEpisode:number;

    public static importBatch( rawData:Array<any> ):Array<Character>{

        let characters:Array<Character> = [];

        rawData.forEach( rawCharacter => {
            characters.push( Character.import(rawCharacter) );
        });

        return characters;
    }

    public static import( rawData:any ):Character{

        let char:Character = new Character();

        if( rawData.name ){
            char.name = rawData.name;
        }
        if( rawData.origin ){
            char.origin = rawData.origin;
        }
        if( rawData.species ){
            char.species = rawData.species;
        }
        if( rawData.status ){
            char.status = rawData.status;
        }
        if( rawData.image ){
            char.avatar = rawData.image;
        }
        if( rawData.episode && rawData.episode.length > 0 ){

            let episodes:Array<any> = rawData.episode;
            let lastEpisode:string = episodes[episodes.length - 1];

            let match = lastEpisode.match(/episode\/([0-9]*)/);

            char.lastEpisode = parseInt( match[1], 10);

            console.log('lastEpisode', char.lastEpisode);
        }


        return char;
    }
}