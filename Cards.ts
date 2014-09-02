interface Card {
    name: string;
}

// blank card, for hiding other players' cards
class Unknown implements Card {
    name = "Unknown";
}

//***** Base cards

class Copper implements Card {
    name = "Copper";
}

class Silver implements Card {
    name = "Silver";
}

class Gold implements Card {
    name = "Gold";
}

class Estate implements Card {
    name = "Estate";
}


// *****

class KingsCourt implements Card {
    name = "King's Court";
}