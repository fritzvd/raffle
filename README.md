# Raffle (meetup.com)

The meetup raffle raffler allows you to "draw" people out of the yes RSVP'ed list of your event.

To run this::

    ```bash
    npm install raffle
    
    ```js
    var raffle = require('raffle')
    var settings = {
        key: 'your-api-key',
        event_id: 'your-event-id'
    }
    
    raffle(settings, function (person) {
        console.log(person['member']['name']    
    })
