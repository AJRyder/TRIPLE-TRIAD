
// CARD OBJECT CLASS 
class TriadCard { 
    constructor(name, colorVal, topVal, bottomVal, leftVal, rightVal, cardImg){
        this.name = name;
        this.color = colorVal;          
        this.topVal = topVal; 
        this.bottomVal = bottomVal; 
        this.leftVal = leftVal;
        this.rightVal = rightVal; 
        this.image = cardImg;
      } 
    }     

const A = 10

// LEVEL 1 MONSTER CARDS
// name, colorVal, top, bottom, left, right
const geezard = new TriadCard('Geezard', null, 1, 1, 5, 4,)
const funguar = new TriadCard('Funguar', null, 5, 1, 3, 1)
const biteBug = new TriadCard('Bite Bug', null, 5, 3, 1, 3)
const redBat = new TriadCard('Red bat', null, 6, 1, 2, 1)
const blobra = new TriadCard('Blobra', null, 2, 1, 5, 3)
const gayla = new TriadCard('Gayla', null, 2, 4, 4, 1)
const gesper = new TriadCard('Gesper', null, 1, 4, 1, 5)
const fasticalonF = new TriadCard('Fasticalon-F', null, 3, 2, 1, 5)
const bloodSoul = new TriadCard('Blood Soul', null, 2, 6, 1, 1)
const caterchi = new TriadCard('Caterchipillar', null, 4, 4, 3, 2)
const cocka = new TriadCard('Cockatrice', null, 2, 2, 6, 1)

//LEVEL 2 MONSTER CARDS 
// name, colorVal, top, bottom, left, right
const grat = new TriadCard('Grat', null, 7, 3, 1, 1)
const buel = new TriadCard('Buel', null, 6, 2, 3, 2)
const mesmer = new TriadCard('Mesmerize', null, 5, 3, 4, 3)
const glaceye = new TriadCard('Glacial Eye', null, 6, 4, 3, 1)
const belhel = new TriadCard('Belhelmel', null, 3, 5, 3, 4)
const thrust = new TriadCard('Thrustaevis', null, 5, 2, 5, 3)
const anacond = new TriadCard('Anacondaur', null, 5, 2, 5, 3)
const creep = new TriadCard('Creeps', null, 5, 5, 2, 2)
const grend = new TriadCard('Grendel', null, 4, 5, 2, 4)
const jelly = new TriadCard('Jelleye', null, 3, 1, 7, 2)
const mantis = new TriadCard('Grand Mantis', null, 5, 5, 3, 2)

//LEVEL 3 MONSTER CARDS 
// name, colorVal, top, bottom, left, right
const forbid = new TriadCard('Forbidden', null, 6, 3, 2, 6)
const armad = new TriadCard('Armadodo', null, 6, 1, 6, 3)
const triface = new TriadCard('Tri-face', null, 3, 5, 5, 5)
const fastical = new TriadCard('Fasticalon', null, 7, 1, 3, 5)
const snwln = new TriadCard('Snow Lion', null, 7, 5, 3, 1)
const ochu = new TriadCard('Ochu', null, 5, 3, 3, 6)
const sam = new TriadCard('SAM08G', null, 5, 2, 4, 6)
const claw = new TriadCard('Death Claw', null, 4, 7, 2, 4)
const cacti = new TriadCard('Cactuar', null, 6, 6, 3, 2)
const tonbry = new TriadCard('Tonberry', null, 3, 4, 4, 6)
const worm = new TriadCard('Abyss Worm', null, 7, 3, 5, 2)

