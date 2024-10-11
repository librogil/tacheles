/*
export class Temp {
    _id: String;
    argumentID: string;
    title: string;
    answers: [{short: string, full: string, tags: [String], rank: number}];
    tags: string[];
    type: string;
}
*/

import { A } from "./a.model";

export class Temp {
    _id: String;
    argumentID: string;
    answerID: string;
    title: string;
    answers: A[];
    tempAnswer: A;
    type: Number;
}