process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const options = {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
};
fetch('https://areaa.org/why-join', options)
  .then(res => res.text())
  .then(data => {
    const text = data.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    console.log(text.substring(0, 5000));
  })
  .catch(e => console.error(e));
