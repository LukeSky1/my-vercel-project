document.getElementById('popupButton').addEventListener('click', function() {
    const popup = window.open("", "popup", "width=600,height=400");
    const audioUrl = "https://www.newgrounds.com/audio/listen/938418";
    popup.document.write(`
      <html>
        <head>
          <title>Song Popup</title>
        </head>
        <body>
          <audio controls autoplay>
            <source src="${audioUrl}" type="audio/mp3">
            Your browser does not support the audio element.
          </audio>
        </body>
      </html>
    `);
});
