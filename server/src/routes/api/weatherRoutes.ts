import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data

router.post('/city', async(_req: Request, res: Response) => {
  res.json

});

  // TODO: GET weather data from city name
async(_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../service/historyService.ts'))
});

  // TODO: save city to search history



// TODO: GET search history

router.get('/history', async (_req: Request, res:Response) => {
  res.json
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (_req: Request, res: Response) => {
  res.json
});

export default router;
