/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "For",
            last: "Sale",
            thumbnail: "../images/twoQuixCards.png"
        },
        {
            id: 2,
            first: "Tickets",
            last: "Sold",
            thumbnail: "../images/quixCard2.png"
        },
        {
            id: 3,
            first: "Ticket",
            last: "Activity",
            thumbnail: "../images/twoQuixCards.png"
        }
    ]
}