//LEVEL 4 MONSTER CARDS 
// name, colorVal, top, bottom, left, right
const turta = new TriadCard('Turtapod', null, 2, 6, 7, 3)
const vysa = new TriadCard('Vysage', null, 6, 4, 5, 5)
const rex = new TriadCard('T-Rexaur', null, 4, 2, 7, 6)
const bomb = new TriadCard('Bomb', null, 2, 6, 3, 7)
const blitz = new TriadCard('Blitz', null, 1, 4, 7, 6)
const wendi = new TriadCard('Wendigo', null, 7, 1, 6, 3)
const tora = new TriadCard('Torama', null, 7, 4, 4, 4)
const imp = new TriadCard('Imp', null, 3, 3, 6, 7)
const bludrag = new TriadCard('Blue Dragon', null, 6, 7, 3, 2)
const adaman = new TriadCard('Adamantoise', null, 4, 5, 6, 5)
const hexdrag = new TriadCard('Hexadragon', null, 7, 4, 3, 5)

//LEVEL 5 MONSTER CARDS 
// name, colorVal, top, bottom, left, right
const giant = new TriadCard('Iron Giant', null, 6, 6, 5, 5)
const behemo = new TriadCard('Behemoth', null, 3, 5, 7, 6)
const chmra = new TriadCard('Chimera', null, 7, 5, 3, 6)
const pupu = new TriadCard('PuPu', null, 3, 2, 1, A)
const elast = new TriadCard('Elastoid', null, 6, 6, 7, 2)
const gim = new TriadCard('GIM47N', null, 5, 7, 4, 5)
const malbo = new TriadCard('Malboro', null, 7, 4, 2, 7)
const rubdrag = new TriadCard('Ruby Dragon', null, 7, 7, 4, 2)
const elnoy = new TriadCard('Elnoyle', null, 5, 7, 6, 3)
const tonking = new TriadCard('Tonberry King', null, 4, 7, 4, 6)
const bigwdg = new TriadCard('Biggs & Wedge', null, 6, 2, 7, 6)

//LEVEL 6 BOSS CARDS 
// name, colorVal, top, bottom, left, right
const fujrai = new TriadCard('Fujin & Raijin', null, 2, 8, 4, 8)
const elvo = new TriadCard('Elvoret', null, 7, 3, 4, 8)
const xatmo = new TriadCard('X-ATM092', null, 3, 7, 3, 8)
const grana = new TriadCard('Granaldo', null, 7, 8, 5, 2)
const gero = new TriadCard('Gerogero', null, 1, 8, 3, 8)
const igui = new TriadCard('Iguion', null, 8, 8, 2, 2)
const abad = new TriadCard('Abadon', null, 6, 4, 5, 8)
const traum = new TriadCard('Trauma', null, 4, 5, 6, 8)
const oilboy = new TriadCard('Oilboyle', null, 1, 4, 8, 8)
const shumi = new TriadCard('Shumi Tribe', null, 6, 8, 4, 5)
const krysta = new TriadCard('Krysta', null, 7, 8, 1, 5)

// LEVEL 7 BOSS CARDS 
// name, colorVal, top, bottom, left, right
const propa = new TriadCard('Propagator', null, 8, 4, 8, 4)
const jumbo = new TriadCard('Jumbo Cactuar', null, 8, 4, 4, 8)
const tripoint = new TriadCard('Tripoint', null, 8, 2, 8, 5)
const gargant = new TriadCard('Gargantua', 5, 6, 8, 6)
const mobtyp = new TriadCard('Mobile Type 8', null, 8, 7, 3, 6)
const sphinx = new TriadCard('Sphinxara', null, 8, 5, 8, 3)
const tiamat = new TriadCard('Tiamat', null, 8, 5, 4, 8)
const bgh = new TriadCard('BGH251F2', null, 5, 8, 5, 7)
const rgiant = new TriadCard('Red Giant', null, 6, 4, 7, 8)
const catoblep = new TriadCard('Catoblepas', null, 1, 7, 7, 8)
const ultima = new TriadCard('Ultima Weapon', null, 7, 2, 8, 7)


