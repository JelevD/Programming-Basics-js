function pcStore(input) {
    let priceDollarsProcessor = Number(input[0]);
    let priceDollarsVideoCard = Number(input[1]);
    let priceDollarsRam = Number(input[2]);
    let numberOfRam = Number(input[3]);
    let discount = Number(input[4]);

    let priceLvProcessor = priceDollarsProcessor * 1.57;
    let priceLvVideoCard = priceDollarsVideoCard * 1.57;
    let priceLvRam = priceDollarsRam * 1.57;
    let totalRam = priceLvRam * numberOfRam;

    let processor = priceLvProcessor - (priceLvProcessor * discount);
    let videoCard = priceLvVideoCard - (priceLvVideoCard * discount);
    let total = processor + videoCard + totalRam;
    console.log(`Money needed - ${total.toFixed(2)} leva.`)
}
pcStore([500,
    200,
    80,
    2,
    0.05
    ])