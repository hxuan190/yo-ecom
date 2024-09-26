function getRandomDate(start,end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function getRandomComment() {
    const comment = [
       "Excellent product, loved it!",
        "Could be better.",
        "Did not meet my expectations.",
        "Great value for the price.",
        "Would buy again."
    ];

    return comment[Math.floor(Math.random() * comment.length)];
}

function getRandomStar(){
    return Math.floor(Math.random() * 5) + 1;
}

function generateMockData(numOfMockData){
    const mockData = [];
    
    for (let i = 0; i < numOfMockData; i++){
        mockData.push({
            name: `User ${i}`,
            date: getRandomDate(new Date(2021,0,1), new Date()),
            comment: getRandomComment(),
            stars: getRandomStar()
        })
    }
    return mockData;
}