// LEVEL 8 GF CARDS 
// name, colorVal, top, bottom, left, right
const chubby = new TriadCard('Chubby Chocobo', null, 4, 8, 9, 4)
const angelo = new TriadCard('Angelo', null, 9, 7, 3, 6)
const gilga = new TriadCard('Gilgamesh', null, 3, 0, 6, 7)
const mog = new TriadCard('MiniMog', null, 9, 9, 2, 3)
const chico = new TriadCard('Chicobo', null, 9, 8, 4, 4)
const queza = new TriadCard('Quezacotl', null, 2, 9, 4, 9)
const shiva = new TriadCard('Shiva', null, 6, 4, 9, 7)
const ifrit = new TriadCard('Ifrit', null, 9, 2, 8, 6)
const siren = new TriadCard('Siren', null, 8, 6, 2, 9)
const sacred = new TriadCard('Sacred', null, 5, 9, 9, 1)
const mintor = new TriadCard('Minotaur', null, 9, 2, 9, 5)

// LEVEL 9 GF CARDS 
// name, colorVal, top, bottom, left, right
const carbun = new TriadCard('Carbuncle', null, 8, A, 4, 4)
const diablo = new TriadCard('Diablos', null, 5, 8, 3, A)
const levia = new TriadCard('Leviathan', null, 7, 1, 7, A)
const odin = new TriadCard('Odin', null, 8, 3, 5, A)
const pandem = new TriadCard('Pandemona', null, A, 7, 7, 1)
const cerber = new TriadCard('Cerberus', null, 7, 6, A, 4)
const alex = new TriadCard('Alexander', null, 9, 4, 2, A)
const phenix = new TriadCard('Phoenix', null, 7, 7, A, 2)
const baham = new TriadCard('Bahamut', null, A, 2, 6, 8)
const doom = new TriadCard('Doomtrain', null, 3, A, A, 1)
const eden = new TriadCard('Eden', null, 4, 9, A, 4)

// LEVEL 10 CHARACTER CARDS 
// name, colorVal, top, bottom, left, right
const ward = new TriadCard('Ward', null, A, 2, 8, 7)
const kiros = new TriadCard('Kiros', null, 6, 6, A, 7)
const lagun = new TriadCard('Laguna', null, 5, 3, 9, A)
const selph = new TriadCard('Selphie', null, A, 6, 4, 8)
const quist = new TriadCard('Quistis', null, 9, A, 2, 6)
const irv = new TriadCard('Irvine', null, 2, 9, A, 6)
const zell = new TriadCard('Zell', null, 8, A, 6, 5)
const rino = new TriadCard('Rinoa', null, 8, A, 6, 5)
const edea = new TriadCard('Edea', null, 4, 2, A, A)
const seifer = new TriadCard('Seifer', null, 6, A, 4, 9)
const squall = new TriadCard('Squall', null, A, 6, 9, 4)





const deck = [
                  {geezard},{funguar},{biteBug},{redBat},{blobra},
                  {gayla}, {gesper}, {fasticalonF},{bloodSoul},{caterchi}, {cocka},
                  {grat}, {buel}, {mesmer}, {glaceye}, {belhel}, {thrust}, {anacond},
                  {creep}, {mantis}, {jelly}, {grend}, {forbid}, {armad}, {triface},
                  {fastical}, {snwln}, {ochu}, {sam}, {claw}, {cacti}, {tonbry}, {worm}, 
                  {turta}, {vysa}, {rex}, {bomb}, {blitz}, {wendi}, {tora}, {imp}, 
                  {bludrag}, {adaman}, {hexdrag},{giant}, {behemo}, {chmra}, {pupu}, 
                  {elast}, {gim}, {malbo}, {rubdrag}, {elnoy}, {tonking}, {bigwdg},
                  {fujrai}, {elvo}, {xatmo}, {grana}, {gero}, {igui}, {abad}, {traum}, 
                  {oilboy}, {shumi}, {krysta}, {propa}, {jumbo}, {tripoint}, {gargant}, 
                  {mobtyp}, {sphinx}, {tiamat}, {bgh}, {rgiant}, {catoblep}, {ultima}, 
                  {chubby}, {angelo}, {gilga}, {mog}, {chico}, {queza}, {shiva}, 
                  {ifrit}, {siren}, {sacred}, {mintor}, {carbun}, {diablo}, {levia}, 
                  {odin}, {pandem}, {cerber}, {phenix}, {baham}, {doom}, {eden}, 
                  {ward}, {kiros}, {lagun}, {selph}, {quist}, {irv}, {zell}, {rino},
                  {edea}, {seifer}, {squall}
                ]

