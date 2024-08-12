import path from 'node:path';
import { Router, type Request, type Response } from 'express';
const router = Router();

// TODO: POST Request with city name to retrieve weather data

router.post('/', async(_req: Request, res: Response) => {
  console.log(_req.body)
  res.json()

});

  // TODO: GET weather data from city name
router.get('/', async(_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../service/historyService.ts'))
});

// TODO: save city to search history



// TODO: GET search history

router.get('/history', async(_req: Request, res:Response) => {
  res.json()
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async(_req: Request, res: Response) => {
  res.json()
});

export default router;
