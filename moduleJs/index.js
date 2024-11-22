import express from 'express'

import cors from 'cors'

import { init, sendNotification } from 'i11rzed3m-server'

const app = express()

const port = 3000

// Settings
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('/ This is moduleJS')
})

app.post('/send-notification', async (req, res) => { 
    const { subscription, payload }  = req.body;
    init('BOj7mhqma4xxLqDH1bwkWCR-9MbuJsoA9Q9J0Y0mtjZ7MGWsM_h5183Lz2Q-sS8J-zPYATq-rXHPcud1THQoZ08', 'n5XxdtuTgq7snpC1e1MA9596ajT3hlpudmt-lvTtpaM');
    const response = await sendNotification(subscription, payload);
    res.json(response);
})

app.listen(port, console.log('listen in port', port))