console.log(deck)




function randomizeDeck(array) {
    let cardIndex = array.length;
    while (0 !== --cardIndex) { // so long as we haven't depleted the cards to "0", we continue to reduce cards from the array of objects
      let randomIndex = Math.floor(Math.random() * cardIndex); // randomizes the array order of the entire deck
      [array[cardIndex], array[randomIndex]] = [array[randomIndex],  array[cardIndex]]; 
      // as cardIndex depletes in the while loop, they will be mutated into the random index 
      // and vice versa 
      // resulting in an accurate count of cards at the end of a round  
  
    } 
    return array;
}

const draw = (numOfCards) => {
    return Array.from({length:numOfCards}, () => deck.pop())
}
    
// randomizing the deck 
    randomizeDeck(deck)
    console.log("deck length: ", deck.length)
    
const players = {
        player: "Player",
        playerCards: draw(5),
        playerHand: [],
        playerScore: 5,
        playerLevel: 0,

      
        computer: "Computer",
        aiCards: draw(5),
        aiHand: [],
        aiScore: 5, 
        aiLevel: 0
}    

console.log(players.playerCards)
console.log(players.playerHand)
console.log(players.aiCards)
console.log("deck length: ", deck.length)


// game object 
// build the game board ... 3x3 'card tiles' 
const boardGrid = ["", "", null, 
                   null, null, null, 
                   null, null, null]
                   boardGrid.splice(0,1,players.playerCards[0]) 

// linking boardGrid array, which can be passed card object data
// into the div as an element? that can be viewed in the DOM 
const $row1Col1 = $('#row1_Col1').append(boardGrid[0])
const $row1Col2 = $('#row1_Col2').append(boardGrid[1])
const $row1Col3 = $('#row1_Col3').append(boardGrid[2])
const $row2Col1 = $('#row2_Col1').append(boardGrid[3])
const $row2Col2 = $('#row2_Col2').append(boardGrid[4])
const $row2Col3 = $('#row2_Col3').append(boardGrid[5])
const $row3Col1 = $('#row3_Col1').append(boardGrid[6])
const $row3Col2 = $('#row3_Col2').append(boardGrid[7])
const $row3Col3 = $('#row3_Col3').append(boardGrid[8])

// console.log($('#row1_Col1'), "has boarGrid value udpated the html div")
// console.log($('#boardGrid'), 'checking to see if board grid is updating with array data')

boardGrid.splice(0,1,players.playerCards[0]) // player card is played into array and div row1col1
boardGrid.splice(1,1,players.aiCards[0]) // computer card is played in boardGrid slot 1/ aka row1col2
console.log(boardGrid, "has boardGrid received new card? ");

console.log($('#row1_Col1'), "has card passed into the div from player's hand")
console.log($('#boardGrid'))

console.log(boardGrid[0].rightVal)
console.log(boardGrid[0].children(name))
// testing a card battle... 
// const testBattle = () => {
// if (boardGrid[0].rightVal> boardGrid[1][0].leftVal) { 
//     console.log ("Player card wins - comp card turns blue")
// } else { 
//     console.log("Comp card wins - player card turns red")
// }
// }
// testBattle()






// store these in an array to later be called upon during game turns
// to push/splice a card into the position 
// should include creation of the game board 
    // game board positions (columns & rows?)
    // 
    // e.g. check for cards, check sides of touching cards

// should include the player object 
// logic and computer logic     
// should randomly decide first turn
// should allow player turn to:     
    // to choose a card from player hand
    // should allow 'chosen card' to be '' onto the game board 
// 