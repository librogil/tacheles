export class Argument {
    _id: String;
    title: string;
    type: string;
    
    answers: [{_id: String, short: string, full: string,
        sources: [{type: string, link: string, description: string}]}];
        
    //answers: [{_id: String, short: string, full: string}];
}
