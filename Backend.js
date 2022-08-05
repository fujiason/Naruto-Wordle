import React, { Component } from "react";
import sh from "./NARUTO CHARS.json";

class Backend extends Component{

    /**
     * Constructor for declaring a Player object
     * @param {} guess 
     * @param {int} guess_num 
     */
    Player(guess, guess_num) {
        this.guess = guess;
        this.guess_num = guess_num;
    }

    /**
     * Constructor for declaring a Correct Player object
     * @param {} correctPlayer 
     * @param {Boolean} correct_guess 
     */
    CorrectPlayer(correctPlayer, correct_guess) {
        this.correctPlayer = correctPlayer;
        this.correct_guess = correct_guess;    
    }

    /**
     * Constructor for declaring a NarudleRound object. Created before each round.
     * @param {} player_guess 
     * @param {*} answer 
     */
    NarudleRound(player_guess, answer){
        this.player_guess = player_guess;
        this.answer = answer;
    }

    Chakra = [ //31
        "None",
        "Wind",
        "Fire",
        "Water",
        "Earth",
        "Lightning",
        "Yin",
        "Yang",
        "Wood",
        "Ice",
        "Lava",
        "Boil",
        "Curse Mark",
        "Storm",
        "Yin",
        "Yang",
        "Yin-Yang",
        "Medical",
        "Explosion",
        "Magnet",
        "Sharingan", 
        "Mangekyo Sharingan", 
        "Rinnegan",
        "Byakugan", 
        "Tenseigan",
        "Isshiki's Dojutsu",
        "Jogan",
        "Shikotsumyaku",
        "Eternal Mangekyo Sharingan",
        "Rinne Sharingan",
        "Dust",
        "Scorch"
    ];

    Affiliation = [ //21
        "Konahagakure",
        "Kirigakure",
        "Sunagakure",
        "Kumogakure",
        "Iwagakure",
        "Allied Shinobi Forces",
        "Akatsuki",
        "Root",
        "Otogakure", 
        "Ryuchi Cave",
        "Land of Iron",
        "Amegakure",
        "Mount Myoboku",
        "Sound Four",
        "Shikkotsu Forest",
        "Taka",
        "None",
        "Moon",
        "Kara",
        "Takigakure",
        "Land of Ancestors",
        "Kusagakure"
    ];

    Rank = [ //15
        "Kage",
        "Jonin",
        "Chunin",
        "Genin",
        "Anbu",
        "S-Rank",
        "Ninken",
        "Sage",
        "Seven Ninja Swordsmen of the Mist",
        "Jinchuriki",
        "None",
        "Tailed Beast",
        "S-Rank",
        "Summon",
        "Toad",
        "Slug"
    ];

    Arc = { //23
        "Prologue: Land of Waves": 1,
        "Chunin Exams": 2,
        "Konoha Crush": 3,
        "Search for Tsunade": 4,
        "Sasuke Recovery Mission": 5,
        "Kazekage Rescue Mission": 6,
        "Tenchi Bridge Reconnaissance Mission": 7,
        "Akatsuki Supression Mission": 8,
        "Itachi Pursuit Mission": 9,
        "Tale of Jiraiya the Gallant": 10,
        "Fated Battle Between Brothers": 11,
        "Pain's Assault": 12,
        "Five Kage Summit": 13,
        "Fourth Shinobi World War: Countdown": 14,
        "Fourth Shinobi World War: Confrontation": 15,
        "Fourth Shinobi World War: Climax": 16,
        "Birth of the Ten-Tails' Jinchuriki": 17,
        "Kaguya Otsutsuki Strikes": 18,
        "Academy Entrance Arc": 19,
        "Sarada Uchiha Arc": 20,
        "Versus Momoshiki": 25,
        "Mitsuki's Disappearance Arc": 27,
        "Kara Actuation Arc": 35,
        "Kawaki Arc": 37,
    };

    bin2hex(bin){
        var hexa = parseInt(bin, 2).toString(16);
        return hexa;
    }
    hex2bin(hex){
        return (parseInt(hex, 16).toString(2)).padStart(4, '0');
    }
}
