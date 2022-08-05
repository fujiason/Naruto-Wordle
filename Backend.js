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

    




















}