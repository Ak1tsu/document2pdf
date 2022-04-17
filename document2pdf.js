const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function convert(url) {
    var request = await fetch(`https://docs.google.com/gview?url=${url}`);
    var data = await request.text();
    var url = await JSON.parse(data.split(">_init(")[1].split(");</script>")[0])[1][28][6];
    return url;
}

module.exports = convert;
