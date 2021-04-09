const deck_url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
const drawcards_url = 'https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2';

var shufflebutton = document.querySelector(".shuffle-btn");
var card = document.querySelector(".card");
var deckid;
var actual_card;

async function shufflecards() {
    card.innerHTML =  ' ';
    const deck_response = await fetch(deck_url);
    const deck_json = await deck_response.json();
    deckid = deck_json.deck_id;
    console.log(deckid);
    
    shuffled_deck_url = 'https://deckofcardsapi.com/api/deck/' + deckid + '/draw/?count=1';
    const card_response = await fetch(shuffled_deck_url);
    const card_json = await card_response.json();
    actual_card = card_json.cards[0].image;
    card.innerHTML += '<img src="${actual_card}" alt="Placeholder Image">';
}





